<script lang="ts">
    import { setContext } from 'svelte';
    import type { User } from 'firebase/auth';
    import '../app.css';
    import { authStore } from '../store/store.svelte';
    import Footer from '$lib/shared/Footer.svelte';
    import SignInModal from '$lib/Modals/SignInModal.svelte';
    import SignUpModal from '$lib/Modals/SignUpModal.svelte';
    import { modalStore as ModalContext } from '$lib/context/ModalContext';

    // Automatically subscribe to authStore
    // Initial default values for context
    setContext('auth', { user: null, role: null });

    $: {
        const authContext = $authStore;
        setContext('auth', authContext); // Update context reactively
    }

    
</script>

<main>
    {#if $authStore.user}
        <p>Welcome {$authStore.user.displayName}, you are logged in as a {$authStore.role}.</p>
    {:else}
        <p>Please log in.</p>
    {/if}
</main>

{#if $ModalContext.signIn}
    <SignInModal />
{/if}

{#if $ModalContext.signUp}
    <SignUpModal />
{/if}
<slot />
<Footer />
