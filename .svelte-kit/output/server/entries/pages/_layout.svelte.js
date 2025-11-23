import { x as slot } from "../../chunks/index.js";
function _layout($$renderer, $$props) {
  $$renderer.push(`<div class="layout svelte-12qhfyh"><header class="svelte-12qhfyh"><nav class="svelte-12qhfyh"><a href="/" class="svelte-12qhfyh">Home</a> <a href="/test" class="svelte-12qhfyh">test</a> <a href="/test" class="svelte-12qhfyh">pest</a> <a href="/Blueberries" class="svelte-12qhfyh">Blueberries</a></nav></header> <main class="prose svelte-12qhfyh"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> <footer><p>© 2024 Your Site Name</p></footer></div>`);
}
export {
  _layout as default
};
