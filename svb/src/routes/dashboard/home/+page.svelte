<script>
  import QuickActions from "$lib/home/QuickActions.svelte";
import RequestCard from "$lib/home/RequestCard.svelte";
  import UserCard from "$lib/home/UserCard.svelte";
  import { getContext } from 'svelte';

  const authContext = getContext('auth');
  const { role, user } = authContext;

  const firstname = user.email.slice(0, 3);
  console.log(firstname)

  const isAdmin = role === 'admin';
</script>

<section class="mx-auto h-full max-w-7xl overflow-scroll bg-[#00703C] px-4 py-6 sm:px-6 lg:px-8" id="greenbox">
	<!-- <div class=" "> -->
	<!-- Main Content Section -->
	<div class="flex flex-col rounded-lg bg-[#00703C] p-6 lg:col-span-4">
		<h1 class="mb-4 text-2xl font-bold text-white md:text-3xl">Welcome Home {firstname}</h1>

		<!-- What's New & Profile Grid -->
		<div class="flex flex-row gap-4">
			<QuickActions />
			<!-- What's New Section -->
			<div class="col-span-1 rounded-lg bg-white p-6 md:col-span-2 lg:col-span-2 md:w-3/4">
				<h2 class="mb-4 text-xl font-semibold">What's New</h2>
				<ul>
					<p class="text-gray-500">No new activities</p>
					
				</ul>
				
			</div>

			<!-- Profile Card -->
			<UserCard />
		</div>
		{#if !isAdmin}
		<!-- Requests Section -->
		<div class="mt-8 flex flex-col">
			<h2 class="mb-4 text-2xl font-bold text-white">My Requests</h2>

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

	</div>
	<!-- </div> -->
	<!-- <SignOutButton /> -->
</section>


<style>
	section{
		border-top-left-radius: 5cap;
	}
</style>