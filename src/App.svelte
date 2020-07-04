<script>
  import Nav from "./Nav.svelte";

  import Router from "svelte-spa-router";

  import routes from "./routes";

  import { admin } from "./store";

  function routeLoaded(event) {
    console.info("Caught event routeLoaded", event.detail);
  }

  function setAdmin(adminStatus) {
    $admin = adminStatus;
  }
</script>

<style lang="scss">
  @import "./theme.scss";
  body {
    font-family: $fontBody;
  }
  button {
    font-family: inherit;
  }
</style>

<body>

  <Nav />

  <Router {routes} on:routeLoaded={routeLoaded} />

  {#if $admin}
    <p>Also, you're an admin.</p>
    <button on:click={() => setAdmin(false)}>Exit Admin Mode</button>
  {:else}
    <button on:click={() => setAdmin(true)}>Become an Admin</button>
  {/if}

</body>
