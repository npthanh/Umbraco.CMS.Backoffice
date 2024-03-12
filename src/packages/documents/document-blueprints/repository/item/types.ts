import type { UmbDocumentBlueprintEntityType } from '../../entity.js';
import type { DocumentVariantStateModel } from '@umbraco-cms/backoffice/external/backend-api';
import type { UmbReferenceByUnique } from '@umbraco-cms/backoffice/models';

export interface UmbDocumentBlueprintItemModel {
	entityType: UmbDocumentBlueprintEntityType;
	name: string; // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
	unique: string;
	isTrashed: boolean;
	isProtected: boolean;
	documentType: {
		unique: string;
		icon: string;
		collection: UmbReferenceByUnique | null;
	};
	variants: Array<UmbDocumentBlueprintItemVariantModel>;
}

export interface UmbDocumentBlueprintItemVariantModel {
	name: string;
	culture: string | null;
	state: DocumentVariantStateModel | null;
}
