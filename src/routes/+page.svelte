<script lang="ts">
	import { createScammerStore, searchHandler } from '$lib/stores/scammer';
	import { onDestroy, onMount } from 'svelte';
	import { collection, getDocs } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase';
	import { fbDataSchema, type FbDataSchema } from './schema';

	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { ExternalLink } from 'lucide-svelte';
	import { MapPin, Phone } from 'lucide-svelte';
	import { Search } from 'lucide-svelte';

	let firebaseData: FbDataSchema[] = [];
	const scammerStore = createScammerStore(firebaseData);
	const unsubscribeStore = scammerStore.subscribe((model) => searchHandler(model));

	onMount(async () => {
		const querySnapshot = await getDocs(collection(db, 'scammers'));
		const loadedData: FbDataSchema[] = []; // Temporary array to hold data

		querySnapshot.forEach((doc) => {
			let data = doc.data();
			data = {
				...data,
				id: doc.id,
				createdAt: doc.data().createdAt.toDate(),
				searchTerms: `${data.name} ${data.orgName} ${data.addressLine1} ${data.addressLine2} ${data.country} ${data.phone} ${data.email}`
			};
			const parseResult = fbDataSchema.safeParse(data);
			if (parseResult.success) {
				console.log(parseResult.data);
				loadedData.push(parseResult.data); // Add validated data to temporary array
			} else {
				console.error(parseResult.error);
			}
		});

		// Assign loadedData to firebaseData in one go to trigger reactivity
		firebaseData = loadedData;
		scammerStore.set({ data: firebaseData, filtered: firebaseData, search: '' });
	});

	onDestroy(() => {
		unsubscribeStore();
	});
</script>

<div class="mx-auto w-full">
	<div class="mx-auto flex max-w-sm items-center px-2">
		<Search class="mr-3 text-primary" strokeWidth={3} />
		<Input
			class="rounded-full"
			placeholder="Search name, address, phone no. ..."
			bind:value={$scammerStore.search}
		/>
	</div>
	<div class="mx-auto mt-3 max-w-xs text-center text-sm text-muted-foreground">
		Got Scammed? <a class="font-semibold text-primary underline" href="/add">Expose the Fraudster</a
		> and Help Others Stay Safe!
	</div>
	<div
		class="mt-5 grid h-fit w-full grid-cols-1 flex-col place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3"
	>
		{#each $scammerStore.filtered as scammer}
			<Card.Root class="w-full max-w-sm">
				<Card.Content>
					<div class="text-xl font-semibold">{scammer.name}</div>
					<div class="opacity-75">{scammer.orgName}</div>
					<div class="flex items-center gap-2">
						<MapPin size={20} class="opacity-75" />
						<p class="mt-2">{scammer.addressLine1}, {scammer.addressLine2}, {scammer.country}</p>
					</div>
					<div class="flex items-center gap-2">
						<Phone size={20} class="opacity-75" />
						<p class="mt-2">+{scammer.phonePrefix} {scammer.phone}</p>
					</div>
				</Card.Content>
				<Card.Footer class="flex w-full justify-between">
					<Badge variant="default">Unpaid Dues</Badge>
					<Button class="gap-2 rounded-full" variant="secondary">
						<ExternalLink size={16} strokeWidth={2} /><span>Read More</span>
					</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</div>
