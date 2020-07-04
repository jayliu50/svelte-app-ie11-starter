import Settings from "./components/Settings.svelte";
import Concept from "./components/Concept.svelte";
import NotFound from "./components/NotFound.svelte";
import Home from "./components/Home.svelte";

const routes = {
  // Exact path
  "/": Home,

  "/concept/:conceptId/:promptId?": Concept,

  "/settings": Settings,

  // Catch-all
  "*": NotFound,
};

export default routes;
