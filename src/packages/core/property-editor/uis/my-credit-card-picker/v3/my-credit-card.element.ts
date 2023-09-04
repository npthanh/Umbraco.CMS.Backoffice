import { html, customElement, property, css } from '@umbraco-cms/backoffice/external/lit';
import { UUICardElement } from '@umbraco-cms/backoffice/external/uui';


// TODO: Rename MyCreditCardElement
@customElement('my-credit-card')
export class UmbCreditCardElement extends UUICardElement {


	@property()
	value?: string;

	@property()
	public get name(): string | undefined {
		return this._name;
	}
	public set name(name: string | undefined) {
		this._name = name;
		this.setAttribute('aria-label', name ?? '');
	}
	private _name?: string | undefined;

	@property({attribute: 'image-src'})
	imageSrc?: string;

	constructor() {
		super();
		this.selectable = true;
		this.deselectable = false;
		this.requestUpdate('selectable');
	}

	firstUpdated(_changedProperties: Map<string | number | symbol, unknown>) {
		super.firstUpdated(_changedProperties);
		this.setAttribute('role', 'button');
	}

	public render() {
    return html`<h5>${this.name}</h5>`;
  }

	static styles = [
		...UUICardElement.styles,
		css`
			:host {
				max-width: 240px;
			}
		`
	];
}

export default UmbCreditCardElement;
