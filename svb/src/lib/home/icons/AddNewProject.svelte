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
    title={buttonText}
    on:click={action}
    class="{size} rounded-full border-2 border-dashed border-white-200
    hover:border-blue-400 flex items-center justify-center
    transition-all group"
  >
    <svg
        class="w-6 h-6 text-white-400 group-hover:text-blue-400 group-hover:rotate-90 transition-all"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        stroke-width="2"
    >
        <path d="M12 5v14m-7-7h14" />
    </svg>

  </button>


</div>