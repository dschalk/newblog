

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Evolution/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.e7-t3v11.js","_app/immutable/chunks/CcU3PJm1.js","_app/immutable/chunks/CMBpGD-e.js","_app/immutable/chunks/C1z_K0OT.js"];
export const stylesheets = [];
export const fonts = [];
