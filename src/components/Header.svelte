<script lang="ts">
  import InlineSVG from "svelte-inline-svg";
  import sun from "@assets/sun.svg";
  import moon from "@assets/moon.svg";

  function toggleLightAndDarkMode() {
    document.querySelector("html").classList.toggle("dark");
  }
</script>

<header class="flex justify-center mt-4">
  <!-- Selection which room in german-->
  <select class="border-0 border-b-2 border-slate-300 focus:ring-0 text-3xl w-8/12 mx-auto">
    <option value="1">Wohnzimmer</option>
    <option value="2">Küche</option>
    <option value="3">Schlafzimmer</option>
  </select>
  <button class="absolute w-10 right-8 bg-white" on:click={toggleLightAndDarkMode}>
    <InlineSVG src={moon} class="dark:hidden" />
    <InlineSVG src={sun} class="hidden dark:block" />
  </button>
</header>
