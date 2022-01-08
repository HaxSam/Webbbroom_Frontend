import App from "./App.svelte";
import "virtual:windi.css";
import "./index.css";

const app = new App({
  target: document.getElementById('app')
})

export default app
