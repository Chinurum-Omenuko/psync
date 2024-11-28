<script lang="ts">
  import { goto } from "$app/navigation";
  import { authHandlers } from "../../../store/store.svelte";
</script>

<button onclick={authHandlers.loginWithGoogle}><a href="">sign in with google</a></button>

<button><a href="/register">sign up</a></button>