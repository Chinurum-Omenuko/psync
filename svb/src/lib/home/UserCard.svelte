<script lang="ts">
    import { getContext } from 'svelte';
    const authContext = getContext('auth');
    const { role, user } = authContext;

    const firstname = user.email.slice(0, 3);
    const mail = user.email
    const id = user.uid.slice(0,5)
    console.log(id)

</script>


<div class="max-w-sm rounded-lg border border-gray-200 shadow-lg bg-white item-3">
    <div class="flex p-4 space-x-4">
        <!-- Profile Picture -->
    

        <!-- User Info -->
        <div class="flex flex-col justify-center space-y-2">
            <h2 class="text-xl font-semibold text-[#0d3d2f]-100">{firstname}</h2>
            <p class="text-sm text-gray-500">{mail}</p>
            <p class="text-sm text-gray-500">+123 456 7890</p>
        </div>
    </div>

    <!-- Card Details -->
    <div class="px-4 py-2 border-t border-gray-200">
        <div class="text-xs text-gray-500">ID: {id}</div>
        <div class="text-xs text-gray-500">Last Login: 01/01/2024</div>
        <div class="text-xs text-gray-500">Term: 01/01/2025</div>
    </div>
</div>


<style>

    .item-3{
        grid-column-start: 2;
        grid-column-end: 3;

        grid-row-start: 1;
        grid-row-end: 3;
    }
</style>