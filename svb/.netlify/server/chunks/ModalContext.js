import { w as writable } from "./index2.js";
let isModalOpen = false;
const modalStore = writable(isModalOpen);
export {
  modalStore as m
};
