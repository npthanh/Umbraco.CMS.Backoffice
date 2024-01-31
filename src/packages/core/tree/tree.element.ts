import type { ManifestTree } from '@umbraco-cms/backoffice/extension-registry';
import { UmbExtensionInitializerBaseElement } from '@umbraco-cms/backoffice/extension-registry';
import { customElement } from '@umbraco-cms/backoffice/external/lit';

@customElement('umb-tree')
export class UmbTreeElement extends UmbExtensionInitializerBaseElement<ManifestTree> {
	getExtensionType() {
		return 'tree';
	}

	getDefaultElementName() {
		return 'umb-tree-default';
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'umb-tree': UmbTreeElement;
	}
}
