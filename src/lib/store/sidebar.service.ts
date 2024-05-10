export class SideBarService {
	public isOpened: boolean = false;
}

import { writable } from 'svelte/store';

function createSideBarService() {
	const sidebar = new SideBarService();
	const { subscribe, update, set } = writable(sidebar);
	return {
		subscribe,
		update,
		set
	};
}

export const sidebar = createSideBarService();
