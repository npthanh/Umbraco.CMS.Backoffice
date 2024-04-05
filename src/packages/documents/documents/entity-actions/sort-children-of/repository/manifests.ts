import { UMB_SORT_CHILDREN_OF_DOCUMENT_REPOSITORY_ALIAS } from './constants.js';
import type { ManifestRepository } from '@umbraco-cms/backoffice/extension-registry';

const repository: ManifestRepository = {
	type: 'repository',
	alias: UMB_SORT_CHILDREN_OF_DOCUMENT_REPOSITORY_ALIAS,
	name: 'Sort Children Of Document Repository',
	api: () => import('./sort-children-of.repository.js'),
};

export const manifests = [repository];