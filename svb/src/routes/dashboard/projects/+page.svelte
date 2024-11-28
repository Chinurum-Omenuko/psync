<script lang="ts">
    import ProjectModal from '$lib/Modals/ProjectModal.svelte';
    import { onMount } from 'svelte';

    // Define the type for a project
    interface Project {
        projectName: string;
        description: string;
        organizationName: string;
    }

    // Modal state
    let showModal = false;
    let selectedProject: Project | null = null; // To hold the project for the modal

    // Replace with the actual function to fetch projects from your API
    const getProjects = async (): Promise<Project[]> => {
        try {
            const response = await fetch('/api/projects'); // Adjust the URL as needed
            if (response.ok) {
                return await response.json();
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
</script>

<ProjectModal 
    project={selectedProject}
    isOpen={showModal} 
    {closeModal}
/>

<div class="mx-auto h-full max-w-7xl overflow-scroll bg-[#00703C] px-4 py-6 sm:px-6 lg:px-8">
    <!-- Projects Section -->
    <div class="mx-auto w-full max-w-7xl space-y-6 bg-white p-8">
        <!-- Header -->
        <div>
            <h1 class="text-3xl font-bold">Projects</h1>
            <hr class="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
        </div>


        <!-- Project List -->
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {#each projectList as project}
                <div
                    class="cursor-pointer rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg"
                    on:click={() => displayProjectModal(project)}
                >
                    <h2 class="mb-2 text-xl font-semibold text-gray-800">{project.projectName}</h2>
                    <p class="mb-4 text-sm font-medium text-gray-600">{project.organizationName}</p>
                    <p class="text-gray-700 line-clamp-3">{project.projectIdea}</p>
                </div>
            {/each}
        </div>
    </div>
</div>
