import type { UmbStylesheetDetailModel } from '../../index.js';
import { DataSourceResponse, UmbDataSource } from '@umbraco-cms/backoffice/repository';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import {
	CreateStylesheetRequestModel,
	ExtractRichTextStylesheetRulesRequestModel,
	ExtractRichTextStylesheetRulesResponseModel,
	InterpolateRichTextStylesheetRequestModel,
	InterpolateRichTextStylesheetResponseModel,
	RichTextStylesheetRulesResponseModel,
	StylesheetResource,
	UpdateStylesheetRequestModel,
} from '@umbraco-cms/backoffice/backend-api';
import { tryExecuteAndNotify } from '@umbraco-cms/backoffice/resources';

/**
 * A data source for the Stylesheet that fetches data from the server
 * @export
 * @class UmbStylesheetServerDataSource
 * @implements {UmbStylesheetServerDataSource}
 */
export class UmbStylesheetServerDataSource
	implements
		UmbDataSource<CreateStylesheetRequestModel, string, UpdateStylesheetRequestModel, UmbStylesheetDetailModel>
{
	#host: UmbControllerHost;

	/**
	 * Creates an instance of UmbStylesheetServerDataSource.
	 * @param {UmbControllerHost} host
	 * @memberof UmbStylesheetServerDataSource
	 */
	constructor(host: UmbControllerHost) {
		this.#host = host;
	}
	createScaffold(): any {
		throw new Error('Method not implemented.');
	}

	/**
	 * Fetches a Stylesheet with the given path from the server
	 * @param {string} path
	 * @return {*}
	 * @memberof UmbStylesheetServerDataSource
	 */
	async read(path: string) {
		if (!path) throw new Error('Path is missing');
		return tryExecuteAndNotify(this.#host, StylesheetResource.getStylesheet({ path }));
	}

	/**
	 * Fetches all stylesheets from the server
	 * @return {*}
	 * @memberof UmbStylesheetServerDataSource
	 */
	async getAll(skip: number = 0, take: number = 9999) {
		return tryExecuteAndNotify(this.#host, StylesheetResource.getStylesheetAll({ skip, take }));
	}

	/**
	 * Creates a new Stylesheet
	 *
	 * @param {CreateStylesheetRequestModel} data
	 * @return {*}  {Promise<DataSourceResponse<any>>}
	 * @memberof UmbStylesheetServerDataSource
	 */
	create(data: CreateStylesheetRequestModel) {
		return tryExecuteAndNotify(this.#host, StylesheetResource.postStylesheet({ requestBody: data }));
	}
	/**
	 * Updates an existing Stylesheet
	 *
	 * @param {UmbStylesheetDetailModel} data
	 * @return {*}  {Promise<DataSourceResponse<StylesheetDetails>>}
	 * @memberof UmbStylesheetServerDataSource
	 */
	update(path: string, data: UpdateStylesheetRequestModel) {
		return tryExecuteAndNotify(
			this.#host,
			StylesheetResource.putStylesheet({
				requestBody: data,
			}),
		);
	}
	/**
	 * Deletes a Stylesheet.
	 *
	 * @param {string} path
	 * @return {*}  {Promise<DataSourceResponse>}
	 * @memberof UmbStylesheetServerDataSource
	 */
	delete(path: string) {
		return tryExecuteAndNotify(this.#host, StylesheetResource.deleteStylesheet({ path }));
	}
	/**
	 * Get's the rich text rules for a stylesheet
	 *
	 * @param {string} path
	 * @return {*}  {(Promise<DataSourceResponse<RichTextStylesheetRulesResponseModel | ExtractRichTextStylesheetRulesResponseModel>>)}
	 * @memberof UmbStylesheetServerDataSource
	 */
	getStylesheetRichTextRules(
		path: string,
	): Promise<DataSourceResponse<RichTextStylesheetRulesResponseModel | ExtractRichTextStylesheetRulesResponseModel>> {
		return tryExecuteAndNotify(this.#host, StylesheetResource.getStylesheetRichTextRules({ path }));
	}
	/**
	 * Extracts the rich text rules from a stylesheet string. In simple words: takes a stylesheet string and returns a array of rules.
	 *
	 * @param {ExtractRichTextStylesheetRulesRequestModel} data
	 * @return {*}  {Promise<DataSourceResponse<ExtractRichTextStylesheetRulesResponseModel>>}
	 * @memberof UmbStylesheetServerDataSource
	 */
	postStylesheetRichTextExtractRules(
		data: ExtractRichTextStylesheetRulesRequestModel,
	): Promise<DataSourceResponse<ExtractRichTextStylesheetRulesResponseModel>> {
		return tryExecuteAndNotify(
			this.#host,
			StylesheetResource.postStylesheetRichTextExtractRules({ requestBody: data }),
		);
	}
	/**
	 * Interpolates the rich text rules from a stylesheet string. In simple words: takes a array of rules and existing content. Returns new content with the rules applied.
	 *
	 * @param {InterpolateRichTextStylesheetRequestModel} data
	 * @return {*}  {Promise<DataSourceResponse<InterpolateRichTextStylesheetResponseModel>>}
	 * @memberof UmbStylesheetServerDataSource
	 */
	postStylesheetRichTextInterpolateRules(
		data: InterpolateRichTextStylesheetRequestModel,
	): Promise<DataSourceResponse<InterpolateRichTextStylesheetResponseModel>> {
		return tryExecuteAndNotify(
			this.#host,
			StylesheetResource.postStylesheetRichTextInterpolateRules({ requestBody: data }),
		);
	}
}