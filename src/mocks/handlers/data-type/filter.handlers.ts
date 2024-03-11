const { rest } = window.MockServiceWorker;
import { umbDataTypeMockDb } from '../../data/data-type/data-type.db.js';
import { UMB_SLUG } from './slug.js';
import { umbracoPath } from '@umbraco-cms/backoffice/utils';

export const filterHandlers = [
	rest.get(umbracoPath(`/filter${UMB_SLUG}`), (req, res, ctx) => {
		const skip = Number(req.url.searchParams.get('skip'));
		const take = Number(req.url.searchParams.get('take'));
		const name = req.url.searchParams.get('name');
		const editorUiAlias = req.url.searchParams.get('editorUiAlias');
		const editorAlias = req.url.searchParams.get('editorAlias');

		const options = {
			skip: skip || undefined,
			take: take || undefined,
			name: name || undefined,
			editorUiAlias: editorUiAlias || undefined,
			editorAlias: editorAlias || undefined,
		};

		const response = umbDataTypeMockDb.filter(options);
		return res(ctx.status(200), ctx.json(response));
	}),
];
