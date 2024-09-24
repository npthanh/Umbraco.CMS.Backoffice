import { manifests as tinyMcePluginManifests } from './tiny-mce-plugin/manifests.js';
import { manifests as tiptapExtensionManifests } from './tiptap-extension/manifests.js';
import { manifests as workspaceManifests } from './workspace/manifests.js';

export const manifests: Array<UmbExtensionManifest> = [
	...tinyMcePluginManifests,
	...tiptapExtensionManifests,
	...workspaceManifests,
];
