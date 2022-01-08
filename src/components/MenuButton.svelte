<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import colors from "windicss/colors";

  export let name: string = "Template";
  export let light: typeof colors.white = colors.white;
  export let dark: typeof colors.black = colors.black;

  const dispatch = createEventDispatcher();

  const click = () => dispatch("click", name);
</script>

<style lang="postcss">
  button {
    background-color: var(--light);
    @apply w-24 h-24 mx-auto p-0.5 rounded-2xl shadow-slate-300;
    box-shadow: 4px 4px 7px -1px var(--tw-shadow-color);
  }

  :global(.dark) button {
    background-color: var(--dark);
    @apply shadow-dark-700;
  }
</style>

<button style="--light: {light}; --dark: {dark};)" on:click={click}>
  <slot>SVG is missing</slot>
</button>
