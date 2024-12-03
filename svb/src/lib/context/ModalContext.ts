import { writable } from 'svelte/store';

let isModalOpen = false
export const modalStore = writable(isModalOpen)