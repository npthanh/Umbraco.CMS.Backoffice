import { customElement } from '@umbraco-cms/backoffice/external/lit';
import type { ManifestCollection } from '@umbraco-cms/backoffice/extension-registry';
import { UmbExtensionInitializerBaseElement } from '@umbraco-cms/backoffice/extension-registry';

@customElement('umb-collection')
export class UmbCollectionElement extends UmbExtensionInitializerBaseElement<ManifestCollection> {
	getExtensionType() {
		return 'collection';
	}

	getDefaultElementName() {
		return 'umb-collection-default';
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'umb-collection': UmbCollectionElement;
	}
}
