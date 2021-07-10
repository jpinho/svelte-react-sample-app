<script>
  import React from "react";
  import ReactDOM from "react-dom";
  import { onDestroy, onMount } from "svelte";

  export let element;
  export let children;
  let id = `react-wrapper-${Date.parse(new Date())}`;

  /**
   * Svelte compiles on the server, React renders on the client.
   * Therefore, React stuff need to happend within Svelte (window/dom) zones.
   * Which is, zones where the executed code actually executes on the client.
   */
  onMount(() => {
    const node = document.getElementById(id);
    const { element: e, children: c, ...props } = $$props;
    try {
      ReactDOM.render(React.createElement(element, props, children), node);
      console.log(`svelte-react-wrapper mounted on node ${id}.`);
    } catch (err) {
      console.warn(
        `svelte-react-wrapper failed to mount, container id ${id}.`,
        { err }
      );
    }
  });

  onDestroy(() => {
    const node = document.getElementById(id);
    try {
      ReactDOM.unmountComponentAtNode(node);
      console.log(`svelte-react-wrapper unmounted on node ${id}.`);
    } catch (err) {
      console.warn(
        `svelte-react-wrapper failed to unmount, container id ${id}.`,
        { err }
      );
    }
  });
</script>

<div {id} />
