import { Meta, Story } from '@storybook/web-components';
import { html } from '@umbraco-cms/backoffice/external/lit';

import type { UmbBackofficeElement } from './backoffice.element.js';
import './backoffice.element';

export default {
	title: 'Apps/Backoffice',
	component: 'umb-backoffice',
	id: 'umb-backoffice',
} as Meta;

export const AAAOverview: Story<UmbBackofficeElement> = () => html`<umb-backoffice></umb-backoffice>`;
AAAOverview.storyName = 'Overview';
