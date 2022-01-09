<script lang="ts">
  import Header from "@components/Header.svelte";
  import Statusbar from "@components/Statusbar.svelte";
  import MenuOptions from "./components/MenuOptions.svelte";
  import Menu from "./components/Menu.svelte";

  let value: string = "1";
</script>

<style lang="postcss">
  main {
    @apply flex flex-col justify-center px-8;
  }
</style>

<main>
  <Header bind:value />
  <Statusbar />
  <MenuOptions on:click={({ detail }) => console.log(detail)} />
  <Menu />
</main>
