import { writable } from "svelte/store"
let isModalOpen = false


export let modalStore = writable(isModalOpen)
