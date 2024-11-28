<script>
	import { goto } from '$app/navigation';
  import { authHandlers } from '../../store/store.svelte';

</script>

<header class="flex items-center justify-between bg-white px-4">
	<div class="flex items-center">
		<!-- Responsive logo size classes -->
		<img
			src="/images/green-logo.svg"
			alt="PartnerSync Logo"
			class="h-10 w-auto sm:h-12 md:h-16 lg:h-56"
		/>
	</div>
	<div class="flex items-center space-x-4">

		<button onclick={authHandlers.logout}>Log out</button>
		<!-- Hamburger Menu for Mobile -->
		<button class="rounded bg-[#EAC117] px-3 py-1 text-white md:hidden">☰</button>
	</div>
</header>

<style>
	header {
		height: 15vh;
	}
</style>
