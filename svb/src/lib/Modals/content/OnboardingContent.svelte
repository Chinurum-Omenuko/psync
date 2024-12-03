<script lang="ts">
  import { setContext } from "svelte";
  import FacultyOnboarding from "../forms/FacultyOnboarding.svelte";
  import PartnerOnboarding from "../forms/PartnerOnboarding.svelte";

  type registrationType = 'faculty' | 'partner' | null
  let registrationSelection: registrationType = null

  const selectRegistration = (regType: registrationType) => {
    registrationSelection = regType;
  }
  
  setContext('registration', registrationSelection)

</script>


{#if registrationSelection === null}
    <h2 class="text-2xl font-bold mb-4">Welcome to PartnerSync</h2>
    <p class="mb-4">Please select one of the groups that describe you</p>
    <div class="flex gap-4">
        <div class="w-full bg-[#9ABB50] p-4 rounded-lg shadow-md text-left">
            <button 
                onclick={() => selectRegistration('faculty')} 
                class="bg-[#9ABB50] text-black px-4 py-2 rounded w-full text-left font-bold"
            >
                Faculty
            </button>
            <p class="text-sm mt-2">Currently a faculty or educator at Algonquin College. Looking for a partner to work with my students.</p>
        </div>
        <div class="w-full bg-[#9ABB50] p-4 rounded-lg shadow-md text-left">
            <button 
                onclick={() => selectRegistration('partner')} 
                class="bg-[#9ABB50] text-black px-4 py-2 rounded w-full text-left font-bold"
            >
                Partner
            </button>
            <p class="text-sm mt-2">Looking to improve your business or organization by collaborating with highly qualified academic students.</p>
        </div>
    </div>
{:else if registrationSelection === 'faculty'}
    <FacultyOnboarding />
{:else}
    <PartnerOnboarding />
{/if}
<style>

</style>