import { css, customElement, html, property } from "@umbraco-cms/backoffice/external/lit";
import { UUICardElement } from "@umbraco-cms/backoffice/external/uui"

@customElement('my-credit-card')
export class MyCreditCardElement extends UUICardElement {

  @property()
  value?:string;

  @property()
  name?:string;

  constructor() {
    super();
    this.selectable = true;
    this.deselectable = false;
  }

  render() {
    return html`
      <h5>${this.name}</h5>
    `
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

export default MyCreditCardElement;
