<script lang="ts">
    export let firstName: string = '';
    export let lastName: string = '';
    export let organizationName: string = '';
    let email: string = ''
    let password: string = ''

</script>


<div class="modal-content bg-white p-8 rounded-lg flex flex-col">
    <input type="email" placeholder="Email" class="border p-2 rounded" bind:value={email}>
    <input type="password" placeholder="Password" class="border p-2 rounded" bind:value={password}>
    <button type="submit" class="bg-[#EAC117] text-white px-4 py-2 rounded">Sign Up</button>

    <div class="group flex flex-col">
        <button type="submit" class="bg-[#EAC117] text-white px-4 py-2 rounded">Sign Up with google</button>
        <button type="submit" class="bg-[#EAC117] text-white px-4 py-2 rounded">Sign Up with microsoft</button>
    </div>
</div>

<style>

</style>