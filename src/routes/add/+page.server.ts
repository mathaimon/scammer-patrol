import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '$lib/firebase/firebase';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		await addDoc(collection(db, 'scammers'), {
			...form.data,
			createdAt: serverTimestamp(),
			createdBy: 'anon'
		});
		return {
			form
		};
	}
};
