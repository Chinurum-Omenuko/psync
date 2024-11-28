<script lang="ts">
  import { goto } from '$app/navigation';
  import InfoModal from '$lib/Modals/InfoModal.svelte';

  // Form variables
  let organizationName: string = '';
  let field: string = '';
  let startTerm: string = '';
  let projectName: string = '';
  let skillsNeeded: string = '';
  let projectIdea: string = '';
  let organizationInfo: string = '';
  let acknowledge: boolean = false;

  // Function to handle form submission
  const submitProjectForm = async (event: Event) => {
      event.preventDefault();

      // Ensure all required fields are filled
      if (!organizationName || !field || !startTerm || !projectName || !skillsNeeded || !projectIdea || !organizationInfo) {
          alert("All fields are required.");
          return;
      }

      const projectData = {
          organizationName,
          field,
          startTerm,
          projectName,
          skillsNeeded,
          projectIdea,
          organizationInfo,
          acknowledge,
      };

      try {
          // Make the API request to submit the project data (replace with your API route)
          const response = await fetch('/api/projects', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(projectData),
          });

          const result = await response.json();

          if (response.ok) {
              console.log('Project submitted successfully:', result);
              showModal = true;  // Show modal on successful submission
          } else {
              console.error('Error submitting project:', result.error);
              alert(result.error);
          }
      } catch (error) {
          console.error('Unexpected error:', error);
          alert('An unexpected error occurred.');
      }
  };
  
  let showModal = false;

  function closeModal() {
      showModal = false; // Redirect or any other navigation after closing modal
  }
</script>

<InfoModal
  title="Your project has been sent for review"
  message="Your project has been sent for review to the department of Applied Research"
  isOpen={showModal}
  {closeModal}
/>

<div class="bg-[#00703C] mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 overflow-y-scroll h-full boxy">
  <div class="bg-white mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 boxy">
      <div>
          <h1 class="text-4xl font-bold mb-4">Register Your Project</h1>
          <hr class="h-px my-8 border-0 bg-[#00703C]" />
          <p>Please fill out the form with the relevant business information and project details to identify a suitable course at Algonquin College for collaboration.</p>
      </div>

      <form on:submit={submitProjectForm}>
          <div class="mt-10 w-full grid grid-flow-row overflow-auto md:grid-cols-6 gap-x-6 gap-y-8 grid-cols-1">
              <div class="col-span-full md:col-span-2">
                  <label for="organizationName">Organization Name</label>
                  <input type="text" id="organizationName" bind:value={organizationName} required class="bg-neutral-100 w-full border-0 py-1.5 pl-1 text-gray-900" />
              </div>

              <div class="col-span-full md:col-span-2">
                  <label for="field">Organization Field</label>
                  <input type="text" id="field" bind:value={field} required class="bg-neutral-100 w-full border-0 py-1.5 pl-1 text-gray-900" />
              </div>

              <div class="col-span-full md:col-span-2">
                  <label for="startTerm">Estimated Start Term</label>
                  <input type="text" id="startTerm" bind:value={startTerm} required class="bg-neutral-100 w-full border-0 py-1.5 pl-1 text-gray-900" />
              </div>

              <div class="col-span-full md:col-span-2">
                  <label for="projectName">Name of Project or Idea</label>
                  <input type="text" id="projectName" bind:value={projectName} required class="bg-neutral-100 w-full border-0 py-1.5 pl-1 text-gray-900" />
              </div>

              <div class="col-span-full md:col-span-2">
                  <label for="skillsNeeded">Skills Needed</label>
                  <input type="text" id="skillsNeeded" bind:value={skillsNeeded} required class="bg-neutral-100 w-full border-0 py-1.5 pl-1 text-gray-900" />
              </div>

              <div class="col-span-full">
                  <label for="projectIdea">Project Idea</label>
                  <textarea id="projectIdea" bind:value={projectIdea} rows="3" required class="bg-neutral-100 w-full rounded-md py-1.5 pl-1 text-gray-900"></textarea>
              </div>

              <div class="col-span-full">
                  <label for="organizationInfo">About the Organization</label>
                  <textarea id="organizationInfo" bind:value={organizationInfo} rows="3" required class="bg-neutral-100 w-full rounded-md py-1.5 pl-1 text-gray-900"></textarea>
              </div>

              <div class="col-span-full">
                  <div class="flex items-center">
                      <input id="acknowledge" type="checkbox" bind:checked={acknowledge} required class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                      <label for="acknowledge" class="ms-2 text-sm text-gray-900">I acknowledge that this information will be made public on the PartnerSync website.</label>
                  </div>
              </div>

              <div class="col-span-full">
                  <button type="submit" class="ml-auto flex get-started-btn bg-[#EAC117] text-white px-6 py-3 rounded">
                      Submit
                  </button>
              </div>
          </div>
      </form>
  </div>
</div>


<style>
    .boxy{
        border-radius: 3cap;
    }
</style>