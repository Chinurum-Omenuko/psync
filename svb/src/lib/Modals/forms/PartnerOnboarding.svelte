<script lang="ts">
    import { setContext } from "svelte";
    import ModalNavigation from "../Buttons/ModalNavigation.svelte";
    import { writable, type Writable } from "svelte/store";
    import SignUp from "./SignUp.svelte";
    type ModalPage = 1 | 2 | 3;
    type PageActions = {
        get: () => ModalPage,
        set: (newPage: ModalPage) => void
    }

    let currentPage: ModalPage = 1

    let fname: string = '';
    let lname: string = '';
    let orgname: string = '';

    setContext<PageActions>('page', {
        get: () => currentPage,
        set: (newPage: ModalPage) => { currentPage = newPage },
    })

</script>

{#snippet localSignUp()}
    <SignUp firstName={fname} lastName={lname} organizationName={orgname} />
{/snippet}


{#if currentPage === 1}
    <div class="modal-content bg-white p-8 rounded-lg">
        <form class="flex flex-col gap-4">
            <input bind:value={fname} type="fname" placeholder="First Name" class="border p-2 rounded">
            <input bind:value={lname} type="lname" placeholder="Last Name" class="border p-2 rounded">
            <input bind:value={orgname} type="orgname" placeholder="Organization Name" class="border p-2 rounded">
        </form>
        <ModalNavigation />
    </div>
{:else if currentPage === 2}
    {@render localSignUp()}
{:else}
    <h1>Signed up</h1>
{/if}

<style>

</style>