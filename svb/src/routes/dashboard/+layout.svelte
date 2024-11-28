<script lang="ts">
	import Header from '$lib/home/Header.svelte';
	import Navbar from '$lib/shared/Navbar.svelte';
	import { getContext } from 'svelte';
	import type { User } from 'firebase/auth';
	import type { AuthState } from '../../store/store.svelte'

	export let data;


    let authContext;
    try {
        authContext = getContext<{ user: User | null; role: string | null }>('auth');
    } catch (e) {
        console.warn('Auth context is undefined. Falling back to defaults.');
        authContext = { user: null, role: null }; // Fallback values
    }

    const { user, role } = authContext;
	console.log("user in layout: ", user)
	console.log("role in layout: ", role)

	console.log('on dashboard layout', data);
</script>

<Header />
<div class="flex h-svh max-h-[700px] w-full">
	<Navbar user={user} role={role}/>
	<div class="h-full flex-1 bg-[#00703C] box">
		<slot />
	</div>
</div>


<style>
	.box{
		border-top-left-radius: 3cap;
	}
</style>