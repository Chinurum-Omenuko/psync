import { a as attr } from "../../../chunks/attributes.js";
import { p as pop, a as push } from "../../../chunks/index3.js";
import "../../../chunks/client.js";
import "../../../chunks/store.svelte.js";
function _page($$payload, $$props) {
  push();
  const login_logo = "/images/image.svg";
  let email = "";
  let password = "";
  $$payload.out += `<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm"><img class="mx-auto h-40 w-auto"${attr("src", login_logo)} alt="Your Company"> <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2></div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"><form class="space-y-6"><div><label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label> <div class="mt-2"><input id="email"${attr("value", email)} name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"></div></div> <div><div class="flex items-center justify-between"><label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label> <div class="text-sm"><a href="#" class="font-semibold text-yellow-600 hover:text-indigo-500">Forgot password?</a></div></div> <div class="mt-2"><input id="password"${attr("value", password)} name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"></div></div> <div><button type="submit" class="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button></div></form> <p class="mt-10 text-center text-sm/6 text-gray-500">Don't have an account? <a href="/register">Register here</a></p></div></div> <p></p>`;
  pop();
}
export {
  _page as default
};
