import { UmbEntityData } from './entity.data';
import { createDocumentTypeTreeItem } from './utils';
import {
	DocumentTypeTreeItem,
	EntityTreeItem,
	DocumentType,
	ContentTypeCompositionType,
} from '@umbraco-cms/backend-api';

export const data: Array<DocumentType> = [
	{
		allowedTemplateKeys: [],
		defaultTemplateKey: null,
		key: 'all-property-editors-document-type-key',
		alias: 'blogPost',
		name: 'Blog Post',
		description: null,
		icon: 'icon-item-arrangement',
		allowedAsRoot: true,
		variesByCulture: true,
		variesBySegment: false,
		isElement: false,
		properties: [
			{
				key: '2',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'colorPicker',
				name: 'Color Picker',
				description: '',
				dataTypeKey: 'dt-colorPicker',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '3',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'contentPicker',
				name: 'Content Picker',
				description: '',
				dataTypeKey: 'dt-contentPicker',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '4',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'eyeDropper',
				name: 'Eye Dropper',
				description: '',
				dataTypeKey: 'dt-eyeDropper',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '5',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'multiUrlPicker',
				name: 'Multi URL Picker',
				description: '',
				dataTypeKey: 'dt-multiUrlPicker',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '6',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'multiNodeTreePicker',
				name: 'Multi Node Tree Picker',
				description: '',
				dataTypeKey: 'dt-multiNodeTreePicker',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '7',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'datePicker',
				name: 'Date Picker',
				description: '',
				dataTypeKey: 'dt-datePicker',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '8',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'email',
				name: 'Email',
				description: '',
				dataTypeKey: 'dt-email',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '9',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'textBox',
				name: 'Text Box',
				description: '',
				dataTypeKey: 'dt-textBox',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '19',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'dropdown',
				name: 'Dropdown',
				description: '',
				dataTypeKey: 'dt-dropdown',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '11',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'textArea',
				name: 'Text Area',
				description: '',
				dataTypeKey: 'dt-textArea',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '12',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'slider',
				name: 'Slider',
				description: '',
				dataTypeKey: 'dt-slider',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '13',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'toggle',
				name: 'Toggle',
				description: '',
				dataTypeKey: 'dt-toggle',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '14',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'tags',
				name: 'Tags',
				description: '',
				dataTypeKey: 'dt-tags',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '15',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'markdownEditor',
				name: 'MarkdownEditor',
				description: '',
				dataTypeKey: 'dt-markdownEditor',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '16',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'radioButtonList',
				name: 'Radio Button List',
				description: '',
				dataTypeKey: 'dt-radioButtonList',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '17',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'checkboxList',
				name: 'Checkbox List',
				description: '',
				dataTypeKey: 'dt-checkboxList',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '18',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'blockList',
				name: 'Block List',
				description: '',
				dataTypeKey: 'dt-blockList',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '19',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'mediaPicker',
				name: 'Media Picker',
				description: '',
				dataTypeKey: 'dt-mediaPicker',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '20',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'imageCropper',
				name: 'Image Cropper',
				description: '',
				dataTypeKey: 'dt-imageCropper',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '21',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'uploadField',
				name: 'Upload Field',
				description: '',
				dataTypeKey: 'dt-uploadField',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '22',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'blockGrid',
				name: 'Block Grid',
				description: '',
				dataTypeKey: 'dt-blockGrid',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '23',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'blockGrid',
				name: 'Icon Picker',
				description: '',
				dataTypeKey: 'dt-iconPicker',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '24',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'numberRange',
				name: 'Number Range',
				description: '',
				dataTypeKey: 'dt-numberRange',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '25',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'orderDirection',
				name: 'Order Direction',
				description: '',
				dataTypeKey: 'dt-orderDirection',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '26',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'overlaySize',
				name: 'Overlay Size',
				description: '',
				dataTypeKey: 'dt-overlaySize',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '27',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'label',
				name: 'Label',
				description: '',
				dataTypeKey: 'dt-label',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '28',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'integer',
				name: 'Integer',
				description: '',
				dataTypeKey: 'dt-integer',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '29',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'decimal',
				name: 'Decimal',
				description: '',
				dataTypeKey: 'dt-decimal',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '30',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'memberPicker',
				name: 'Member Picker',
				description: '',
				dataTypeKey: 'dt-memberPicker',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '31',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'memberGroupPicker',
				name: 'Member Group Picker',
				description: '',
				dataTypeKey: 'dt-memberGroupPicker',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '32',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'userPicker',
				name: 'User Picker',
				description: '',
				dataTypeKey: 'dt-userPicker',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				key: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				parentKey: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedContentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},

	{
		allowedTemplateKeys: [],
		defaultTemplateKey: null,
		key: '29643452-cff9-47f2-98cd-7de4b6807681',
		alias: 'blogPost',
		name: 'Blog Post',
		description: null,
		icon: 'icon-item-arrangement',
		allowedAsRoot: true,
		variesByCulture: true,
		variesBySegment: false,
		isElement: false,
		properties: [
			{
				key: '5b4ca208-134e-4865-b423-06e5e97adf3c',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'blogPostText',
				name: 'Blog Post Text',
				description: null,
				dataTypeKey: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: 'ef7096b6-7c9e-49ba-8d49-395111e65ea2',
				containerKey: '227d6ed2-e118-4494-b8f2-deb69854a56a',
				alias: 'blogTextStringUnderMasterTab',
				name: 'Blog text string under master tab',
				description: null,
				dataTypeKey: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: 'e010c429-b298-499a-9bfe-79687af8972a',
				containerKey: '22177c49-ecba-4f2e-b7fa-3f2c04d02cfb',
				alias: 'blogTextStringUnderGroupUnderMasterTab',
				name: 'Blog text string under group under master tab',
				description: null,
				dataTypeKey: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '1a22749a-c7d2-44bb-b36b-c977c2ced6ef',
				containerKey: '2c943997-b685-432d-a6c5-601d8e7a298a',
				alias: 'localBlogTabString',
				name: 'Local Blog Tab String',
				description: null,
				dataTypeKey: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: '^[0-9]*$',
					regExMessage: null,
				},
				appearance: {
					labelOnTop: true,
				},
			},
		],
		containers: [
			{
				key: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				parentKey: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
			{
				key: '227d6ed2-e118-4494-b8f2-deb69854a56a',
				parentKey: null,
				name: 'Master Tab',
				type: 'Tab',
				sortOrder: 0,
			},
			{
				key: '22177c49-ecba-4f2e-b7fa-3f2c04d02cfb',
				parentKey: '227d6ed2-e118-4494-b8f2-deb69854a56a',
				name: 'Blog Group under master tab',
				type: 'Group',
				sortOrder: 0,
			},
			{
				key: '2c943997-b685-432d-a6c5-601d8e7a298a',
				parentKey: null,
				name: 'Local blog tab',
				type: 'Tab',
				sortOrder: 1,
			},
		],
		allowedContentTypes: [
			{
				key: '29643452-cff9-47f2-98cd-7de4b6807681',
				sortOrder: 0,
			},
		],
		compositions: [
			{
				key: '5035d7d9-0a63-415c-9e75-ee2cf931db92',
				compositionType: ContentTypeCompositionType.INHERITANCE,
			},
			{
				key: '8f68ba66-6fb2-4778-83b8-6ab4ca3a7c5d',
				compositionType: ContentTypeCompositionType.COMPOSITION,
			},
		],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
];

export const treeData: Array<DocumentTypeTreeItem> = [
	{
		name: 'Document Type 1',
		type: 'document-type',
		hasChildren: false,
		key: 'd81c7957-153c-4b5a-aa6f-b434a4964624',
		isContainer: false,
		parentKey: null,
		icon: '',
	},
	{
		name: 'Document Type 2',
		type: 'document-type',
		hasChildren: false,
		key: 'a99e4018-3ffc-486b-aa76-eecea9593d17',
		isContainer: false,
		parentKey: null,
		icon: '',
	},
];

// Temp mocked database
// TODO: all properties are optional in the server schema. I don't think this is correct.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
class UmbDocumentTypeData extends UmbEntityData<DocumentTypeTreeItem> {
	private treeData = treeData;

	constructor() {
		super(data);
	}

	getTreeRoot(): Array<EntityTreeItem> {
		const rootItems = this.treeData.filter((item) => item.parentKey === null);
		return rootItems.map((item) => createDocumentTypeTreeItem(item));
	}

	getTreeItemChildren(key: string): Array<EntityTreeItem> {
		const childItems = this.treeData.filter((item) => item.parentKey === key);
		return childItems.map((item) => createDocumentTypeTreeItem(item));
	}

	getTreeItem(keys: Array<string>): Array<EntityTreeItem> {
		const items = this.treeData.filter((item) => keys.includes(item.key ?? ''));
		return items.map((item) => createDocumentTypeTreeItem(item));
	}
}

export const umbDocumentTypeData = new UmbDocumentTypeData();
