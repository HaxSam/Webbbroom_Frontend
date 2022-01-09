<script lang="ts">
  const date = new Date();

  export let temp: string = "24.3";
  export let humidity: string = "22";
  export let pressure: string = "1100";
  export let time: string = `${date.toISOString().slice(0, 10)} ${date.toTimeString().slice(0, 8)}`;
</script>

<style lang="postcss">
  div {
    @apply flex flex-row mx-3 mb-4 bg-slate-200 py-3 rounded-xl shadow-black/25;
    box-shadow: 2px 2px 4px -1px var(--tw-shadow-color);
  }

  :global(.dark) div {
    @apply bg-slate-700 shadow-white/5;
  }

  p {
    @apply w-1/4 text-center mx-auto text-2xl font-thin;
  }
</style>

<div>
  <p>{temp}°C</p>
  <p>{humidity}%</p>
  <p>{pressure} hPa</p>
  <p>{time}</p>
</div>
