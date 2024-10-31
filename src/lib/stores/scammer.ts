import { writable } from 'svelte/store';
import { type FbDataSchema } from '../../routes/schema';

export interface ScammerStoreModel {
	data: FbDataSchema[];
	filtered: FbDataSchema[];
	search: string;
}

export const createScammerStore = (scammer: FbDataSchema[]) => {
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
