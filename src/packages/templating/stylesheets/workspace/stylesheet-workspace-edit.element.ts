import { UUITextStyles } from '@umbraco-ui/uui-css';
import { css, html, LitElement } from '@umbraco-cms/backoffice/external/lit';
import { customElement } from '@umbraco-cms/backoffice/external/lit';

@customElement('umb-stylesheet-workspace-edit')
export class UmbStylesheetWorkspaceEditElement extends LitElement {
	render() {
		return html` <umb-workspace-editor alias="Umb.Workspace.Stylesheet">Stylesheet workspace</umb-workspace-editor> `;
	}

	static styles = [
		UUITextStyles,
		css`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`,
	];
}

export default UmbStylesheetWorkspaceEditElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-stylesheet-workspace-edit': UmbStylesheetWorkspaceEditElement;
	}
}
