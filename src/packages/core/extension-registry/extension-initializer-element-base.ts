import { html, property, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/internal/lit-element';
import { umbExtensionsRegistry } from '@umbraco-cms/backoffice/extension-registry';
import type { ManifestWithDynamicConditions, UmbApi } from '@umbraco-cms/backoffice/extension-api';
import { UmbExtensionElementInitializer, createExtensionApi } from '@umbraco-cms/backoffice/extension-api';

export abstract class UmbExtensionInitializerBaseElement<
	ManifestType extends ManifestWithDynamicConditions,
> extends UmbLitElement {
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
		this.#props = newVal;
		if (this.#extensionElementController) {
			this.#extensionElementController.properties = newVal;
		}
	}
	#props?: Record<string, unknown> = {};

	#extensionElementController?: UmbExtensionElementInitializer<ManifestType>;

	@state()
	_element: HTMLElement | undefined;

	#manifest?: ManifestType;

	abstract getExtensionType(): string;
	abstract getDefaultElementName(): string;

	#observeManifest() {
		if (!this._alias) return;
		this.observe(
			umbExtensionsRegistry.byTypeAndAlias(this.getExtensionType(), this._alias),
			async (manifest) => {
				if (!manifest) return;
				this.#manifest = manifest as unknown as ManifestType;
				this.#createApi();
				this.#createElement();
			},
			'umbObserveTreeManifest',
		);
	}

	async #createApi() {
		if (!this.#manifest) throw new Error('No manifest');
		const api = (await createExtensionApi(this.#manifest, [this])) as unknown as any;
		if (!api) throw new Error('No api');
		api.setManifest(this.#manifest);
	}

	async #createElement() {
		if (!this.#manifest) throw new Error('No manifest');

		const extController = new UmbExtensionElementInitializer<ManifestType>(
			this,
			umbExtensionsRegistry,
			this.#manifest.alias,
			this.#extensionChanged,
			this.getDefaultElementName(),
		);

		extController.properties = this.#props;

		this.#extensionElementController = extController;
	}

	#extensionChanged = (isPermitted: boolean, controller: UmbExtensionElementInitializer<ManifestType>) => {
		this._element = isPermitted ? controller.component : undefined;
		this.requestUpdate('_element');
	};

	render() {
		return html`${this._element}`;
	}
}
