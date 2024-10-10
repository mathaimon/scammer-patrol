interface Scammer {
	id: string;
	name: string;
	orgName?: string;
	address?: string;
	phone?: number;
	email?: string;
	description: string;
}

type ScammerList = Scammer[];
