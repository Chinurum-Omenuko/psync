import * as server from '../entries/pages/dashboard/projects/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/projects/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.B0EOrUtX.js","_app/immutable/chunks/disclose-version.BtPery2Q.js","_app/immutable/chunks/runtime.Cc3v3xwM.js","_app/immutable/chunks/legacy.CQV2rTMI.js","_app/immutable/chunks/render.C5AyQ_sf.js","_app/immutable/chunks/events.Gw7YoPuC.js","_app/immutable/chunks/each.k6rr4mAs.js","_app/immutable/chunks/attributes.tVRC4-3-.js","_app/immutable/chunks/class.BYtEhGVo.js","_app/immutable/chunks/lifecycle.gkQW30Xv.js","_app/immutable/chunks/index-client.Baoge49B.js","_app/immutable/chunks/if.DVMv-wvu.js","_app/immutable/chunks/props.BlGnt68S.js","_app/immutable/chunks/proxy.DFrJ9LLF.js","_app/immutable/chunks/store.Ddh2Ovy9.js","_app/immutable/chunks/store.svelte.Cl1KDZU4.js","_app/immutable/chunks/entry.DpS0zjq9.js"];
export const stylesheets = ["_app/immutable/assets/7.ftIRbr67.css"];
export const fonts = [];
