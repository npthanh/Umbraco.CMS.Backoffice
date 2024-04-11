import { UMB_MEDIA_TYPE_ENTITY_TYPE } from '../../entity.js';
import { UMB_MEDIA_TYPE_TREE_REPOSITORY_ALIAS, UMB_MEDIA_TYPE_PICKER_MODAL } from '../../tree/index.js';
import { UMB_MOVE_MEDIA_TYPE_REPOSITORY_ALIAS } from './repository/index.js';
import { manifests as repositoryManifests } from './repository/manifests.js';
import type { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';

const entityActions: Array<ManifestTypes> = [
	{
		type: 'entityAction',
		kind: 'moveTo',
		alias: 'Umb.EntityAction.MediaType.Move',
		name: 'Move Media Type Entity Action',
		forEntityTypes: [UMB_MEDIA_TYPE_ENTITY_TYPE],
		meta: {
			treeRepositoryAlias: UMB_MEDIA_TYPE_TREE_REPOSITORY_ALIAS,
			moveToRepositoryAlias: UMB_MOVE_MEDIA_TYPE_REPOSITORY_ALIAS,
			treePickerModal: UMB_MEDIA_TYPE_PICKER_MODAL,
		},
	},
];

export const manifests = [...entityActions, ...repositoryManifests];