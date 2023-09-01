// TODO: Do not use Umb in the name here:
import { UmbCreditCardElement } from './my-credit-card.element.js';
import { html, customElement, property, css, LitElement } from '@umbraco-cms/backoffice/external/lit';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import { UmbPropertyEditorExtensionElement } from '@umbraco-cms/backoffice/extension-registry';
import { UUITextStyles } from '@umbraco-cms/backoffice/external/uui';
import type { UmbDataTypeConfigCollection } from '@umbraco-cms/backoffice/components';

import './my-credit-card.element.js';
import { UMB_VARIANT_DATASET_CONTEXT } from '@umbraco-cms/backoffice/workspace';

@customElement('umb-credit-card-picker')
export class UmbCreditCardPickerElement extends UmbElementMixin(LitElement) implements UmbPropertyEditorExtensionElement {

	@property()
	value: string | undefined;

	@property({ attribute: false })
	public config?: UmbDataTypeConfigCollection;

	constructor() {
		super();
		this.consumeContext(UMB_VARIANT_DATASET_CONTEXT, (context) => {
			console.log("variant ID:", context.getVariantId());
		});
	}

	private _onCardClicked = (e:MouseEvent) => {
		const target = e.target as UmbCreditCardElement;
		this.value = target.value;
		this.dispatchEvent(new CustomEvent('property-value-change'));
	};

	render() {
		return html`
			<my-credit-card @selected=${this._onCardClicked} name="Visa" value="visa" ?selected=${"visa" === this.value}>
			</my-credit-card>
			<my-credit-card @selected=${this._onCardClicked} name="Mastercard" value="mastercard" ?selected=${"mastercard" === this.value}>
			</my-credit-card>
		`;
	}

	static styles = [UUITextStyles, css`
		:host {
			display: flex;
			flex-direction: row;
			gap: var(--uui-size-space-4)
		}
	`];
}

export default UmbCreditCardPickerElement;
