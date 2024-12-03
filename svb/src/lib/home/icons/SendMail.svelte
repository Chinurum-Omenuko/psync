<!-- NewRequestCircle.svelte -->
<script lang="ts">
    export let size = "w-14 h-14";  // customizable size
    export let role: 'admin' | 'faculty' | 'external' = 'external';

    let buttonText: string;
    let action: () => void;

    $: {
        switch (role) {
            case 'admin':
                buttonText = 'Accept Course';
                action = () => {
                    // Logic for admin to accept course
                    console.log('Admin accepting course');
                };
                break;
            case 'faculty':
                buttonText = 'Register Course';
                action = () => {
                    // Logic for faculty to register course
                    console.log('Faculty registering course');
                };
                break;
            case 'external':
            default:
                buttonText = 'New Project';
                action = () => {
                    // Logic for external to create new project
                    console.log('External creating new project');
                };
                break;
        }
    }
  </script>


<div class="flex-col items-center justify-center">
    <button
        on:click={action}
        title="Send Mail"
        class="{size} rounded-full border-2 border-dashed border-white-200
        hover:border-blue-400 flex items-center justify-center
        transition-all group"
    >

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>


    </button>
</div>