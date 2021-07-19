<script>
  import React from "react";
  import ReactDOM from "react-dom";
  import JsxParser from "react-jsx-parser";
  import { onDestroy, onMount, afterUpdate } from "svelte";

  const e = React.createElement;
  let container;
  let slotContent;
  export let ReactComponentsLibrary = null;

  if (!ReactComponentsLibrary) {
    ReactComponentsLibrary = getContext('ReactComponentsLibrary');
  }

  /**
   * Svelte compiles on the server/statically, React renders on the client.
   * Therefore, React stuff need to happen within Svelte (window/dom) zones.
   */
  onMount(() => {
    const { class: _, ...props } = $$props;
    try {
      ReactDOM.render(e("div", props), container);
    } catch (err) {
      console.warn(`react-slot failed to mount.`, { err });
    }
  });

  afterUpdate(() => {
    if (!slotContent) return;

    try {
      const { class: _, ...props } = $$props;
      console.log({ props });

      const childrenComponent = e(JsxParser, {
        components: ReactComponentsLibrary,
        bindings: props,
        jsx: slotContent.trim(),
      });

      ReactDOM.unmountComponentAtNode(container);

      ReactDOM.render(e("div", props, childrenComponent), container);
    } catch (err) {
      console.warn(`react-slot failed to remount.`, { err });
    }
  });

  onDestroy(() => {
    try {
      ReactDOM.unmountComponentAtNode(container);
    } catch (err) {
      console.warn(`react-slot failed to unmount.`, { err });
    }
  });
</script>

<div bind:this={container} class={$$props.class || ""} />

<span contenteditable="true" bind:textContent={slotContent} style={{ display: 'none' }}>
  <slot />
</span>
