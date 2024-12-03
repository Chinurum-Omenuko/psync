<script>
	import CourseModal from '$lib/Modals/CourseModal.svelte';
	import mockCourses from './mockCourses';
	import mockRequestCourses from './mockRequestCourses';
	import { getContext } from 'svelte';

	const authContext = getContext('auth');
	const { user, role } = authContext;

	let isAdmin = $state(role === 'admin' || false);
	let showModal = $state(false);
	let course = $state({});
	let selectedRequestList = $state('register');
	let courses = $state(mockCourses);

	function sendCourseForm() {
		showModal = true;
	}
	function closeModal() {
		showModal = false;
	}

	function displayCourseModal(courseDisplayed) {
		course = courseDisplayed;
		showModal = true;
	}

	function sendInterest() {
		// Add logic to send interest
		showModal = false;
	}

	function handleRequestList(option) {
		if (option === 'request') {
			courses = mockRequestCourses;
			selectedRequestList = 'request';
		} else {
			courses = mockCourses;
			selectedRequestList = 'register';
		}
	}
</script>

<CourseModal {course} isOpen={showModal} {closeModal} {sendInterest} {isAdmin} />

<div class="p-6 max-w-7xl mx-auto">
	<!-- Header -->
	<div class="mb-6">
		<h1 class="text-2xl font-bold">Courses</h1>
	
		<div class="flex items-center mt-4" style="{isAdmin ? '' : 'display: none;'}">
			<!-- Tabs -->
			<a
				onclick={() => handleRequestList('register')}
				class="{selectedRequestList === 'register' ? 'text-black font-bold' : 'text-gray-400'} relative mr-4 cursor-pointer"
			>
				Register
			</a>
			<a
				onclick={() => handleRequestList('request')}
				class="{selectedRequestList === 'request' ? 'text-black font-bold' : 'text-gray-400'} relative cursor-pointer"
			>
				Request
			</a>
		</div>
	</div>

	<!-- Courses Table -->
	<div class="overflow-x-auto bg-white border border-gray-300 rounded-lg shadow">
		<table class="w-full text-left text-sm">
			<!-- Table Header -->
			<thead class="bg-gray-100 border-b border-gray-300">
				<tr>
					<th class="py-2 px-4">Name</th>
					<th class="py-2 px-4">Program</th>
					<th class="py-2 px-4">School/Department</th>
					<th class="py-2 px-4">Level</th>
					<th class="py-2 px-4">Staff</th>
				</tr>
			</thead>
			<!-- Table Body -->
			<tbody>
				{#each courses as course}
					<tr
						class="cursor-pointer border-b hover:bg-gray-50"
						onclick={() => displayCourseModal(course)}
					>
						<td class="py-3 px-4">{course.code ?? ''}</td>
						<td class="py-3 px-4">{course.program ?? ''}</td>
						<td class="py-3 px-4">{course.schoolDepartment ?? ''}</td>
						<td class="py-3 px-4">{course.level ?? ''}</td>
						<td class="py-3 px-4">{course.staff ?? ''}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.boxy {
		border-radius: 3cap;
	}
</style>
