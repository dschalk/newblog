import { x as slot } from "../../chunks/index.js";
function _layout($$renderer, $$props) {
  $$renderer.push(`<div class="layout svelte-12qhfyh"><header class="svelte-12qhfyh"><nav class="svelte-12qhfyh"><a href="/" class="svelte-12qhfyh">Home</a> <a href="/test" class="svelte-12qhfyh">test</a> <a href="/love" class="svelte-12qhfyh">love</a> <a href="/SUV" class="svelte-12qhfyh">SUV</a> <a href="/Research" class="svelte-12qhfyh">Research</a> <a href="/Research_2" class="svelte-12qhfyh">Research_2</a> <a href="/Thoughtful" class="svelte-12qhfyh">Thoughtful</a> <a href="/Blueberries" class="svelte-12qhfyh">Blueberries</a></nav></header> <main class="prose svelte-12qhfyh"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> <footer><p>© 2024 Your Site Name</p></footer></div>`);
}
export {
  _layout as default
};
