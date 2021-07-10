<script>
  import Button from "@material-ui/core/Button";
  import ReactNode from "./utils/ReactNode.svelte";
</script>

<main>
  <h1>React inside Svelte</h1>
  <h2>with React Material UI!</h2>

  <ReactNode
    element={Button}
    children="Hello"
    variant="contained"
    color="primary"
    onClick={() => alert("hello world!")}
  />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1, h2 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
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
