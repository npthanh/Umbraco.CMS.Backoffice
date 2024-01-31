import { manifests as folderManifests } from './folder/manifests.js';
import { manifests as defaultManifests } from './tree-default.kind.js';

export const manifests = [...folderManifests, ...defaultManifests];
