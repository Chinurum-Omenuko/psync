<script>
    import { getContext } from 'svelte';
    import AddNewProject from "./icons/AddNewProject.svelte";

    // Get the auth context
    const authContext = getContext('auth');
    const { role } = authContext;
</script>
<div class="col-span-1 rounded-lg bg-[#99ef5e] p-6 h-70 border-gray-200 shadow-lg ">
    <div class="mb-4">
        <h3 class="text-center text-lg font-bold text-black">Quick Actions</h3>
    </div>
    <div class="space-y-5">
        <AddNewProject {role} />
        
       

    </div>
</div>


<style>

</style>