<script lang="ts">
    import { getContext } from "svelte";
  
    let { get: getPageNumber, set: setPageNumber } = getContext('page');
  
    function nextPage() {
      setPageNumber(getPageNumber() % 3 + 1);
    }
  
    function previousPage() {
      setPageNumber((getPageNumber() - 1 + 3) % 3 + 1);
    }
</script>
  
<div class="actions" style="display: flex; flex-direction: row; justify-content: space-around; align-items: center;">
    <div class="previous-btn">
        <button type="submit" class="bg-[#EAC117] text-white px-4 py-2 rounded" on:click={previousPage}>Back</button>
    </div>
    <div class="next-btn">
        <button type="submit" class="bg-[#EAC117] text-white px-4 py-2 rounded" on:click={nextPage}>Next</button>
    </div>
</div>