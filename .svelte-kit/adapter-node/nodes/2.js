

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3o6d80bK.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BQ4_h64I.js","_app/immutable/chunks/Cazz7ul6.js"];
export const stylesheets = [];
export const fonts = [];
