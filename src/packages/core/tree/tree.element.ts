import { customElement, html, property, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/internal/lit-element';
import type { ManifestTree } from '@umbraco-cms/backoffice/extension-registry';
import { umbExtensionsRegistry } from '@umbraco-cms/backoffice/extension-registry';
import {
	UmbExtensionElementInitializer,
	createExtensionApi,
	createExtensionElement,
} from '@umbraco-cms/backoffice/extension-api';

@customElement('umb-tree')
export class UmbTreeElement extends UmbLitElement {
	_alias?: string;
	@property({ type: String, reflect: true })
	get alias() {
		return this._alias;
	}
	set alias(newVal) {
		this._alias = newVal;
		this.#observeManifest();
	}

	@property({ type: Object, attribute: false })
	get props() {
		return this.#props;
	}
	set props(newVal: Record<string, unknown> | undefined) {
		// TODO, compare changes since last time. only reset the ones that changed. This might be better done by the controller is self:
		debugger;
		this.#props = newVal;
		if (this.#extensionsController) {
			this.#extensionsController.properties = newVal;
		}
		this.#observeManifest();
	}
	#props?: Record<string, unknown> = {};

	#extensionsController?: UmbExtensionElementInitializer<ManifestTree>;

	@state()
	_element: HTMLElement | undefined;

	#manifest?: ManifestTree;

	#observeManifest() {
		debugger;
		if (this._alias && this.props) {
			this.observe(
				umbExtensionsRegistry.byTypeAndAlias('tree', this._alias),
				async (manifest) => {
					if (!manifest) return;
					this.#manifest = manifest;
					this.#createApi();
					this.#createElement();
				},
				'umbObserveTreeManifest',
			);
		}
	}

	async #createApi() {
		if (!this.#manifest) throw new Error('No manifest');
		const api = (await createExtensionApi(this.#manifest, [this])) as unknown as any;
		if (!api) throw new Error('No api');
		api.setManifest(this.#manifest);
	}

	async #createElement() {
		if (!this.#manifest) throw new Error('No manifest');

		this.#createController();

		//this._element = await createExtensionElement(this.#manifest);
		//this.requestUpdate();
	}

	#createController() {
		debugger;

		if (!this.#manifest) throw new Error('No manifest');

		const extController = new UmbExtensionElementInitializer<ManifestTree>(
			this,
			umbExtensionsRegistry,
			this.#manifest.alias,
			this.#extensionChanged,
			'umb-tree-default',
		) as any;

		extController.properties = this.#props;

		this.#extensionsController = extController;

		//return extController;
	}

	#extensionChanged = (isPermitted: boolean, controller: UmbExtensionElementInitializer<ManifestTree>) => {
		console.log('LK.extensionChanged', [isPermitted, controller]);
		debugger;
		this._element = controller.component;
		this.requestUpdate('_element');
	};

	render() {
		return html`${this._element}`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'umb-tree': UmbTreeElement;
	}
}
