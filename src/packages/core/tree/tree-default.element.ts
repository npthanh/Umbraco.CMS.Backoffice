import type { UmbTreeDefaultContext } from './tree-default.context.js';
import type { UmbTreeItemModelBase } from './types.js';
import { html, nothing, customElement, property, state, repeat } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/internal/lit-element';
import type { UmbObserverController } from '@umbraco-cms/backoffice/observable-api';

import './tree-item-default/tree-item.element.js';
import './tree-item-base/tree-item-base.element.js';

export type UmbTreeSelectionConfiguration = {
	multiple?: boolean;
	selectable?: boolean;
	selection?: Array<string | null>;
};

@customElement('umb-tree-default')
export class UmbTreeDefaultElement extends UmbLitElement {
	private _selectionConfiguration: UmbTreeSelectionConfiguration = {
		multiple: false,
		selectable: true,
		selection: [],
	};

	@property({ type: Object })
	set selectionConfiguration(config: UmbTreeSelectionConfiguration) {
		this._selectionConfiguration = config;
		this._treeContext?.selection.setMultiple(config.multiple ?? false);
		this._treeContext?.selection.setSelectable(config.selectable ?? true);
		this._treeContext?.selection.setSelection(config.selection ?? []);
	}
	get selectionConfiguration(): UmbTreeSelectionConfiguration {
		return this._selectionConfiguration;
	}

	// TODO: what is the best name for this functionality?
	private _hideTreeRoot = false;
	@property({ type: Boolean, attribute: 'hide-tree-root' })
	set hideTreeRoot(newVal: boolean) {
		const oldVal = this._hideTreeRoot;
		console.log('UmbTreeDefaultElement.hideTreeRoot', [this.alias, oldVal, newVal]);
		debugger;
		this._hideTreeRoot = newVal;

		if (newVal === true) {
			this._observeRootItems();
		}

		this.requestUpdate('hideTreeRoot', oldVal);
	}
	get hideTreeRoot() {
		return this._hideTreeRoot;
	}

	// firstUpdated(_changedProperties: Map<string | number | symbol, unknown>) {
	// 	super.firstUpdated(_changedProperties);

	// 	if (this._hideTreeRoot) {
	// 		this.#observeRootItems();
	// 	}
	// }

	@property()
	set selectableFilter(newVal) {
		if (this._treeContext) {
			this._treeContext.selectableFilter = newVal;
		}
	}
	get selectableFilter() {
		return this._treeContext?.selectableFilter;
	}

	@property()
	set filter(newVal) {
		if (this._treeContext) {
			this._treeContext.filter = newVal;
		}
	}
	get filter() {
		return this._treeContext?.filter;
	}

	@property({ type: Object, attribute: false })
	props?: Record<string, unknown> = {};

	@state()
	private _items: UmbTreeItemModelBase[] = [];

	@state()
	private _treeRoot?: UmbTreeItemModelBase;

	//#treeContext = new UmbTreeContextBase<UmbTreeItemModelBase>(this);
	protected _treeContext?: UmbTreeDefaultContext<UmbTreeItemModelBase>;

	#rootItemsObserver?: UmbObserverController<Array<UmbTreeItemModelBase>>;

	protected _init: any;

	constructor() {
		super();
		console.log('UmbTreeDefaultElement.constructor');

		this._init = Promise.all([
			this.consumeContext('umbTreeContext', (context: UmbTreeDefaultContext<UmbTreeItemModelBase>) => {
				console.log('UmbTreeDefaultElement.consumeContext.umbTreeContext', context);
				debugger;
				this._treeContext = context;
				// this.#observeTreeRoot();
				// this.#observeRootItems();
			}).asPromise(),
		]);

		//this.#observeTreeRoot();
	}

	firstUpdated() {
		console.log('UmbTreeDefaultElement.firstUpdated', this._hideTreeRoot);
		if (this._hideTreeRoot === true) {
			this._observeRootItems();
		} else {
			this._observeTreeRoot();
		}
	}

	protected async _observeTreeRoot() {
		await this._init;

		this.observe(
			this._treeContext!.treeRoot,
			(treeRoot) => {
				this._treeRoot = treeRoot;
			},
			'umbTreeRootObserver',
		);
	}

	protected async _observeRootItems() {
		await this._init;

		if (!this._treeContext?.requestRootItems) throw new Error('Tree does not support root items');
		this.#rootItemsObserver?.destroy();

		const { asObservable } = await this._treeContext!.requestRootItems();

		if (asObservable) {
			this.#rootItemsObserver = this.observe(asObservable(), (rootItems) => {
				const oldValue = this._items;
				this._items = rootItems;
				this.requestUpdate('_items', oldValue);
			});
		}
	}

	getSelection() {
		return this._treeContext?.selection.getSelection();
	}

	render() {
		return html` ${this.#renderTreeRoot()} ${this.#renderRootItems()}`;
	}

	#renderTreeRoot() {
		console.log('UmbTreeDefaultElement.#renderTreeRoot', this.hideTreeRoot, this._treeRoot);
		if (this.hideTreeRoot || this._treeRoot === undefined) return nothing;
		return html`<h2>hiya</h2>
			<umb-tree-item-default .item=${this._treeRoot}></umb-tree-item-default>
			<h2>bye</h2>`;
	}

	#renderRootItems() {
		if (this._items?.length === 0) return nothing;
		return html`
			${repeat(
				this._items,
				// TODO: use unique here:
				(item, index) => item.name + '___' + index,
				(item) => html`<umb-tree-item-default .item=${item}></umb-tree-item-default>`,
			)}
		`;
	}
}

export default UmbTreeDefaultElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-tree-default': UmbTreeDefaultElement;
	}
}
