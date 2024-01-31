import { customElement, property } from '@umbraco-cms/backoffice/external/lit';
import { UmbTreeDefaultElement } from '@umbraco-cms/backoffice/tree';

@customElement('umb-content-tree')
export class UmbContentTreeElement extends UmbTreeDefaultElement {
	#dataTypeId: string | undefined;

	@property({ type: String })
	set dataTypeId(newVal) {
		debugger;
		this.#dataTypeId = newVal;
		console.log('set.dataTypeId._treeContext', this._treeContext);
		if (this._treeContext) {
			this._treeContext.dataTypeId = newVal;
		}
	}
	get dataTypeId() {
		return this.#dataTypeId; //this._treeContext.dataTypeId;
	}

	// constructor() {
	// 	super();
	// }

// 	async firstUpdated() {
// 		console.log('firstUpdated._treeContext', this._treeContext);
// 		if (this._treeContext) {
// 			this._treeContext.dataTypeId = this.#dataTypeId;
// 		}
// 		console.log('firstUpdated', [this.#dataTypeId, this.dataTypeId]);
// 		await this._init;

// 		debugger;
// 		this._observeTreeRoot();
// 		this._observeRootItems();
// 	}
}

export default UmbContentTreeElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-content-tree': UmbContentTreeElement;
	}
}
