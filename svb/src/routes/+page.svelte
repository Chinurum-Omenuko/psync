<script>
  import { goto } from "$app/navigation";
  import HeroSection from "$lib/Hero/HeroSection.svelte";
  import { authHandlers } from "../store/store.svelte";

</script>





<HeroSection />
<!-- <button onclick={goto("/login")}>Login</button> -->
<!-- <button onclick={authHandlers.loginWithGoogle}><a href="">sign in with google</a></button> -->
<button onclick={authHandlers.logout}>Log out</button>


<style>
	

</style>

