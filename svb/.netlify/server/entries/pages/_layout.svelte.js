import { p as pop, a as push, f as setContext, s as store_get, d as slot, u as unsubscribe_stores } from "../../chunks/index3.js";
import { a as authStore } from "../../chunks/store.svelte.js";
import { a as attr } from "../../chunks/attributes.js";
import { m as modalStore } from "../../chunks/ModalContext.js";
function Footer($$payload) {
  const logo = "/images/white_logo.svg";
  $$payload.out += `<footer class="bg-black text-white py-8"><div class="footer-content max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4"><div class="info-section flex flex-col md:flex-row gap-8"><div class="company-info"><h4 class="text-lg font-bold mb-2">Company</h4> <p><a href="https://www.algonquincollege.com/applied-research/" class="text-white hover:text-gray-400">About Applied Research</a></p> <p><a href="https://www.algonquincollege.com/" class="text-white hover:text-gray-400">Algonquin College</a></p></div> <div class="legal-info mt-4 md:mt-0"><h4 class="text-lg font-bold mb-2">Legal</h4> <p><a href="https://www.algonquincollege.com/policies/privacy/" class="text-white hover:text-gray-400">Privacy Policy</a></p></div></div> <div class="footer-logo mt-4 md:mt-0 w-80 flex justify-center"><img${attr("src", logo)} alt="PartnerSync Logo" class="h-32 w-auto md:h-36 lg:h-40"></div></div> <p class="text-center mt-8">© 2024 PartnerSync. All rights reserved.</p></footer>`;
}
function SignInModal($$payload) {
  $$payload.out += `<div id="signInModal" class="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 hidden z-30 svelte-1edepz"><div class="modal-content bg-white p-8 rounded-lg"><span class="close text-black text-2xl cursor-pointer">×</span> <h2 class="text-2xl font-bold mb-4">Sign In</h2> <form class="flex flex-col gap-4"><input type="email" placeholder="Email" class="border p-2 rounded"> <input type="password" placeholder="Password" class="border p-2 rounded"> <button type="submit" class="bg-[#EAC117] text-white px-4 py-2 rounded">Sign In</button></form> <p class="mt-4">New to PartnerSync? <a href="#" class="text-blue-500">Sign up</a></p></div></div>`;
}
function SignUpModal($$payload, $$props) {
  push();
  $$payload.out += `<div class="modal svelte-q1wokw"><div id="signUpModal" class="modal-content bg-white p-8 rounded-lg w-[90%] max-w-lg relative z-40"><span class="close text-black text-2xl cursor-pointer">×</span> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2 class="text-2xl font-bold mb-4">Welcome to PartnerSync</h2> <p class="mb-4">Please select one of the groups that describe you</p> <div class="flex gap-4"><div class="w-full bg-[#9ABB50] p-4 rounded-lg shadow-md text-left"><button class="bg-[#9ABB50] text-black px-4 py-2 rounded w-full text-left font-bold">Faculty</button> <p class="text-sm mt-2">Currently a faculty or educator at Algonquin College. Looking for a partner to work with my students.</p></div> <div class="w-full bg-[#9ABB50] p-4 rounded-lg shadow-md text-left"><button class="bg-[#9ABB50] text-black px-4 py-2 rounded w-full text-left font-bold">Partner</button> <p class="text-sm mt-2">Looking to improve your business or organization by collaborating with highly qualified academic students.</p></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  setContext("auth", { user: null, role: null });
  {
    const authContext = store_get($$store_subs ??= {}, "$authStore", authStore);
    setContext("auth", authContext);
  }
  if (store_get($$store_subs ??= {}, "$ModalContext", modalStore).signIn) {
    $$payload.out += "<!--[-->";
    SignInModal($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (store_get($$store_subs ??= {}, "$ModalContext", modalStore).signUp) {
    $$payload.out += "<!--[-->";
    SignUpModal($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
