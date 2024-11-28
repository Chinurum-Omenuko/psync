<script lang="ts">
    import { getContext } from 'svelte';
    import ProjectModal from '$lib/Modals/ProjectModal.svelte';
    import { onMount } from 'svelte';

    const { role } = getContext('auth');
    const isAdmin = role === 'admin';

    // Define the type for a project
    interface Project {
        projectName: string;
        description: string;
        organizationName: string;
        status: 'requested' | 'registered';
    }

    // Modal state
    let showModal = false;
    let selectedProject: Project | null = null; // To hold the project for the modal
    let selectedRequestList = $state('register');

    // Replace with the actual function to fetch projects from your API
    const getProjects = async (): Promise<Project[]> => {
        try {
            const response = await fetch('/api/projects');
            if (response.ok) {
                const projects = await response.json();
                // Assuming the API doesn't provide the status, you can set it here
                return projects.map(project => ({
                    ...project,
                    status: project.isRequested ? 'requested' : 'registered'
                }));
            } else {
                console.error('Failed to fetch projects');
                return [];
            }
        } catch (error) {
            console.error('Error fetching projects:', error);
            return [];
        }
    };

    // Declare variables
    let projectList: Project[] = [];
    let categories = [{ name: 'All' }, { name: 'Engineering' }, { name: 'Business' }]; // Mock categories for now
    let displayDropdown = 'hidden';

    // Fetch projects on mount
    onMount(async () => {
        projectList = await getProjects();
    });

    // Open modal with selected project
    function displayProjectModal(project: Project) {
        selectedProject = project;
        showModal = true;
    }

    // Close modal
    function closeModal() {
        showModal = false;
        selectedProject = null;
    }

    function handleRequestList(option: 'register' | 'request') {
        selectedRequestList = option;
        if (option === 'request') {
            projectList = projectList.filter(project => project.status === 'requested');
        } else {
            projectList = projectList.filter(project => project.status === 'registered');
        }
    }
</script>

<ProjectModal 
    project={selectedProject}
    isOpen={showModal} 
    {closeModal}
    {isAdmin}
/>

<div class="mx-auto h-full max-w-7xl overflow-scroll bg-[#00703C] px-4 py-6 sm:px-6 lg:px-8">
    <!-- Projects Section -->
    <div class="mx-auto w-full max-w-7xl space-y-6 bg-white p-8">
        <!-- Header -->
        <div>
            <h1 class="text-3xl font-bold">Projects</h1>
            <hr class="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
        </div>

        <div class="mb-6">
			{#if isAdmin}
				<a
					onclick={() => handleRequestList('register')}
					class="{selectedRequestList === 'register' ? 'font-bold' : ''} rounded px-6 py-3"
					>Register</a
				>
				<a
					onclick={() => handleRequestList('request')}
					class="{selectedRequestList === 'request' ? 'font-bold' : ''} rounded px-6 py-3"
					>Request</a
				>
				<hr class="my-4 h-px border-0 bg-gray-200 dark:bg-green-700" />
			{/if}
		</div>


        <!-- Project List -->
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {#each projectList as project}
                <div
                    class="cursor-pointer rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg"
                    onclick={() => displayProjectModal(project)}
                >
                    <h2 class="mb-2 text-xl font-semibold text-gray-800">{project.projectName}</h2>
                    <p class="mb-4 text-sm font-medium text-gray-600">{project.organizationName}</p>
                    <p class="text-gray-700 line-clamp-3">{project.projectIdea}</p>
                </div>
            {/each}
        </div>
    </div>
</div>
