<script>
    import { getContext } from 'svelte';
    import AddNewProject from "./icons/AddNewProject.svelte";

    // Get the auth context
    const authContext = getContext('auth');
    const { role } = authContext;
</script>


<div class="rounded-lg p-2 border-gray-200 item-1">
    <div class="mb-4 mx-2">
        <h3 class="text-left text-lg font-bold text-white">Quick Actions</h3>
    </div>
    <div class="flex flex-row w-full justify-start">

        
        <div class="mx-2  w-28 h-28 flex items-center justify-center rounded-lg bg-[#99ef5e]">
            <AddNewProject {role} />
        </div>
        <div class="mx-2  w-28 h-28 flex items-center justify-center rounded-lg bg-[#99ef5e]">
            <AddNewProject {role} />
        </div>
        




    </div>
</div>



<style>

</style>