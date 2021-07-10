<script>
  import Button from "@material-ui/core/Button";
  import ReactNode from "./utils/ReactNode.svelte";

  export let name;
</script>

<main>
  <h1>React inside Svelte {name} with React Material UI!</h1>

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

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
