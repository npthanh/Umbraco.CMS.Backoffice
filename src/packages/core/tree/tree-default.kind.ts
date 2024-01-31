import type { UmbBackofficeManifestKind } from '@umbraco-cms/backoffice/extension-registry';

const defaultKind: UmbBackofficeManifestKind = {
	type: 'kind',
	alias: 'Umb.Kind.Tree.Default',
	matchKind: 'default',
	matchType: 'tree',
	manifest: {
		type: 'tree',
		kind: 'default',
		element: () => import('./tree-default.element.js'),
		api: () => import('./tree-default.context.js'),
	},
};

export const manifests = [defaultKind];
