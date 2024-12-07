import { p as pop, a as push, g as getContext, d as slot, b as bind_props } from "../../../chunks/index3.js";
import "../../../chunks/client.js";
import "../../../chunks/store.svelte.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function Header($$payload, $$props) {
  push();
  $$payload.out += `<header class="flex items-center justify-between bg-white px-4 svelte-kn0rgw"><div class="flex items-center"><img src="/images/green-logo.svg" alt="PartnerSync Logo" class="h-10 w-auto sm:h-12 md:h-16 lg:h-56"></div> <div class="flex items-center space-x-4"><button class="bg-yellow-500 text-white px-4 py-2 rounded">Log out</button> <button class="rounded bg-[#EAC117] px-3 py-1 text-white sm:inline md:hidden">☰</button></div></header>`;
  pop();
}
function Navbar($$payload, $$props) {
  push();
  const { user, role } = $$props;
  let isExternal = role === "partner" || false;
  let position = "Faculty";
  console.log("my role:", role);
  let isAdmin = role === "admin";
  console.log(isAdmin);
  console.log({ isAdmin });
  $$payload.out += `<div class="nav min-w-100 hidden h-full flex-[0.35] bg-grey-200 md:block"><div class="inline-flex h-full w-full flex-col items-center justify-center bg-white"><div class="flex items-center justify-center w-16 h-16 bg-blue-500 text-white text-xl font-bold rounded-full">CO</div> <div class="flex flex-col items-center justify-center"><h2 class="text-lg">Hello</h2> <h1 class="text-2xl font-bold">${escape_html(position)}</h1></div> <hr class="my-2 h-px w-2/3 border-0 bg-[#00703C]"> <ul class="space-y-2 font-medium"><li><a href="/dashboard/home" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg> <span class="ms-3">Home</span></a></li> <li><a href="/dashboard/courses" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path></svg> <span class="ms-3 flex-1 whitespace-nowrap">Courses</span></a></li> `;
  if (!isExternal) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<li><a href="/dashboard/projects" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"></path></svg> <span class="ms-3 flex-1 whitespace-nowrap">Projects</span></a></li>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div></div>`;
  }
  $$payload.out += `<!--]--> `;
  if (!isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<li><a href="/dashboard/message" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg> <span class="ms-3 flex-1 whitespace-nowrap">Message</span></a></li>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (!isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<li><a${attr("href", isExternal ? "/dashboard/register/project" : "/dashboard/register/course")} class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"></path></svg> <span class="ms-3 flex-1 whitespace-nowrap">${escape_html(isExternal ? "Project Registration" : "Course Registration")}</span></a></li>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></ul> <hr class="my-2 h-px w-2/3 border-0 bg-[#00703C]"></div></div>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let data = $$props["data"];
  let authContext;
  try {
    authContext = getContext("auth");
  } catch (e) {
    console.warn("Auth context is undefined. Falling back to defaults.");
    authContext = { user: null, role: null };
  }
  const { user, role } = authContext;
  console.log("user in layout: ", user);
  console.log("role in layout: ", role);
  console.log("on dashboard layout", data);
  Header($$payload);
  $$payload.out += `<!----> <div class="flex h-svh max-h-[700px] w-full">`;
  Navbar($$payload, { user, role });
  $$payload.out += `<!----> <div class="h-full flex-1 bg-[#00703C] box sm:max-w-full max-w-[100vw] svelte-ws2s71"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _layout as default
};
