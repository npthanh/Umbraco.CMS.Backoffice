import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';

@customElement('umb-test-resource-controller')
export default class UmbTestResourceControllerElement extends UmbElementMixin(LitElement) {
	render() {
		return html`<slot></slot>`;
	}
}
