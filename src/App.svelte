<script>
  import ReactAdapter from "./utils/ReactAdapter.svelte";

  // react mui components
  import Button from "@material-ui/core/Button";
</script>

<main>
  <h1>React inside Svelte</h1>
  <h2>with React Material UI!</h2>

  <ReactAdapter
    el={Button}
    class="mui-btn"
    children="Hello"
    variant="contained"
    color="primary"
    onClick={() => alert("hello world!")}
  />
</main>

<style>
  /**
   * Styling a React Component using Svelte styles.
   */
  :global(.mui-btn) {
    margin: 20px;
  }

  /* ----------------------------------------------- */

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    margin-top: 20px;
  }
  h1,
  h2 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    margin: 0;
    line-height: 3.5rem;
  }
  h2 {
    font-size: 2em;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
