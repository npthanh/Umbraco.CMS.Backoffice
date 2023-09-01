import type { ManifestPropertyEditorUi } from '@umbraco-cms/backoffice/extension-registry';

export const manifest: ManifestPropertyEditorUi = {
	type: 'propertyEditorUi',
	alias: 'My.PropertyEditorUi.CreditCardPicker',
	name: 'My Credit Card Picker',
	loader: () => import('./my-credit-card-picker.element.js'),
	meta: {
		label: 'My Credit Card Picker',
		propertyEditorSchemaAlias: 'Umbraco.Label',
		icon: 'umb:credit-card',
		group: 'pickers',
		settings: {
			properties: [
				{
					alias: 'useSmallCards',
					label: 'Use small cards',
					description: '',
					propertyEditorUiAlias: 'Umb.PropertyEditorUi.Toggle',
				},
			],
		},
	},
};
