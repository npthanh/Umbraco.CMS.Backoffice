import { UMB_DICTIONARY_ENTITY_TYPE } from '../../entity.js';
import { UMB_DICTIONARY_PICKER_MODAL } from '../../modals/dictionary-picker-modal.token.js';
import { UMB_DICTIONARY_TREE_REPOSITORY_ALIAS } from '../../tree/index.js';
import { UMB_MOVE_DICTIONARY_REPOSITORY_ALIAS } from './repository/index.js';
import { manifests as repositoryManifests } from './repository/manifests.js';
import type { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';

const entityActions: Array<ManifestTypes> = [
	{
		type: 'entityAction',
		kind: 'moveTo',
		alias: 'Umb.EntityAction.Dictionary.Move',
		name: 'Move Dictionary Entity Action',
		forEntityTypes: [UMB_DICTIONARY_ENTITY_TYPE],
		meta: {
			treeRepositoryAlias: UMB_DICTIONARY_TREE_REPOSITORY_ALIAS,
			moveToRepositoryAlias: UMB_MOVE_DICTIONARY_REPOSITORY_ALIAS,
			treePickerModal: UMB_DICTIONARY_PICKER_MODAL,
		},
	},
];

export const manifests = [...entityActions, ...repositoryManifests];