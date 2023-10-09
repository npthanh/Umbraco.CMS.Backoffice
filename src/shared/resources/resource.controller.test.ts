import { expect, fixture, html } from '@open-wc/testing';
import UmbTestResourceControllerElement from './stories/test-resource-controller.element.js';
import { UmbResourceController } from './resource.controller.js';
import { ApiError, CancelablePromise } from '@umbraco-cms/backoffice/backend-api';

describe('UmbResourceController', () => {
	let hostElement: UmbTestResourceControllerElement;

	beforeEach(async () => {
		hostElement = await fixture(html` <umb-test-resource-controller></umb-test-resource-controller> `);
	});

	it('should be defined', () => {
		expect(hostElement).to.be.instanceOf(UmbTestResourceControllerElement);
	});

	it('should resolve a promise', async () => {
		const promise = new CancelablePromise((resolve) => {
			setTimeout(() => {
				resolve('Hello world');
			}, 1000);
		});
		const resourceController = new UmbResourceController(hostElement, promise);
		const { data } = await resourceController.tryExecuteAndNotify();
		expect(data).to.equal('Hello world');
	});

	it('should cancel a promise when the controller is disconnected', async () => {
		const promise = new CancelablePromise((resolve) => {
			setTimeout(() => {
				resolve('Hello world');
			}, 10);
		});
		new UmbResourceController(hostElement, promise);
		hostElement.disconnectedCallback();
		expect(promise.isCancelled).to.be.true;
	});

	it('should return the body of an ApiError', async () => {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				reject('Hello world');
			}, 10);
		});
		const resourceController = new UmbResourceController(hostElement, promise);
		const { error } = await resourceController.tryExecuteAndNotify();
		expect(error?.message).to.equal('Hello world');
	});
});
