import { writable } from "svelte/store";

export const previousUrl = writable(null);
export const currentUrl = writable(null);
