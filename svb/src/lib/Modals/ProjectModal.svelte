<script lang="ts">
    export let project: {
        projectName: string;
        organizationName: string;
        projectIdea: string;
        field: string;
        organizationInfo: string;
        skillsNeeded: string;
        startTerm: string;
        createdAt: string;
    } | null = null;
    export let isOpen: boolean = false;
    export let closeModal: () => void;
    export let expressInterest: (projectId: string) => void;

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
</script>

{#if isOpen && project}
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!-- Background overlay -->
    <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        on:click={closeModal}>
    </div>

    <!-- Modal container -->
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
                class="relative mx-10 w-[52rem] transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all"
            >
                <!-- Close button -->
                <button
                    on:click={closeModal}
                    type="button"
                    class="absolute top-4 right-4 flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                    <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <!-- Modal Content -->
                <div class="bg-white px-8 pb-8 pt-5">
                    <h1 class="mb-6 text-2xl font-bold">{project.projectName}</h1>
                    <div class="space-y-4">
                        <p><strong>Organization:</strong> {project.organizationName}</p>
                        <p><strong>Project Idea:</strong> {project.projectIdea}</p>
                        <p><strong>Field:</strong> {project.field}</p>
                        <p><strong>Organization Info:</strong> {project.organizationInfo}</p>
                        <p><strong>Skills Needed:</strong> {project.skillsNeeded}</p>
                        <p><strong>Start Term:</strong> {project.startTerm}</p>
                        <p><strong>Created At:</strong> {formatDate(project.createdAt)}</p>
                    </div>
                    
                    <!-- Express Interest Button -->
                    <button 
                        on:click={() => expressInterest(project.projectName)}
                        class="mt-6 rounded bg-[#EAC117] px-4 py-2 text-white hover:bg-[#D1A816]"
                    >
                        Express Interest
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
{:else}
<div></div>
{/if}