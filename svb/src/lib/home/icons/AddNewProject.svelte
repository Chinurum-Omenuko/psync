<!-- NewRequestCircle.svelte -->
<script lang="ts">
    export let size = "w-14 h-14";  // customizable size
</script>
  
<!-- svelte-ignore a11y_consider_explicit_label -->
<button
    on:click
    class="{size} rounded-full border-2 border-dashed border-white-200 
    hover:border-blue-400 flex items-center justify-center
    transition-all group"
  >
    <svg
      class="w-6 h-6 text-white-400 group-hover:text-blue-400 group-hover:rotate-90 transition-all"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      stroke-width="2"
    >
      <path d="M12 5v14m-7-7h14" />
    </svg>
</button>