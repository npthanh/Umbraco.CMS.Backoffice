import type { UmbControllerHostElement } from '@umbraco-cms/backoffice/controller-api';
import { UmbTreeContextBase } from '@umbraco-cms/backoffice/tree';

export class UmbContentTreeContext extends UmbTreeContextBase<any> {
	constructor(host: UmbControllerHostElement) {
		super(host);
	}

	public dataTypeId: string | null = null;

	public async requestRootItems() {
		console.log('UmbContentTreeContext.requestRootItems', this.dataTypeId);
		debugger;
		await this._init;
		return this.repository!.requestRootTreeItems({ dataTypeId: this.dataTypeId });
	}

	public async requestChildrenOf(parentUnique: string | null) {
		console.log('UmbContentTreeContext.requestChildrenOf', this.dataTypeId);
		debugger;
		await this._init;
		if (parentUnique === undefined) throw new Error('Parent unique cannot be undefined.');
		return this.repository!.requestTreeItemsOf(parentUnique, { dataTypeId: this.dataTypeId });
	}
}

export default UmbContentTreeContext;
