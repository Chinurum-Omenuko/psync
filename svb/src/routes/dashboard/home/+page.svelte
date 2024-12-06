
<script>
  import QuickActions from "$lib/home/QuickActions.svelte";
import RequestCard from "$lib/home/RequestCard.svelte";
  import UserCard from "$lib/home/UserCard.svelte";
  import { getContext } from 'svelte';

  const authContext = getContext('auth');
  const { role, user } = authContext;

  const firstname = user.email.slice(0, 3);
  console.log(user)

  const isAdmin = role === 'admin';
</script>

<section class="mx-auto h-full max-w-7xl overflow-scroll bg-[#00703C] px-4 py-6 sm:px-6 lg:px-8" id="greenbox">
	<!-- <div class=" "> -->
	<!-- Main Content Section -->
	<div class="rounded-lg bg-[#00703C] p-6">
		<h1 class="mb-4 text-2xl font-bold text-white md:text-3xl">Welcome Home {firstname}</h1>
		<!-- What's New & Profile Grid -->
		<div class="gap-4 home-items h-80">
			{#if role !== 'admin'}
				<QuickActions />
			{/if}
			<!-- Profile Card -->
			<UserCard />
		</div>
		{#if !isAdmin}
		<!-- Requests Section -->
		<div class="mt-8 flex flex-col">
			<h2 class="mb-4 text-2xl font-bold text-white">My Interests</h2>

			<!-- For Medium and Larger Devices: Carousel -->
			<div class="items-left flex">
			<!-- Carousel Wrapper -->
			<div id="carousel" class="flex flex-wrap gap-4">
				<!-- Request Card 1 -->
				<RequestCard />
			</div>
			</div>
		</div>
		{/if}
		{#if isAdmin}

		<!-- Requests Section -->
		<div class="mt-8 flex flex-col">
			<h2 class="mb-4 text-2xl font-bold text-white">Pending Requests</h2>

			<!-- For Medium and Larger Devices: Carousel -->
			<div class="carousel-container relative w-full overflow-hidden flex justify-between">
				<!-- Carousel Controls -->
				<button class="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
					<svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
						<path d="M15 19l-7-7 7-7"/>
					</svg>
				</button>

				<!-- Carousel Wrapper -->
				<div id="carousel" class="carousel flex transition-transform duration-300 ease-in-out">
					<!-- Request Card 1 -->
					<RequestCard />
				</div>

				<button class="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
					<svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
						<path d="M9 5l7 7-7 7"/>
					</svg>
				</button>
			</div>
		</div>

		{/if}

	</div>
	<!-- </div> -->
	<!-- <SignOutButton /> -->
</section>


<style>
	section{
		border-top-left-radius: 5cap;
	}


	.home-items{
		display: grid;
		grid-template-columns: 60%, 40%;
		grid-template-rows: 10%, 10% 80%;
	}

	.item-2{
		grid-column: span 1;
		grid-row-start: 2;
		grid-row-end: 3;

		height: 10rem;
		width: 100%;
	}

    @media screen and (max-width: 767px) { /* Adjusted to target mobile devices */

		.home-items{
			display: grid;
			grid-template-columns: 1fr;
			max-width: 100vw;
		}
    }


</style>