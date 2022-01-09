<script lang="ts">
  import MenuItmes from "./MenuItmes.svelte";
</script>

<style lang="postcss">
  .menu {
    @apply mt-18 h-[29.5em] px-12 rounded-t-3xl bg-gray-100 shadow-black/25;
    box-shadow: 5px 5px 9px -1px var(--tw-shadow-color);
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  :global(.dark) .menu {
    @apply bg-gray-800 shadow-white/10;
  }

  h2 {
    @apply text-3xl font-bold w-1/4 my-4 mx-auto text-center;
  }
</style>

<div class="flex flex-col menu">
  <div class="sticky top-0 flex w-full bg-gray-100 dark:bg-gray-800">
    <h2>Temperature</h2>
    <h2>Humidity</h2>
    <h2>Pressure</h2>
    <h2>Time</h2>
  </div>

  {#each new Array(11) as i}
    <MenuItmes />
  {/each}

  <br />
</div>
