<script>
  import { goto } from '$app/navigation';
  import { authStore } from '../../store/store.svelte';

  const login_logo = "/images/image.svg"

    let email = '';
    let password = '';
    let error = null;
    
    async function loginUser() {
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Tell the server this is JSON
                },
                body: JSON.stringify({ action: 'login', email, password }),
            });

            const result = await response.json();

            if (response.ok) {
                // Assuming 'result.userData' contains the user and role
                const { userData } = result;

                // Set the user and role in the authStore
                authStore.set({
                  user: userData,
                  role: userData.role || 'user',
                  additionalInfo: undefined
                });

                // Redirect to the main dashboard or a protected route
                goto('/dashboard/home');
            } else {
                error = result.error;
            }
        } catch (err) {
            error = 'An error occurred during login. Please try again later.';
         console.error(err);
        }
    }

</script>

<!-- <form on:submit|preventDefault={loginUser}>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required />
    
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required />
    
    <button type="submit">Login</button>
    
    {#if error}
        <p class="error">{error}</p>
    {/if}
</form> -->


<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-40 w-auto" src={login_logo} alt="Your Company">
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" on:submit|preventDefault={loginUser}>
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" bind:value={email} name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-yellow-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" bind:value={password} name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
          </div>
        </div>
  
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>
  
      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
</div>

<p></p>

