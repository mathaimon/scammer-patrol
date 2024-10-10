import { writable } from 'svelte/store';

export interface ScammerStoreModel {
	data: (Scammer & { searchTerms?: string })[];
	filtered: Scammer[];
	search: string;
}

export const createScammerStore = (scammer: Scammer[]) => {
	const { subscribe, set, update } = writable<ScammerStoreModel>({
		data: scammer,
		filtered: scammer,
		search: ''
	});
	return {
		subscribe,
		set,
		update
	};
};

export const searchHandler = (store: ScammerStoreModel) => {
	const searchTerm = store.search.toLowerCase() || '';
	store.filtered = store.data.filter((item) => {
		return item.searchTerms?.toLocaleLowerCase().includes(searchTerm);
	});
};
