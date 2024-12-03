<script lang="ts">
  import { modalStore } from "$lib/context/ModalContext";
  import OnboardingContent from "./content/OnboardingContent.svelte";
</script>

{#if $modalStore === true}
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <dialog class="modal" tabindex="0">
        <div id="signUpModal" class="modal-content bg-white p-8 rounded-lg w-[90%] max-w-lg relative z-40" aria-label="Close Modal">
            <button class="close text-black text-2xl cursor-pointer" onclick={() => $modalStore = false} aria-label="Close Modal" tabindex="0">&times;</button>
            <OnboardingContent />
        </div>
    </dialog>
{/if}

<style>
  .modal{
    width: 100vw;
    height: 100vh;
    top: 0;
    position: fixed;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.425);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	}
</style>