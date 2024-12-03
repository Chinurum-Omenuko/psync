
<script lang="ts">
    import { getContext } from 'svelte';
    import ProjectModal from '$lib/Modals/ProjectModal.svelte';
    import { onMount } from 'svelte';
  import mockProjectList from './mockProjectList';

    const { role } = getContext('auth');
    const isAdmin = role === 'admin';

    interface Project {
        projectName: string;
        description: string;
        organizationName: string;
    }

    function handleRegisterClick() {
        getProjects();
    }

    function handleRequestClick(){

    }


    let showModal = false;
    let selectedProject: Project | null = null;
    let selectedRequestList = 'register';

    const getProjects = async (): Promise<Project[]> => {
        try {
            const response = await fetch('/api/projects');
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

    let projectList: Project[] = [];
    let categories = [{ name: 'All' }, { name: 'Engineering' }, { name: 'Business' }];
    let displayDropdown = 'hidden';

    onMount(async () => {
        projectList = await getProjects();
    });

    function displayProjectModal(project: Project) {
        selectedProject = project;
        showModal = true;
    }

    function closeModal() {
        showModal = false;
        selectedProject = null;
    }
</script>

<ProjectModal
    project={selectedProject}
    isOpen={showModal}
    {closeModal}
    {isAdmin}
/>

<div class="p-6 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-6">
        <h1 class="text-3xl font-bold text-white">Projects</h1>
        <div class="flex items-center mt-4">
            <!-- Categories Dropdown -->
            <div class="relative inline-block">
                <div class="flex items-center mt-4" style="{isAdmin ? '' : 'display: none;'}">
                    <!-- Tabs -->
                    <a
                        onclick={() => handleRegisterClick}
                        class="{selectedRequestList === 'register' ? 'text-black font-bold' : 'text-gray-400'} relative mr-4 cursor-pointer"
                    >
                        Register
                    </a>
                    <a
                        
                        class="{selectedRequestList === 'request' ? 'text-black font-bold' : 'text-gray-400'} relative cursor-pointer"
                    >
                        Request
                    </a>
                </div>
                <button
                    class="text-black borde bg-yellow-500 px-4 py-2 rounded-lg shadow-sm focus:outline-none"
                    onclick={() => displayDropdown = displayDropdown === 'hidden' ? 'block' : 'hidden'}
                >
                    Categories
                </button>
                <ul
                    class={`absolute bg-white border border-gray-300 rounded-lg mt-2 p-2 shadow-lg ${displayDropdown}`}
                >
                    {#each categories as category}
                        <li
                            class="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                            onclick={() => displayDropdown = 'hidden'}
                        >
                            {category.name}
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

    </div>

    <!-- Projects Table -->
    <div class="overflow-x-auto bg-white border border-gray-300 rounded-lg shadow">
        <table class="w-full text-left text-sm">
            <!-- Table Header -->
            <thead class="bg-gray-100 border-b border-gray-300">
                <tr>
                    <th class="py-2 px-4">Project Name</th>
                    <th class="py-2 px-4">Description</th>
                    <th class="py-2 px-4">Organization</th>
                </tr>
            </thead>
            <!-- Table Body -->
            <tbody>
                {#each projectList as project}
                    <tr
                        class="cursor-pointer border-b hover:bg-gray-50"
                        onclick={() => displayProjectModal(project)}
                    >
                        <td class="py-3 px-4">{project.projectName ?? ''}</td>
                        <td class="py-3 px-4 line-clamp-2">{project.description ?? ''}</td>
                        <td class="py-3 px-4">{project.organizationName ?? ''}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<style>
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>
