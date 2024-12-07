import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { I as InfoModal } from "../../../../chunks/InfoModal.js";
function _page($$payload) {
  let showModal = false;
  function closeModal() {
    showModal = false;
  }
  let message = "";
  let subject = "";
  InfoModal($$payload, {
    title: "Your message has been sent",
    message: "Your message has been sent to the department of Applied Research",
    isOpen: showModal,
    closeModal
  });
  $$payload.out += `<!----> <div class="mx-auto h-full max-w-7xl bg-[#00703C] px-4 py-6 sm:px-6 lg:px-8 boxy svelte-1qmsfo6"><div class="mx-auto max-w-7xl bg-white px-4 py-6 sm:px-6 lg:px-8"><div><h1 class="mb-4 text-4xl font-bold">Message</h1> <hr class="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"> <p>Communicate with the Applied Research Department</p></div> <div><form><div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"><div class="col-span-full"><label for="subject">Subject</label> <div class="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"><input type="text" name="subject" id="subject" class="block flex-auto rounded-md border-0 bg-neutral-100 py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"${attr("value", subject)}></div></div> <div class="col-span-full"><label for="message">Message</label> <div class="mt-2"><textarea id="about" name="message" rows="3" class="text-black-900 block w-full rounded-md border-0 bg-neutral-100 py-1.5 pl-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">`;
  const $$body = escape_html(message);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div></div> <div class="col-span-full"><button class="get-started-btn ml-auto flex rounded bg-[#EAC117] px-6 py-3 text-white">Submit</button></div></div></form></div></div></div>`;
}
export {
  _page as default
};
