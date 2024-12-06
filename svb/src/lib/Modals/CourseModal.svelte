<script lang="ts">
	import { authStore } from "../../store/store.svelte";
  
	let course: {
	  code: string;
	  program: string;
	  summary: string;
	  skills: string;
	  term: string;
	  level: string;
	  duration: string;
	  staff: string;
	} | null = null;

	let isOpen: boolean = false;
	let closeModal: () => void;
	let isAdmin: boolean = false;
  
	const { sendInterest } = $props();
	const auth = $authStore
  
	console.log(`my current role is ${auth.user?.role}`);
  
	function formatDate(timestamp: string) {
	  return new Date(timestamp).toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		timeZoneName: 'short'
	  });
	}
  
	async function expressInterest() {
	  if (!isOpen || !course) {
		alert("Please open the modal and select a course first.");
		return;
	  }
  
	  const interestData = {
		courseId: course.code,
		courseCode: course.code,
		program: course.program,
		summary: course.summary,
		skills: course.skills,
		term: course.term,
		level: course.level,
		duration: course.duration,
		staff: course.staff,
		expressedBy: auth.user?.uid ?? '',
		expressedAt: new Date().toISOString(),
		uid: auth.user?.uid,
		status: 'course interest'
	  };
  
	  try {
		const response = await fetch('/api/interests/course', {
		  method: 'POST',
		  headers: { 'Content-Type': 'application/json' },
		  body: JSON.stringify(interestData),
		});
  
		const result = await response.json();
  
		if (response.ok) {
		  console.log('Interest expressed successfully:', result);
		  alert('Your interest has been recorded successfully!');
		  closeModal();
		} else {
		  console.error('Error expressing interest:', result.error);
		  alert(result.error);
		}
	  } catch (error) {
		console.error('Unexpected error:', error);
		alert('An unexpected error occurred while expressing interest.');
	  }
	}
</script>
  
  {#if isOpen && course}
	<!-- Modal content -->
	<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
	  <!-- Background overlay -->
	  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  
	  <!-- Modal container -->
	  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
		<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
		  <div class="mx-auto h-3/4 w-full max-w-7xl overflow-y-auto rounded bg-white p-6 shadow-lg">
			<div class="flex items-center justify-between">
			  <h2 class="mb-4 text-2xl font-bold" id="modalTitle">
				{course.code} - {course.program}
			  </h2>
			  <button onclick={closeModal} class="cursor-pointer text-4xl text-gray-600">&times;</button>
			</div>
  
			<div class="text-left">
			  <strong>Course Summary:</strong><br />
			  {course.summary}<br />
			  <strong>Skill Set:</strong><br />
			  {course.skills}<br />
			  <strong>Program:</strong><br />
			  {course.program}<br />
			  <strong>Term:</strong><br />
			  {course.term}<br />
			  <strong>Level:</strong><br />
			  {course.level}<br />
			  <strong>Duration:</strong><br />
			  {course.duration}<br />
			  <strong>Staff:</strong><br />
			  {course.staff}<br />
			</div>
  
			{#if isAdmin}
			  <button onclick={sendInterest} class="rounded bg-[#EAC117] px-3 py-1 text-white">Confirm Request</button>
			{:else}
			  {#if isAdmin || auth.user?.role !== 'staff'}
				<button onclick={sendInterest} class="rounded bg-[#EAC117] px-3 py-1 text-white">I'm interested</button>
			  {/if}
		   {/if}
		  </div>
		</div>
	  </div>
	</div>
  {:else}
	<div></div>
  {/if}
  