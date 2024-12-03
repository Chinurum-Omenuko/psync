<script lang="ts">
  import { authStore } from "../../store/store.svelte";

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
    export let isAdmin: boolean = false;

    let auth = $authStore

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

        if (!isOpen || !project) {
            alert("Please open the modal and select a project first.");
            return;
        }

        const interestData = {
            projectId: project.projectName,
            projectName: project.projectName,
            organizationName: project.organizationName,
            projectIdea: project.projectIdea,
            field: project.field,
            organizationInfo: project.organizationInfo,
            skillsNeeded: project.skillsNeeded,
            startTerm: project.startTerm,
            createdAt: project.createdAt,
            expressedBy: auth.user?.uid ?? '',
            expressedAt: new Date().toISOString(),
            uid: auth.user?.uid,
            status: 'project interest'
        };

        try {
            // Make the API request to express interest
            const response = await fetch('/api/interests/project', {
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


{#if isOpen && project}
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!-- Background overlay -->
    <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        onclick={closeModal}>
    </div>

    <!-- Modal container -->
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
                class="relative mx-10 w-[52rem] transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all"
            >
                <!-- Close button -->
                <button
                    onclick={closeModal}
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
                        onclick={expressInterest}
                        class="mt-6 rounded bg-[#EAC117] px-4 py-2 text-white hover:bg-[#D1A816]"
                    >
                        {isAdmin ? 'Accept Registration' : 'Express Interest'}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
{:else}
<div></div>
{/if}