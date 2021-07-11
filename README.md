# svelte-react

![svelte-react](docs/svelte.png)

Use React components inside Svelte apps.

This repo is the mirror of [RichHarris/react-svelte](https://github.com/Rich-Harris/react-svelte/blob/master/README.md) with some bonus given we also add MaterialUI to the mix here.

```svelte
<script>
  import Button from "@material-ui/core/Button";
  import ReactAdapter from "./utils/ReactAdapter.svelte";
</script>

<ReactAdapter
  el={Button}
  class="mui-btn"
  children="Hello"
  variant="contained"
  color="primary"
  onClick={() => alert("hello world!")}
/>

<style>
  /**
   * Styling a React Component from within a Svelte Component.
   */
  :global(.mui-btn) {
    margin: 20px;
  }
</style>
```

Check the live demo [here](https://svelte-react.surge.sh).

## Limitations

This is a fairly basic integration, some things don't currently work:

- No JSX support yet, so all React Node Trees need to be manually created via React.createElement
- This integration is basic by design, you shouldn't be doing React inside Svelte unless you have a Base Library of React Components and you really need to reuse
- Mixing React & Svelte is an interim solution, since both are different beast and any adapter that you can come up with, will need constant work to keep up both with Svelte and React distros

## License

[LIL](LICENSE)
