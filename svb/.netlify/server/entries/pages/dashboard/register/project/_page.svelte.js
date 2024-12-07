import { s as store_get, u as unsubscribe_stores } from "../../../../../chunks/index3.js";
import "../../../../../chunks/client.js";
import { I as InfoModal } from "../../../../../chunks/InfoModal.js";
import { a as authStore } from "../../../../../chunks/store.svelte.js";
import { a as attr } from "../../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../../chunks/escaping.js";
function _page($$payload) {
  var $$store_subs;
  const auth = store_get($$store_subs ??= {}, "$authStore", authStore);
  let organizationName = "";
  let field = "";
  let startTerm = "";
  let projectName = "";
  let skillsNeeded = "";
  let projectIdea = "";
  let organizationInfo = "";
  let acknowledge = false;
  auth.user?.uid;
  let showModal = false;
  function closeModal() {
    showModal = false;
  }
  InfoModal($$payload, {
    title: "Your project has been sent for review",
    message: "Your project has been sent for review to the department of Applied Research",
    isOpen: showModal,
    closeModal
  });
  $$payload.out += `<!----> <div class="bg-[#00703C] mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 overflow-y-scroll h-full boxy svelte-1bxbjbu"><div class="bg-white mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 boxy svelte-1bxbjbu"><div><h1 class="text-4xl font-bold mb-4">Register Your Project</h1> <hr class="h-px my-8 border-0 bg-[#00703C]"> <p>Please fill out the form with the relevant business information and project details to identify a suitable course at Algonquin College for collaboration.</p></div> <form><div class="mt-10 w-full grid grid-flow-row overflow-auto md:grid-cols-6 gap-x-6 gap-y-8 grid-cols-1"><div class="col-span-full md:col-span-2"><label for="organizationName">Organization Name</label> <input type="text" id="organizationName"${attr("value", organizationName)} required class="bg-neutral-100 w-full border-0 py-1.5 pl-1 text-gray-900"></div> <div class="col-span-full md:col-span-2"><label for="field">Organization Field</label> <input type="text" id="field"${attr("value", field)} required class="bg-neutral-100 w-full border-0 py-1.5 pl-1 text-gray-900"></div> <div class="col-span-full md:col-span-2"><label for="startTerm">Estimated Start Term</label> <input type="text" id="startTerm"${attr("value", startTerm)} required class="bg-neutral-100 w-full border-0 py-1.5 pl-1 text-gray-900"></div> <div class="col-span-full md:col-span-2"><label for="projectName">Name of Project or Idea</label> <input type="text" id="projectName"${attr("value", projectName)} required class="bg-neutral-100 w-full border-0 py-1.5 pl-1 text-gray-900"></div> <div class="col-span-full md:col-span-2"><label for="skillsNeeded">Skills Needed</label> <input type="text" id="skillsNeeded"${attr("value", skillsNeeded)} required class="bg-neutral-100 w-full border-0 py-1.5 pl-1 text-gray-900"></div> <div class="col-span-full"><label for="projectIdea">Project Idea</label> <textarea id="projectIdea" rows="3" required class="bg-neutral-100 w-full rounded-md py-1.5 pl-1 text-gray-900">`;
  const $$body = escape_html(projectIdea);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div class="col-span-full"><label for="organizationInfo">About the Organization</label> <textarea id="organizationInfo" rows="3" required class="bg-neutral-100 w-full rounded-md py-1.5 pl-1 text-gray-900">`;
  const $$body_1 = escape_html(organizationInfo);
  if ($$body_1) {
    $$payload.out += `${$$body_1}`;
  }
  $$payload.out += `</textarea></div> <div class="col-span-full"><div class="flex items-center"><input id="acknowledge" type="checkbox"${attr("checked", acknowledge, true)} required class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"> <label for="acknowledge" class="ms-2 text-sm text-gray-900">I acknowledge that this information will be made public on the PartnerSync website.</label></div></div> <div class="col-span-full"><button type="submit" class="ml-auto flex get-started-btn bg-[#EAC117] text-white px-6 py-3 rounded">Submit</button></div></div></form></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
