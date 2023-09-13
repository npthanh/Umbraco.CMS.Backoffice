import { customElement, LitElement, html, property, css, repeat, state } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles } from "@umbraco-cms/backoffice/style";
import { UmbPropertyEditorExtensionElement } from "@umbraco-cms/backoffice/extension-registry";

import "./my-credit-card.element.js";
import MyCreditCardElement from "./my-credit-card.element.js";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { UMB_VARIANT_CONTEXT } from "@umbraco-cms/backoffice/workspace";
import { UmbVariantId } from "@umbraco-cms/backoffice/variant";

@customElement('my-element')
export class MyElement extends UmbElementMixin(LitElement) implements UmbPropertyEditorExtensionElement {

  @property()
  value: string | undefined;

	@state()
	private _allCards?: Array<any>;

	@state()
	private _filteredCards?: Array<any>;

	private _variantId?: UmbVariantId;

	constructor() {
		super();
		this._getCreditCards();

		this.consumeContext(UMB_VARIANT_CONTEXT, (context) => {
			this._variantId = context.getVariantId();
			this.filterCards();
		});
	}

	private filterCards() {
		if(!this._variantId || !this._allCards) return;
		this._filteredCards = this._allCards.filter(card => card.cultures.find((culture: string) => this._variantId!.equal(UmbVariantId.Create({culture}))));
	}

  private async _getCreditCards() {
    const response = await fetch('/App_Plugins/my-credit-card-picker-credit-cards.json');
    const json = await response.json();
    this._allCards = json.availableCards;
		this.filterCards(); // IMPORTANT!!!
  }

  private _onCardSelected = (e:MouseEvent) => {
    const target = e.target as MyCreditCardElement;
    this.value = target.value;
    this.dispatchEvent(new CustomEvent('property-value-change'));
  }

	render() {
    return this._filteredCards ? repeat(
      this._filteredCards,
      (card) => card.value,
      (card) => html`
        <my-credit-card
          @selected=${this._onCardSelected}
          ?selected=${this.value === card.value}
          name=${card.name}
          value=${card.value}>
        </my-credit-card>
        `
    ) : ''
  }

	static styles = [UmbTextStyles, css`
		:host {
			display: flex;
			flex-direction: row;
			gap: var(--uui-size-space-4)
		}
	`];

}

export default MyElement;
