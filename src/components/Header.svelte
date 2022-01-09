<script lang="ts">
  import InlineSVG from "svelte-inline-svg";
  import sun from "@assets/sun.svg";
  import moon from "@assets/moon.svg";

  export let value: string = "";

  function toggleLightAndDarkMode() {
    document.querySelector("html").classList.toggle("dark");
  }
</script>

<style lang="postcss">
  select {
    @apply border-0 border-b-2 border-slate-300 text-3xl w-8/12 mx-auto;
  }

  select:focus {
    @apply ring-0 ring-transparent;
  }

  :global(.dark) select {
    @apply border-slate-600;
  }
  select,
  button {
    @apply bg-white text-slate-900;
  }

  :global(.dark) select,
  :global(.dark) button {
    @apply bg-black text-slate-100;
  }
</style>

<header class="flex justify-center mt-4">
  <!-- Selection which room in german-->
  <select bind:value>
    <option value="1">Wohnzimmer</option>
    <option value="2">Küche</option>
    <option value="3">Schlafzimmer</option>
  </select>
  <button class="absolute w-13 right-8" on:click={toggleLightAndDarkMode}>
    <InlineSVG src={moon} class="dark:hidden stroke-0" />
    <InlineSVG src={sun} class="hidden dark:block stroke-0" />
  </button>
</header>
