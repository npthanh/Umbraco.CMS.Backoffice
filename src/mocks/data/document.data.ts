import { umbDocumentTypeData } from './document-type.data.js';
import { UmbEntityData } from './entity.data.js';
import { createDocumentTreeItem } from './utils.js';
import {
	ContentStateModel,
	DocumentResponseModel,
	DocumentTreeItemResponseModel,
	PagedDocumentTreeItemResponseModel,
	PagedDocumentTypeResponseModel,
} from '@umbraco-cms/backoffice/backend-api';

export const data: Array<DocumentResponseModel> = [
	{
		urls: [
			{
				culture: 'en-US',
				url: '/',
			},
		],
		templateId: null,
		id: 'all-property-editors-document-id',
		contentTypeId: 'all-property-editors-document-type-id',
		values: [
			{
				alias: 'myCreditCards',
				culture: "en-us",
				segment: null,
				value:
					'mastercard',
			},
			{
				alias: 'myCreditCards',
				culture: "da-dk",
				segment: null,
				value:
					'mastercard',
			},
			{
				alias: 'richTextEditor',
				culture: null,
				segment: null,
				value:
					'Some value for the RTE with an <a href="http://foo.com">external link</a> and an <a href="/{localLink:umb://document/c05da24d7740447b9cdcbd8ce2172e38}">internal link</a> foo foo <div class="umb-macro-holder TestMacro umb-macro-mce_1 mceNonEditable"><!-- <?UMBRACO_MACRO macroAlias="TestMacro" /> --><ins>Macro alias: <strong>TestMacro</strong></ins></div>',
			},
			{
				alias: 'email',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'colorPicker',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'contentPicker',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'eyeDropper',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'multiUrlPicker',
				culture: 'en-us',
				segment: null,
				value: [
					{
						name: undefined,
						published: undefined,
						queryString: undefined,
						target: undefined,
						trashed: undefined,
						udi: 'umb://document/c05da24d7740447b9cdcbd8ce2172e38',
						url: 'umb://document/c05da24d7740447b9cdcbd8ce2172e38',
					},
				],
			},
			{
				alias: 'multiUrlPicker',
				culture: 'da-dk',
				segment: null,
				value: null,
			},
			{
				alias: 'multiNodeTreePicker',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'datePicker',
				culture: null,
				segment: null,
				value: '2023-12-24',
			},
			{
				alias: 'datePickerTime',
				culture: null,
				segment: null,
				value: '2023-12-24 14:52',
			},
			{
				alias: 'time',
				culture: null,
				segment: null,
				value: '14:52:00',
			},
			{
				alias: 'email',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'textBox',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'dropdown',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'textArea',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'slider',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'toggle',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'tags',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'markdownEditor',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'radioButtonList',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'checkboxList',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'blockList',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'mediaPicker',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'imageCropper',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'uploadField',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'blockGrid',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'blockGrid',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'numberRange',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'orderDirection',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'overlaySize',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'label',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'integer',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'decimal',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'memberPicker',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'memberGroupPicker',
				culture: null,
				segment: null,
				value: null,
			},
			{
				alias: 'userPicker',
				culture: null,
				segment: null,
				value: null,
			},
		],
		variants: [
			{
				state: ContentStateModel.PUBLISHED,
				publishDate: '2023-02-06T15:31:51.354764',
				culture: 'en-us',
				segment: null,
				name: 'My homepage',
				createDate: '2023-02-06T15:31:46.876902',
				updateDate: '2023-02-06T15:31:51.354764',
			},
			{
				state: ContentStateModel.PUBLISHED,
				publishDate: '2023-02-06T15:31:51.354764',
				culture: 'da-dk',
				segment: null,
				name: 'Min forside',
				createDate: '2023-02-06T15:31:46.876902',
				updateDate: '2023-02-06T15:31:51.354764',
			},
		],
	}
];

export const treeData: Array<DocumentTreeItemResponseModel> = [
	{
		isProtected: false,
		isPublished: true,
		isEdited: false,
		noAccess: false,
		isTrashed: false,
		id: 'all-property-editors-document-id',
		isContainer: false,
		parentId: null,
		name: 'My homepage',
		type: 'document',
		icon: 'document',
		hasChildren: false,
	},
];

// Temp mocked database
// TODO: all properties are optional in the server schema. I don't think this is correct.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
class UmbDocumentData extends UmbEntityData<DocumentResponseModel> {
	private treeData = treeData;

	constructor() {
		super(data);
	}

	// TODO: Can we do this smarter so we don't need to make this for each mock data:
	insert(item: DocumentResponseModel) {
		const result = super.insert(item);
		this.treeData.push(createDocumentTreeItem(result));
		return result;
	}

	update(id: string, item: DocumentResponseModel) {
		const result = super.save(id, item);
		this.treeData = this.treeData.map((x) => {
			if (x.id === result.id) {
				return createDocumentTreeItem(result);
			} else {
				return x;
			}
		});
		return result;
	}

	getTreeRoot(): PagedDocumentTreeItemResponseModel {
		const items = this.treeData.filter((item) => item.parentId === null);
		const treeItems = items.map((item) => item);
		const total = items.length;
		return { items: treeItems, total };
	}

	getTreeItemChildren(id: string): PagedDocumentTreeItemResponseModel {
		const items = this.treeData.filter((item) => item.parentId === id);
		const treeItems = items.map((item) => item);
		const total = items.length;
		return { items: treeItems, total };
	}

	getTreeItem(ids: Array<string>): Array<DocumentTreeItemResponseModel> {
		const items = this.treeData.filter((item) => ids.includes(item.id ?? ''));
		return items.map((item) => item);
	}

	getDocumentByIdAllowedDocumentTypes(id: string): PagedDocumentTypeResponseModel {
		const item = this.getById(id);
		if (item?.contentTypeId) {
			const docType = umbDocumentTypeData.getById(item.contentTypeId);
			if (docType) {
				const items = docType.allowedContentTypes ?? [];
				const total = items?.length;
				return { items, total };
			}
		}
		return { items: [], total: 0 };
	}

	getAllowedDocumentTypesAtRoot(): PagedDocumentTypeResponseModel {
		const items = umbDocumentTypeData.getAll(); //.filter((docType) => docType.allowedAsRoot);

		const total = items?.length;
		return { items, total };
	}
}

export const umbDocumentData = new UmbDocumentData();
