

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/register/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.BspuW4tZ.js","_app/immutable/chunks/disclose-version.BtPery2Q.js","_app/immutable/chunks/runtime.Cc3v3xwM.js","_app/immutable/chunks/legacy.CQV2rTMI.js"];
export const stylesheets = [];
export const fonts = [];
