import { folderHandlers } from './folder.handlers.js';
import { treeHandlers } from './tree.handlers.js';
import { detailHandlers } from './detail.handlers.js';
import { itemHandlers } from './item.handlers.js';
import { overviewHandlers } from './overview.handlers.js';

export const handlers = [...treeHandlers, ...itemHandlers, ...folderHandlers, ...overviewHandlers, ...detailHandlers];