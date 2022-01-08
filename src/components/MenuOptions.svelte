<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import InlineSVG from "svelte-inline-svg";
  import colors from "windicss/colors";
  import MenuButton from "@components/MenuButton.svelte";

  import table from "@assets/table.svg";
  import temp from "@assets/temp.svg";
  import humidity from "@assets/humidity.svg";
  import pressure from "@assets/pressure.svg";
  import co2 from "@assets/co2.svg";
  import chart from "@assets/chart.svg";

  const dispatch = createEventDispatcher();

  function handleClick(e: CustomEvent) {
    dispatch("click", e.detail);
  }
</script>

<div class="grid grid-flow-col mt-14 mx-4">
  <MenuButton name="table" light={colors.emerald[200]} dark={colors.emerald[700]} on:click={handleClick}>
    <InlineSVG src={table} class="fill-transparent p-2" />
  </MenuButton>

  <MenuButton name="temp" light={colors.cyan[200]} dark={colors.cyan[700]} on:click={handleClick}>
    <InlineSVG src={temp} class="dark:fill-slate-100 p-4" />
  </MenuButton>

  <MenuButton name="humidity" light={colors.blue[200]} dark={colors.blue[700]} on:click={handleClick}>
    <InlineSVG src={humidity} class="dark:fill-slate-100 p-4" />
  </MenuButton>

  <MenuButton name="pressure" light={colors.violet[200]} dark={colors.violet[700]} on:click={handleClick}>
    <InlineSVG src={pressure} class="dark:fill-slate-100 p-4" />
  </MenuButton>

  <MenuButton name="co2" light={colors.fuchsia[200]} dark={colors.fuchsia[700]} on:click={handleClick}>
    <InlineSVG src={co2} class="dark:fill-slate-100 p-3" />
  </MenuButton>

  <MenuButton name="chart" light={colors.rose[200]} dark={colors.rose[700]} on:click={handleClick}>
    <InlineSVG src={chart} class="dark:fill-slate-100 p-4" />
  </MenuButton>
</div>
