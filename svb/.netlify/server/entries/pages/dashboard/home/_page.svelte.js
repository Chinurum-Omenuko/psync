import { e as escape_html } from "../../../../chunks/escaping.js";
import { b as bind_props, c as stringify, g as getContext, p as pop, a as push } from "../../../../chunks/index3.js";
import { f as fallback } from "../../../../chunks/utils.js";
import { a as attr } from "../../../../chunks/attributes.js";
function AddNewProject($$payload, $$props) {
  let size = fallback($$props["size"], "w-14 h-14");
  let role = fallback($$props["role"], "external");
  let buttonText;
  {
    switch (role) {
      case "admin":
        buttonText = "Accept Course";
        break;
      case "faculty":
        buttonText = "Register Course";
        break;
      case "external":
      default:
        buttonText = "New Project";
        break;
    }
  }
  $$payload.out += `<div class="flex-col items-center justify-center"><button${attr("title", buttonText)}${attr("class", `${stringify(size)} rounded-full border-2 border-dashed border-white-200 hover:border-blue-400 flex items-center justify-center transition-all group`)}><svg class="w-6 h-6 text-white-400 group-hover:text-blue-400 group-hover:rotate-90 transition-all" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M12 5v14m-7-7h14"></path></svg></button></div>`;
  bind_props($$props, { size, role });
}
function SendMail($$payload, $$props) {
  let size = fallback($$props["size"], "w-14 h-14");
  let role = fallback($$props["role"], "external");
  $$payload.out += `<div class="flex-col items-center justify-center"><button title="Send Mail"${attr("class", `${stringify(size)} rounded-full border-2 border-dashed border-white-200 hover:border-blue-400 flex items-center justify-center transition-all group`)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg></button></div>`;
  bind_props($$props, { size, role });
}
function QuickActions($$payload, $$props) {
  push();
  const authContext = getContext("auth");
  const { role } = authContext;
  $$payload.out += `<div class="rounded-lg p-2 border-gray-200 item-1"><div class="mb-4 mx-2"><h3 class="text-left text-lg font-bold text-white">Quick Actions</h3></div> <div class="flex flex-row w-full justify-start"><div class="mx-2 w-28 h-28 flex items-center justify-center rounded-lg bg-[#99ef5e]">`;
  AddNewProject($$payload, { role });
  $$payload.out += `<!----></div> <div class="mx-2 w-28 h-28 flex items-center justify-center rounded-lg bg-[#99ef5e]">`;
  SendMail($$payload, { role });
  $$payload.out += `<!----></div></div></div>`;
  pop();
}
function RequestCard($$payload, $$props) {
  push();
  let companyName = fallback($$props["companyName"], "Web Projects");
  let courseType = fallback($$props["courseType"], "Applied Projects");
  let matchDate = fallback($$props["matchDate"], "Oct 15, 2024");
  let staffName = fallback($$props["staffName"], "Sarah Chen");
  let timeline = fallback($$props["timeline"], "3 months");
  let status = fallback($$props["status"], "matched");
  getContext("auth");
  $$payload.out += `<div class="w-64 h-64 rounded-2xl border border-[#ece7cf] bg-[#ece7cf] shadow-sm hover:shadow-md transition-shadow"><div class="p-6 h-full flex flex-col justify-between"><div><div class="flex items-center justify-between mb-4"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] text-gray-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> <span class="font-medium text-gray-900">${escape_html(companyName)}</span></div></div> <div class="flex items-center text-gray-500 mb-4"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> <span class="text-sm">${escape_html(matchDate)}</span></div></div> <div class="space-y-4"><div class="flex items-center justify-between"><span class="text-sm text-gray-600">${escape_html(courseType)}</span></div> <div class="border-t border-gray-100"></div></div> <div class="space-y-2"><div class="flex items-center justify-between text-sm text-gray-600"><span class="font-medium">Course:</span> <span>${escape_html(courseType)}</span></div> <div class="flex items-center justify-between text-sm text-gray-600"><span class="font-medium">Staff:</span> <span>${escape_html(staffName)}</span></div></div></div></div>`;
  bind_props($$props, {
    companyName,
    courseType,
    matchDate,
    staffName,
    timeline,
    status
  });
  pop();
}
function UserCard($$payload, $$props) {
  push();
  const authContext = getContext("auth");
  const { role, user } = authContext;
  const firstname = user.email.slice(0, 3);
  const mail = user.email;
  const id = user.uid.slice(0, 5);
  console.log(id);
  $$payload.out += `<div class="max-w-sm rounded-lg border border-gray-200 shadow-lg bg-white item-3 svelte-1ytdwxt"><div class="flex p-4 space-x-4"><div class="flex flex-col justify-center space-y-2"><h2 class="text-xl font-semibold text-[#0d3d2f]-100">${escape_html(firstname)}</h2> <p class="text-sm text-gray-500">${escape_html(mail)}</p> <p class="text-sm text-gray-500">+123 456 7890</p></div></div> <div class="px-4 py-2 border-t border-gray-200"><div class="text-xs text-gray-500">ID: ${escape_html(id)}</div> <div class="text-xs text-gray-500">Last Login: 01/01/2024</div> <div class="text-xs text-gray-500">Term: 01/01/2025</div></div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const authContext = getContext("auth");
  const { role, user } = authContext;
  const firstname = user.email.slice(0, 3);
  console.log(user);
  const isAdmin = role === "admin";
  $$payload.out += `<section class="mx-auto h-full max-w-7xl overflow-scroll bg-[#00703C] px-4 py-6 sm:px-6 lg:px-8 svelte-j3l0x9" id="greenbox"><div class="rounded-lg bg-[#00703C] p-6"><h1 class="mb-4 text-2xl font-bold text-white md:text-3xl">Welcome Home ${escape_html(firstname)}</h1> <div class="gap-4 home-items h-80 svelte-j3l0x9">`;
  if (role !== "admin") {
    $$payload.out += "<!--[-->";
    QuickActions($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  UserCard($$payload);
  $$payload.out += `<!----></div> `;
  if (!isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="mt-8 flex flex-col"><h2 class="mb-4 text-2xl font-bold text-white">My Interests</h2> <div class="items-left flex"><div id="carousel" class="flex flex-wrap gap-4">`;
    RequestCard($$payload, {});
    $$payload.out += `<!----></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="mt-8 flex flex-col"><h2 class="mb-4 text-2xl font-bold text-white">Pending Requests</h2> <div class="carousel-container relative w-full overflow-hidden flex justify-between"><button class="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"><svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg></button> <div id="carousel" class="carousel flex transition-transform duration-300 ease-in-out">`;
    RequestCard($$payload, {});
    $$payload.out += `<!----></div> <button class="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"><svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg></button></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}
export {
  _page as default
};
