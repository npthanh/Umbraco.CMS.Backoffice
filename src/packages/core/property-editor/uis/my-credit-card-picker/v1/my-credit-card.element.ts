import { UUITextStyles } from '@umbraco-ui/uui-css';
import { html, customElement, property, LitElement, css } from '@umbraco-cms/backoffice/external/lit';


// TODO: Rename MyCreditCardElement
@customElement('my-credit-card')
export class UmbCreditCardElement extends LitElement {


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

	@property({type: Boolean})
	selected?: boolean;

	@property({attribute: 'image-src'})
	imageSrc?: string;

	firstUpdated(_changedProperties: Map<string | number | symbol, unknown>) {
		super.firstUpdated(_changedProperties);
		this.setAttribute('role', 'button');
	}

	public render() {
    return html`<h5>${this.name}</h5>`;
  }

	static styles = [
		UUITextStyles,
		css`
			:host {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 240px;
				height:120px;
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
			}

			:host([selected])::after {
				content: '';
				border-width: 2px;
			}
		`
	];

}

export default UmbCreditCardElement;
