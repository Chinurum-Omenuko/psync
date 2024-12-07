import { s as store_get, u as unsubscribe_stores, b as bind_props, p as pop, a as push, g as getContext, e as ensure_array_like, c as stringify } from "../../../../chunks/index3.js";
import { a as authStore } from "../../../../chunks/store.svelte.js";
import { f as fallback } from "../../../../chunks/utils.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { a as attr } from "../../../../chunks/attributes.js";
function ProjectModal($$payload, $$props) {
  push();
  var $$store_subs;
  let project = fallback($$props["project"], null);
  let isOpen = fallback($$props["isOpen"], false);
  let closeModal = $$props["closeModal"];
  let isAdmin = fallback($$props["isAdmin"], false);
  store_get($$store_subs ??= {}, "$authStore", authStore);
  function formatDate(timestamp) {
    return new Date(timestamp).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short"
    });
  }
  if (isOpen && project) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div> <div class="fixed inset-0 z-10 w-screen overflow-y-auto"><div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"><div class="relative mx-10 w-[52rem] transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all"><button type="button" class="absolute top-4 right-4 flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> <div class="bg-white px-8 pb-8 pt-5"><h1 class="mb-6 text-2xl font-bold">${escape_html(project.projectName)}</h1> <div class="space-y-4"><p><strong>Organization:</strong> ${escape_html(project.organizationName)}</p> <p><strong>Project Idea:</strong> ${escape_html(project.projectIdea)}</p> <p><strong>Field:</strong> ${escape_html(project.field)}</p> <p><strong>Organization Info:</strong> ${escape_html(project.organizationInfo)}</p> <p><strong>Skills Needed:</strong> ${escape_html(project.skillsNeeded)}</p> <p><strong>Start Term:</strong> ${escape_html(project.startTerm)}</p> <p><strong>Created At:</strong> ${escape_html(formatDate(project.createdAt))}</p></div> <button class="mt-6 rounded bg-[#EAC117] px-4 py-2 text-white hover:bg-[#D1A816]">${escape_html(isAdmin ? "Accept Registration" : "Express Interest")}</button></div></div></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { project, isOpen, closeModal, isAdmin });
  pop();
}
function _page($$payload, $$props) {
  push();
  const { role } = getContext("auth");
  const isAdmin = role === "admin";
  let showModal = false;
  let selectedProject = null;
  let projectList = [];
  let categories = [
    { name: "All" },
    { name: "Engineering" },
    { name: "Business" }
  ];
  let displayDropdown = "hidden";
  function closeModal() {
    showModal = false;
    selectedProject = null;
  }
  const each_array = ensure_array_like(categories);
  const each_array_1 = ensure_array_like(projectList);
  ProjectModal($$payload, {
    project: selectedProject,
    isOpen: showModal,
    closeModal,
    isAdmin
  });
  $$payload.out += `<!----> <div class="p-6 max-w-7xl mx-auto"><div class="mb-6"><h1 class="text-3xl font-bold text-white">Projects</h1> <div class="flex items-center mt-4"><div class="relative inline-block"><div class="flex items-center mt-4"${attr("style", isAdmin ? "" : "display: none;")}><a${attr("class", `${stringify("text-black font-bold")} relative mr-4 cursor-pointer`)}>Register</a> <a${attr("class", `${stringify("text-gray-400")} relative cursor-pointer`)}>Request</a></div> <button class="text-black borde bg-yellow-500 px-4 py-2 rounded-lg shadow-sm focus:outline-none">Categories</button> <ul${attr("class", `${stringify(`absolute bg-white border border-gray-300 rounded-lg mt-2 p-2 shadow-lg ${displayDropdown}`)} svelte-htk24u`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out += `<li class="py-2 px-4 hover:bg-gray-100 cursor-pointer">${escape_html(category.name)}</li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></div> <div class="overflow-x-auto bg-white border border-gray-300 rounded-lg shadow"><table class="w-full text-left text-sm"><thead class="bg-gray-100 border-b border-gray-300"><tr><th class="py-2 px-4">Project Name</th><th class="py-2 px-4">Description</th><th class="py-2 px-4">Organization</th></tr></thead><tbody><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array_1[$$index_1];
    $$payload.out += `<tr class="cursor-pointer border-b hover:bg-gray-50"><td class="py-3 px-4">${escape_html(project.projectName ?? "")}</td><td class="py-3 px-4 line-clamp-2 svelte-htk24u">${escape_html(project.description ?? "")}</td><td class="py-3 px-4">${escape_html(project.organizationName ?? "")}</td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div></div>`;
  pop();
}
export {
  _page as default
};
