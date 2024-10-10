import type { PageLoad } from './$types';

const dummyData: ScammerList = [
	{
		id: 'ggg-d32',
		name: 'John Doe',
		orgName: 'Acme Corp',
		address: 'Some where, Mumbai, India',
		description: 'detail about the event that happened'
	},
	{
		id: 'ggg-475',
		name: 'Doe Joe',
		orgName: 'Mace Corp',
		address: 'AG Road, Delhi, India',
		description: 'detail about  some more of the not the event that happened'
	},
	{
		id: 'ggg-d87',
		name: 'John Doe',
		orgName: 'Acme Corp',
		address: 'Some where, Mumbai, India',
		description: 'detail about the event that happened'
	},
	{
		id: 'ggg-27',
		name: 'Doe Joe',
		orgName: 'Mace Corp',
		address: 'AG Road, Delhi, India',
		description: 'detail about  some more of the not the event that happened'
	}
];

export const load: PageLoad = () => {
	return {
		scammerDetails: dummyData
	};
};
