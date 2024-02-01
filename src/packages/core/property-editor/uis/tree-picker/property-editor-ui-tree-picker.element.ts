import { html, customElement, property, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/internal/lit-element';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import { UmbPropertyValueChangeEvent } from '@umbraco-cms/backoffice/property-editor';
import { UMB_DOCUMENT_WORKSPACE_CONTEXT } from '@umbraco-cms/backoffice/document';
import { UMB_PROPERTY_CONTEXT } from '@umbraco-cms/backoffice/property';
import type { UmbPropertyEditorConfigCollection } from '@umbraco-cms/backoffice/property-editor';
import type { UmbPropertyEditorUiElement } from '@umbraco-cms/backoffice/extension-registry';
import type { UmbInputTreeElement } from '@umbraco-cms/backoffice/tree';
import type { UmbTreePickerSource } from '@umbraco-cms/backoffice/components';

/**
 * @element umb-property-editor-ui-tree-picker
 */
@customElement('umb-property-editor-ui-tree-picker')
export class UmbPropertyEditorUITreePickerElement extends UmbLitElement implements UmbPropertyEditorUiElement {
	@property()
	value = '';

	@state()
	type?: UmbTreePickerSource['type'];

	@state()
	startNodeId?: string | null;

	@state()
	min = 0;

	@state()
	max = 0;

	@state()
	allowedContentTypeIds?: string | null;

	@state()
	showOpenButton?: boolean;

	@state()
	dataTypeId?: string;

	@property({ attribute: false })
	public set config(config: UmbPropertyEditorConfigCollection | undefined) {
		const startNode: UmbTreePickerSource | undefined = config?.getValueByAlias('startNode');
		if (startNode) {
			this.type = startNode.type;
			this.startNodeId = startNode.id;
		}

		this.min = Number(config?.getValueByAlias('minNumber')) || 0;
		this.max = Number(config?.getValueByAlias('maxNumber')) || 0;

		this.allowedContentTypeIds = config?.getValueByAlias('filter');
		this.showOpenButton = config?.getValueByAlias('showOpenButton');
	}

	constructor() {
		super();

		// Gets the Data Type ID for the current property.
		this.consumeContext(UMB_PROPERTY_CONTEXT, (propertyContext) => {
			// TODO: [LK:2024-02-01] Replace `UMB_DOCUMENT_WORKSPACE_CONTEXT`
			// with an abstracted context that supports both document and media workspaces.
			this.consumeContext(UMB_DOCUMENT_WORKSPACE_CONTEXT, (workspaceContext) => {
				this.observe(propertyContext.alias, (propertyAlias) => {
					if (propertyAlias) {
						workspaceContext.structure.getPropertyStructureByAlias(propertyAlias).then((property) => {
							if (property) {
								this.dataTypeId = property.dataType.unique;
							}
						});
					}
				});
			});
		});
	}

	#onChange(e: CustomEvent) {
		this.value = (e.target as UmbInputTreeElement).value as string;
		this.dispatchEvent(new UmbPropertyValueChangeEvent());
	}

	render() {
		if (!this.dataTypeId && (this.type === 'content' || this.type === 'media')) return;
		return html`<umb-input-tree
			.value=${this.value}
			.type=${this.type}
			.startNodeId=${this.startNodeId ?? ''}
			.min=${this.min}
			.max=${this.max}
			.allowedContentTypeIds=${this.allowedContentTypeIds ?? ''}
			.dataTypeId=${this.dataTypeId}
			?showOpenButton=${this.showOpenButton}
			@change=${this.#onChange}></umb-input-tree>`;
	}
	static styles = [UmbTextStyles];
}

export default UmbPropertyEditorUITreePickerElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-property-editor-ui-tree-picker': UmbPropertyEditorUITreePickerElement;
	}
}
