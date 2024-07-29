import { css, html, customElement } from '@umbraco-cms/backoffice/external/lit';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import type { UmbWorkspaceViewElement } from '@umbraco-cms/backoffice/extension-registry';

@customElement('umb-block-grid-type-workspace-view-advanced')
export class UmbBlockGridTypeWorkspaceViewAdvancedElement extends UmbLitElement implements UmbWorkspaceViewElement {
	override render() {
		return html`
			<uui-box headline=${this.localize.term('blockEditor_headlineAdvanced')}>
				<umb-property
					label=${this.localize.term('blockEditor_labelEditorSize')}
					alias="editorSize"
					property-editor-ui-alias="Umb.PropertyEditorUi.OverlaySize"></umb-property>
				<umb-property
					label=${this.localize.term('blockEditor_gridInlineEditing')}
					alias="inlineEditing"
					property-editor-ui-alias="Umb.PropertyEditorUi.Toggle"></umb-property>
				<umb-property
					label=${this.localize.term('blockEditor_forceHideContentEditor')}
					alias="hideContentEditor"
					property-editor-ui-alias="Umb.PropertyEditorUi.Toggle"></umb-property>
			</uui-box>
			<uui-box headline=${this.localize.term('blockEditor_headlineCatalogueAppearance')}>
				<umb-property
					label=${this.localize.term('blockEditor_labelBackgroundColor')}
					alias="backgroundColor"
					property-editor-ui-alias="Umb.PropertyEditorUi.EyeDropper"
					.config=${[{ alias: 'showAlpha', value: true }]}></umb-property>
				<umb-property
					label=${this.localize.term('blockEditor_labelIconColor')}
					alias="iconColor"
					property-editor-ui-alias="Umb.PropertyEditorUi.EyeDropper"
					.config=${[{ alias: 'showAlpha', value: true }]}></umb-property>
				<umb-property
					label=${this.localize.term('blockEditor_thumbnail')}
					alias="thumbnail"
					property-editor-ui-alias="Umb.PropertyEditorUi.StaticFilePicker"
					.config=${[
						{
							alias: 'singleItemMode',
							value: true,
						},
					]}></umb-property>
			</uui-box>
		`;
	}

	static override styles = [
		UmbTextStyles,
		css`
			:host {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
				gap: var(--uui-size-layout-1);
				margin: var(--uui-size-layout-1);
				padding-bottom: var(--uui-size-layout-1); // To enforce some distance to the bottom of the scroll-container.
			}
		`,
	];
}

export default UmbBlockGridTypeWorkspaceViewAdvancedElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-block-grid-type-workspace-view-advanced': UmbBlockGridTypeWorkspaceViewAdvancedElement;
	}
}
