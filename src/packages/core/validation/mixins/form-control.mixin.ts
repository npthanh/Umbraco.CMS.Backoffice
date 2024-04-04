import { UmbValidationInvalidEvent } from '../events/validation-invalid.event.js';
import { UmbValidationValidEvent } from '../events/validation-valid.event.js';
import { property, type LitElement } from '@umbraco-cms/backoffice/external/lit';
import type { HTMLElementConstructor } from '@umbraco-cms/backoffice/extension-api';

type UmbNativeFormControlElement = Pick<HTMLInputElement, 'validity' | 'checkValidity' | 'validationMessage'> &
	HTMLElement; // Eventually use a specific interface or list multiple options like appending these types: ... | HTMLTextAreaElement | HTMLSelectElement

/* FlagTypes type options originate from:
 * https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
 * */
type FlagTypes =
	| 'badInput'
	| 'customError'
	| 'patternMismatch'
	| 'rangeOverflow'
	| 'rangeUnderflow'
	| 'stepMismatch'
	| 'tooLong'
	| 'tooShort'
	| 'typeMismatch'
	| 'valueMissing'
	| 'badInput'
	| 'valid';

// Acceptable as an internal interface/type, BUT if exposed externally this should be turned into a public interface in a separate file.
interface UmbFormControlValidationConfig {
	flagKey: FlagTypes;
	getMessageMethod: () => string;
	checkMethod: () => boolean;
}

export interface UmbFormControlMixinInterface<ValueType, DefaultValueType> extends HTMLElement {
	addValidation: (flagKey: FlagTypes, getMessageMethod: () => string, checkMethod: () => boolean) => void;
	removeValidation: (obj: UmbFormControlValidationConfig) => void;
	//static formAssociated: boolean;
	getFormElement(): HTMLElement | undefined | null; // allows for null as it makes it simpler to just implement a querySelector as that might return null. [NL]
	focusFirstInvalidElement(): void;
	get value(): ValueType | DefaultValueType;
	set value(newValue: ValueType | DefaultValueType);
	formResetCallback(): void;
	checkValidity(): boolean;
	get validationMessage(): string;
	get validity(): ValidityState;
	setCustomValidity(error?: string): void;
	submit(): void;
	pristine: boolean;
}

export declare abstract class UmbFormControlMixinElement<ValueType, DefaultValueType>
	extends LitElement
	implements UmbFormControlMixinInterface<ValueType, DefaultValueType>
{
	protected _internals: ElementInternals;
	protected _runValidators(): void;
	addValidation: (flagKey: FlagTypes, getMessageMethod: () => string, checkMethod: () => boolean) => void;
	removeValidation: (obj: UmbFormControlValidationConfig) => void;
	protected addFormControlElement(element: UmbNativeFormControlElement): void;

	//static formAssociated: boolean;
	getFormElement(): HTMLElement | undefined | null;
	focusFirstInvalidElement(): void;
	get value(): ValueType | DefaultValueType;
	set value(newValue: ValueType | DefaultValueType);
	formResetCallback(): void;
	checkValidity(): boolean;
	get validationMessage(): string;
	get validity(): ValidityState;
	setCustomValidity(error?: string): void;
	submit(): void;
	pristine: boolean;
}

/**
 * The mixin allows a custom element to participate in HTML forms.
 *
 * @param {Object} superClass - superclass to be extended.
 * @mixin
 */
export const UmbFormControlMixin = <
	ValueType = FormDataEntryValue | FormData,
	T extends HTMLElementConstructor<LitElement> = HTMLElementConstructor<LitElement>,
	DefaultValueType = undefined,
