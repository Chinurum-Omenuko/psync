import { s as store_get, u as unsubscribe_stores, p as pop, a as push, g as getContext, e as ensure_array_like, c as stringify } from "../../../../chunks/index3.js";
import { a as authStore } from "../../../../chunks/store.svelte.js";
import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function CourseModal($$payload, $$props) {
  push();
  var $$store_subs;
  const auth = store_get($$store_subs ??= {}, "$authStore", authStore);
  console.log(`my current role is ${auth.user?.role}`);
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
const mockCourses = [
  {
    code: "MTM6404",
    program: "Interactive Media Design",
    schoolDepartment: "School of Media and Communication",
    level: 5,
    summary: "Learn the fundamentals of interactive media design, including graphic design, web development, and animation.",
    skills: "Graphic design, web development, animation, user experience (UX) design, user interface (UI) design, digital video and motion graphics.",
    term: "Fall",
    duration: "1 semester",
    staff: "John Smith"
  },
  {
    code: "MTM6405",
    program: "Digital Media Production",
    schoolDepartment: "School of Media and Communication",
    level: 6,
    summary: "Learn the technical skills and principles of digital media production, including video production, audio production, and post-production.",
    skills: "Video production, audio production, post-production, editing, color correction, sound design, motion graphics.",
    term: "Spring",
    duration: "1 semester",
    staff: "Jane Doe"
  },
  {
    code: "MTM6406",
    program: "Media Studies",
    schoolDepartment: "School of Media and Communication",
    level: 4,
    summary: "Explore the social, cultural, and historical impact of media on society, including media literacy, media history, and media theory.",
    skills: "Media literacy, media history, media theory, critical thinking, research skills, communication skills.",
    term: "Fall",
    duration: "1 semester",
    staff: "Bob Johnson"
  },
  {
    code: "MTM6407",
    program: "Visual Effects",
    schoolDepartment: "School of Media and Communication",
    level: 8,
    summary: "Learn the techniques and principles of visual effects in film, television, and other media, including compositing, motion tracking, and simulation.",
    skills: "Compositing, motion tracking, simulation, visual effects software, rendering, project management.",
    term: "Spring",
    duration: "1 semester",
    staff: "Alice Brown"
  },
  {
    code: "MTM6408",
    program: "Game Development",
    schoolDepartment: "School of Media and Communication",
    level: 9,
    summary: "Develop the skills and knowledge to create interactive games for various platforms, including game design, programming, and art.",
    skills: "Game design, programming, art, game engines, game physics, game mechanics.",
    term: "Fall",
    duration: "1 semester",
    staff: "Mike Davis"
  },
  {
    code: "MTM6409",
    program: "Animation",
    schoolDepartment: "School of Media and Communication",
    level: 7,
    summary: "Learn the principles and techniques of animation, including traditional animation, computer-generated imagery (CGI), and stop-motion.",
    skills: "Traditional animation, CGI, stop-motion, animation software, storytelling, character development.",
    term: "Spring",
    duration: "1 semester",
    staff: "Emily Chen"
  },
  {
    code: "MTM6410",
    program: "Film Production",
    schoolDepartment: "School of Media and Communication",
    level: 8,
    summary: "Learn the technical skills and principles of film production, including cinematography, editing, and sound design.",
    skills: "Cinematography, editing, sound design, film production software, project management, collaboration.",
    term: "Fall",
    duration: "1 semester",
    staff: "David Lee"
  },
  {
    code: "MTM6411",
    program: "Television Production",
    schoolDepartment: "School of Media and Communication",
    level: 6,
    summary: "Learn the technical skills and principles of television production, including studio production, field production, and post-production.",
    skills: "Studio production, field production, post-production, television production software, project management, collaboration.",
    term: "Spring",
    duration: "1 semester",
    staff: "Sarah Taylor"
  }
];
function _page($$payload, $$props) {
  push();
  const authContext = getContext("auth");
  const { user, role } = authContext;
  let isAdmin = role === "admin" || false;
  let courses = mockCourses;
  const each_array = ensure_array_like(courses);
  CourseModal($$payload);
  $$payload.out += `<!----> <div class="p-6 max-w-7xl mx-auto"><div class="mb-6"><h1 class="text-2xl font-bold">Courses</h1> <div class="flex items-center mt-4"${attr("style", isAdmin ? "" : "display: none;")}><a${attr("class", `${stringify("text-black font-bold")} relative mr-4 cursor-pointer`)}>Register</a> <a${attr("class", `${stringify("text-gray-400")} relative cursor-pointer`)}>Request</a></div></div> <div class="overflow-x-auto bg-white border border-gray-300 rounded-lg shadow"><table class="w-full text-left text-sm"><thead class="bg-gray-100 border-b border-gray-300"><tr><th class="py-2 px-4">Name</th><th class="py-2 px-4">Program</th><th class="py-2 px-4">School/Department</th><th class="py-2 px-4">Level</th><th class="py-2 px-4">Staff</th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let course = each_array[$$index];
    $$payload.out += `<tr class="cursor-pointer border-b hover:bg-gray-50"><td class="py-3 px-4">${escape_html(course.code ?? "")}</td><td class="py-3 px-4">${escape_html(course.program ?? "")}</td><td class="py-3 px-4">${escape_html(course.schoolDepartment ?? "")}</td><td class="py-3 px-4">${escape_html(course.level ?? "")}</td><td class="py-3 px-4">${escape_html(course.staff ?? "")}</td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div></div>`;
  pop();
}
export {
  _page as default
};
