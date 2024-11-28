<script>
  import { goto } from "$app/navigation";
  import Authenticate from "$lib/components/Home/Authenticate.svelte";
  import HeroSection from "$lib/Hero/HeroSection.svelte";
  import { toggleSignUpModal } from '../lib/context/ModalContext';
  import { authHandlers } from "../store/store.svelte";

</script>





<HeroSection toggleSUModal={toggleSignUpModal} />
<!-- <button onclick={goto("/login")}>Login</button> -->
<!-- <button onclick={authHandlers.loginWithGoogle}><a href="">sign in with google</a></button> -->
<button onclick={authHandlers.logout}>Log out</button>


<style>
	

</style>

