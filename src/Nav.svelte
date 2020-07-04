<script>
  import { link } from "svelte-spa-router";

  import { admin } from "./store";
</script>

<ul class="nav">

  <li>
    <a use:link href="/">Home</a>
  </li>

  {#if $admin}
    <li>
      <a use:link href="/settings">Settings</a>
    </li>
  {/if}
  <!-- svelte-ignore a11y-missing-attribute -->
  <li>
    <a use:link={'/concept/1'}>Concept 1</a>
  </li>
  <!-- svelte-ignore a11y-missing-attribute -->
  <li>
    <a use:link={'/concept/2'}>Concept 2</a>
  </li>
</ul>