>(
	superClass: T,
	defaultValue: DefaultValueType = undefined as DefaultValueType,
) => {
	abstract class UmbFormControlMixinClass extends superClass {
		/**
		 * This is a static class field indicating that the element is can be used inside a native form and participate in its events.
		 * It may require a polyfill, check support here https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/attachInternals.
		 * Read more about form controls here https://web.dev/more-capable-form-controls/
		 * @type {boolean}
		 */
		static readonly formAssociated = true;

		/**
		 * Value of this form control.
		 * If you dont want the setFormValue to be called on the ElementInternals, then prevent calling this method, by not calling super.value = newValue in your implementation of the value setter method.
		 * @type {string}
		 * @attr value
		 * @default ''
		 */
		@property({ reflect: false }) // Do not 'reflect' as the attribute is used as fallback.
		get value(): ValueType | DefaultValueType {
			return this.#value;
		}
		set value(newValue: ValueType | DefaultValueType) {
			this.#value = newValue;
			this._runValidators();
		}

		// Validation
		//private _validityState = new UmbValidityState();
		#validity: any = {};

		/**
		 * Determines wether the form control has been touched or interacted with, this determines wether the validation-status of this form control should be made visible.
		 * @type {boolean}
		 * @attr
		 * @default true
		 */
		@property({ type: Boolean, reflect: true })
		public set pristine(value: boolean) {
			if (this._pristine !== value) {
				this._pristine = value;
				this.#dispatchValidationState();
			}
		}
		public get pristine(): boolean {
			return this._pristine;
		}
		private _pristine: boolean = true;

		#value: ValueType | DefaultValueType = defaultValue;
		protected _internals: ElementInternals;
		#form: HTMLFormElement | null = null;
		#validators: UmbFormControlValidationConfig[] = [];
		#formCtrlElements: UmbNativeFormControlElement[] = [];

		constructor(...args: any[]) {
			super(...args);
			this._internals = this.attachInternals();

			this.addEventListener('blur', () => {
				this.pristine = false;
				this.checkValidity();
			});
		}

		/**
		 * Get internal form element.
		 * This has to be implemented to provide a FormControl Element of choice for the given context. The element is used as anchor for validation-messages.
		 * @method getFormElement
		 * @returns {HTMLElement | undefined | null}
		 */
		getFormElement(): HTMLElement | undefined | null {
			return this.#formCtrlElements.find((el) => el.validity.valid === false);
		}

		/**
		 * Focus first element that is invalid.
		 * @method focusFirstInvalidElement
		 * @returns {HTMLElement | undefined}
		 */
		focusFirstInvalidElement() {
			const firstInvalid = this.#formCtrlElements.find((el) => el.validity.valid === false);
			if (firstInvalid) {
				if ('focusFirstInvalidElement' in firstInvalid) {
					(firstInvalid as any).focusFirstInvalidElement();
				} else {
					firstInvalid.focus();
				}
			} else {
				this.focus();
			}
		}

		disconnectedCallback(): void {
			super.disconnectedCallback();
			this.#removeFormListeners();
		}
		#removeFormListeners() {
			if (this.#form) {
				this.#form.removeEventListener('submit', this.#onFormSubmit);
			}
		}

		/**
		 * Add validation, to validate this Form Control.
		 * See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState for available Validator FlagTypes.
		 *
		 * @example
		 * this.addValidation(
		 *  'tooLong',
		 *  () => 'This input contains too many characters',
		 *  () => this._value.length > 10
		 * );
		 * @method addValidation
		 * @param {FlagTypes} flagKey the type of validation.
		 * @param {method} getMessageMethod method to retrieve relevant message. Is executed every time the validator is re-executed.
		 * @param {method} checkMethod method to determine if this validator should invalidate this form control. Return true if this should prevent submission.
		 */
		addValidation(
			flagKey: FlagTypes,
			getMessageMethod: () => string,
			checkMethod: () => boolean,
		): UmbFormControlValidationConfig {
			const validator = {
				flagKey: flagKey,
				getMessageMethod: getMessageMethod,
				checkMethod: checkMethod,
			};
			this.#validators.push(validator);
			return validator;
		}
		removeValidation(validator: UmbFormControlValidationConfig) {
			const index = this.#validators.indexOf(validator);
			if (index !== -1) {
				this.#validators.splice(index, 1);
			}
		}

		/**
		 * @method addFormControlElement
		 * @description Important notice if adding a native form control then ensure that its value and thereby validity is updated when value is changed from the outside.
		 * @param element {UmbNativeFormControlElement} - element to validate and include as part of this form association.
		 */
		protected addFormControlElement(element: UmbNativeFormControlElement) {
			this.#formCtrlElements.push(element);
			element.addEventListener(UmbValidationInvalidEvent.TYPE, () => {
				this._runValidators();
			});
			element.addEventListener(UmbValidationValidEvent.TYPE, () => {
				this._runValidators();
			});
			// If we are in validationMode/'touched'/not-pristine then we need to validate this newly added control. [NL]
			if (this._pristine === false) {
				// I think we could just execute validators for the new control, but now lets just run al of it again. [NL]
				this._runValidators();
			}
		}

		/**
		 * @method _runValidators
		 * @description Run all validators and set the validityState of this form control.
		 * Run this method when you want to re-run all validators.
		 * This can be relevant if you have a validators that is using values that is not triggering the Lit Updated Callback.
		 * Such are mainly properties that are not declared as a Lit state and or Lit property.
		 */
		protected _runValidators() {
			//this._validityState = new UmbValidityState();
			this.#validity = {};
			const messages: Set<string> = new Set();
			let innerFormControlEl: UmbNativeFormControlElement | undefined = undefined;

			// Loop through inner native form controls to adapt their validityState. [NL]
			this.#formCtrlElements.forEach((formCtrlEl) => {
				let key: keyof ValidityState;
				for (key in formCtrlEl.validity) {
					if (key !== 'valid' && formCtrlEl.validity[key]) {
						this.#validity[key] = true;
						messages.add(formCtrlEl.validationMessage);
						innerFormControlEl ??= formCtrlEl;
						//this._internals.setValidity(this.#validity, formCtrlEl.validationMessage, formCtrlEl);
					} //else {
					//this.#validity[key] = false;
					//}
				}
			});

			// Loop through custom validators, currently its intentional to have them overwritten native validity. but might need to be reconsidered (This current way enables to overwrite with custom messages) [NL]
			this.#validators.forEach((validator) => {
				if (validator.checkMethod()) {
					this.#validity[validator.flagKey] = true;
					messages.add(validator.getMessageMethod());
				} //else {
				//this.#validity[validator.flagKey] = false;
				//}
			});

			const hasError = Object.values(this.#validity).includes(true);

			// https://developer.mozilla.org/en-US/docs/Web/API/ValidityState#valid
			this.#validity.valid = !hasError;

			// Transfer the new validityState to the ElementInternals. [NL]
			this._internals.setValidity(
				this.#validity,
				// Turn messages into an array and join them with a comma. [NL]:
				[...messages].join(', '),
				innerFormControlEl ?? this.getFormElement() ?? undefined,
			);

			/*
			if (!hasError) {
				this._internals.setValidity({});
			}
			*/

			this.#dispatchValidationState();
		}

		#dispatchValidationState() {
			// Do not fire validation events unless we are not pristine/'untouched'/not-in-validation-mode. [NL]
			if (this._pristine === true) return;
			if (this.#validity.valid) {
				this.dispatchEvent(new UmbValidationValidEvent());
			} else {
				this.dispatchEvent(new UmbValidationInvalidEvent());
			}
		}

		updated(changedProperties: Map<string | number | symbol, unknown>) {
			super.updated(changedProperties);
			this._runValidators();
		}

		#onFormSubmit = () => {
			this.pristine = false;
		};

		public formAssociatedCallback() {
			this.#removeFormListeners();
			this.#form = this._internals.form;
			if (this.#form) {
				// This relies on the form begin a 'uui-form': [NL]
				if (this.#form.hasAttribute('submit-invalid')) {
					this.pristine = false;
				}
				this.#form.addEventListener('submit', this.#onFormSubmit);
			}
		}
		public formResetCallback() {
			this.pristine = true;
			this.value = this.getInitialValue() ?? this.getDefaultValue();
		}

		protected getDefaultValue(): DefaultValueType {
			return defaultValue;
		}
		protected getInitialValue(): ValueType | DefaultValueType {
			return this.getAttribute('value') as ValueType | DefaultValueType;
		}

		public checkValidity() {
			this.pristine = false;
			this._runValidators();
			console.log('form control checkValidity', this.#validity.valid, this.#validity);

			for (const key in this.#formCtrlElements) {
				if (this.#formCtrlElements[key].checkValidity() === false) {
					return false;
				}
			}

			return this._internals?.checkValidity();
		}

		// https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
		public get validity(): ValidityState {
			return this.#validity;
		}

		get validationMessage() {
			return this._internals?.validationMessage;
		}
	}
	return UmbFormControlMixinClass as unknown as HTMLElementConstructor<
		UmbFormControlMixinElement<ValueType, DefaultValueType>
	> &
		T;
};