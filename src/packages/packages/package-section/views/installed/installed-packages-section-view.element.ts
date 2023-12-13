import { UmbPackageRepository } from '../../../package/repository/package.repository.js';
import type { UmbPackageWithMigrationStatus } from '../../../types.js';
import { html, css, customElement, state, repeat } from '@umbraco-cms/backoffice/external/lit';
import { combineLatest } from '@umbraco-cms/backoffice/external/rxjs';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import { UmbLitElement } from '@umbraco-cms/internal/lit-element';
import { UmbSectionViewElement } from '@umbraco-cms/backoffice/extension-registry';

import './installed-packages-section-view-item.element.js';

@customElement('umb-installed-packages-section-view')
export class UmbInstalledPackagesSectionViewElement extends UmbLitElement implements UmbSectionViewElement {
	@state()
	private _installedPackages: UmbPackageWithMigrationStatus[] = [];

	@state()
	private _migrationPackages: UmbPackageWithMigrationStatus[] = [];

	#packageRepository: UmbPackageRepository;

	constructor() {
		super();
		this.#packageRepository = new UmbPackageRepository(this);
	}

	firstUpdated() {
		this._loadInstalledPackages();
	}

	/**
	 * Fetch the installed packages from the server
	 */
	private async _loadInstalledPackages() {
		const data = await Promise.all([this.#packageRepository.rootItems(), this.#packageRepository.migrations()]);

		const [package$, migration$] = data;

		this.observe(combineLatest([package$, migration$]), ([packages, migrations]) => {
			this._installedPackages = packages.map((p) => {
				const migration = migrations.find((m) => m.packageName === p.name);
				if (migration) {
					// Remove that migration from the list
					migrations = migrations.filter((m) => m.packageName !== p.name);
				}

				return {
					...p,
					hasPendingMigrations: migration?.hasPendingMigrations ?? false,
				};
			});

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			this._migrationPackages = [
				...migrations.map((m) => ({
					name: m.packageName,
					hasPendingMigrations: m.hasPendingMigrations ?? false,
				})),
			];
			/*this._installedPackages = [
				...this._installedPackages,
				...migrations.map((m) => ({
					name: m.packageName,
					hasPendingMigrations: m.hasPendingMigrations ?? false,
				})),
			];*/
		});
	}

	render() {
		if (this._installedPackages.length) return html`${this._renderCustomMigrations()} ${this._renderInstalled()} `;
		return html`<div class="no-packages">
			<h2><strong>No packages have been installed</strong></h2>
			<p>
				Browse through the available packages using the <strong>'Packages'</strong> icon in the top right of your screen
			</p>
		</div>`;
	}

	private _renderInstalled() {
		return html`<uui-box headline="Installed packages" style="--uui-box-default-padding:0">
			<uui-ref-list>
				${repeat(
					this._installedPackages,
					(item) => item.name,
					(item) =>
						html`<umb-installed-packages-section-view-item
							.name=${item.name}
							.version=${item.version}
							.hasPendingMigrations=${item.hasPendingMigrations}></umb-installed-packages-section-view-item>`,
				)}
			</uui-ref-list>
		</uui-box>`;
	}

	private _renderCustomMigrations() {
		if (!this._migrationPackages) return;
		return html`<uui-box headline="Migrations" style="--uui-box-default-padding:0">
			<uui-ref-list>
				${repeat(
					this._migrationPackages,
					(item) => item.name,
					(item) =>
						html`<umb-installed-packages-section-view-item
							.name=${item.name}
							.version=${item.version}
							.customIcon="${'icon-sync'}"
							.hasPendingMigrations=${item.hasPendingMigrations}></umb-installed-packages-section-view-item>`,
				)}
			</uui-ref-list>
		</uui-box>`;
	}

	static styles = [
		UmbTextStyles,
		css`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}
			uui-box {
				margin-top: var(--uui-size-space-5);
				padding-bottom: var(--uui-size-space-1);
			}

			umb-installed-packages-section-view-item {
				padding: var(--uui-size-space-3) 0 var(--uui-size-space-2);
			}

			umb-installed-packages-section-view-item:not(:first-child) {
				border-top: 1px solid var(--uui-color-border, #d8d7d9);
			}

			.no-packages {
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				align-items: center;
			}
		`,
	];
}

export default UmbInstalledPackagesSectionViewElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-installed-packages-section-view': UmbInstalledPackagesSectionViewElement;
	}
}
