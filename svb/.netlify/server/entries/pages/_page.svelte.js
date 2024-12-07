import "../../chunks/client.js";
import { a as attr } from "../../chunks/attributes.js";
import { f as setContext, p as pop, a as push, s as store_get, u as unsubscribe_stores } from "../../chunks/index3.js";
import { m as modalStore } from "../../chunks/ModalContext.js";
import "../../chunks/store.svelte.js";
function HeroHeader($$payload) {
  const logo = "/images/white_logo.svg";
  $$payload.out += `<header class="bg-[#00703C] p-4 flex justify-between items-center"><div class="container flex items-center svelte-ghmxxn"><img${attr("src", logo)} alt="PartnerSync Logo" class="h-16 w-auto md:h-24 lg:h-32 mb-4"> <a href="/signin"><button class="sign-in-btn bg-[#EAC117] text-white px-4 py-2 rounded ml-auto">Sign In</button></a></div></header>`;
}
function OnboardingContent($$payload, $$props) {
  push();
  let registrationSelection = null;
  setContext("registration", registrationSelection);
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2 class="text-2xl font-bold mb-4">Welcome to PartnerSync</h2> <p class="mb-4">Please select one of the groups that describe you</p> <div class="flex gap-4"><div class="w-full bg-[#9ABB50] p-4 rounded-lg shadow-md text-left"><button class="bg-[#9ABB50] text-black px-4 py-2 rounded w-full text-left font-bold">Faculty</button> <p class="text-sm mt-2">Currently a faculty or educator at Algonquin College. Looking for a partner to work with my students.</p></div> <div class="w-full bg-[#9ABB50] p-4 rounded-lg shadow-md text-left"><button class="bg-[#9ABB50] text-black px-4 py-2 rounded w-full text-left font-bold">Partner</button> <p class="text-sm mt-2">Looking to improve your business or organization by collaborating with highly qualified academic students.</p></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Modal($$payload) {
  var $$store_subs;
  if (store_get($$store_subs ??= {}, "$modalStore", modalStore) === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<dialog class="modal svelte-q1wokw" tabindex="0"><div id="signUpModal" class="modal-content bg-white p-8 rounded-lg w-[90%] max-w-lg relative z-40" aria-label="Close Modal"><button class="close text-black text-2xl cursor-pointer" aria-label="Close Modal" tabindex="0">×</button> `;
    OnboardingContent($$payload);
    $$payload.out += `<!----></div></dialog>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function HeroSection($$payload) {
  Modal($$payload);
  $$payload.out += `<!----> `;
  HeroHeader($$payload);
  $$payload.out += `<!----> <div class="container svelte-ohj3ai"><section class="hero bg-[#00703C] text-center text-white relative overflow-hidden" style="min-height: 78vh;"><div class="hero-content relative z-20 flex flex-col justify-center items-center h-full"><h1 class="text-4xl font-bold mb-4">PartnerSync</h1> <p class="text-l mb-6 max-w-xl mx-auto">PartnerSync is a project matching tool that connects Algonquin faculty, students and external partners. It is used to collaborate, submit project requests, and explore partnership opportunities.</p> <button class="get-started-btn bg-[#EAC117] text-white px-6 py-3 rounded">Get Started</button></div> <div class="graphic-layer absolute bottom-0 left-0 right-0 z-10"><img src="/images/PartnerSync banner.svg" alt="Hero Banner Graphic" class="w-full h-auto"></div></section> <section class="features py-16 px-4 text-center"><div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"><div class="feature p-6 border rounded-lg shadow-md"><img src="/images/PartnerSync graphics-01.svg" alt="Create an Account" class="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4"> <h3 class="text-2xl font-bold mb-2">Create an Account</h3> <p>Sign up by identifying yourself as a Algonquin Faculty Member or Industry Partner to tailor your experience.</p></div> <div class="feature p-6 border rounded-lg shadow-md"><img src="/images/PartnerSync graphics-02.svg" alt="Submit a Request" class="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4"> <h3 class="text-2xl font-bold mb-2">Submit a Request</h3> <p>Provide details about your project idea or area of interest to get started.</p></div> <div class="feature p-6 border rounded-lg shadow-md"><img src="/images/PartnerSync graphics-03.svg" alt="Explore Collaboration Opportunities" class="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4"> <h3 class="text-2xl font-bold mb-2">Explore Collaboration Opportunities</h3> <p>Browse through partner organizations or courses at Algonquin College to find your ideal collaborators and start working together!</p></div></div></section></div>`;
}
function _page($$payload) {
  HeroSection($$payload);
}
export {
  _page as default
};
