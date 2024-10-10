<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { ExternalLink } from 'lucide-svelte';
	import { MapPin } from 'lucide-svelte';

	export let data: PageData;
	const { scammerDetails }: { scammerDetails: ScammerList } = data;

	console.log(scammerDetails);
</script>

<div
	class="grid h-fit w-full grid-cols-1 flex-col place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3"
>
	{#each scammerDetails as scammer}
		<Card.Root class="w-full max-w-sm">
			<Card.Content>
				<div class="text-xl font-semibold">{scammer.name}</div>
				<div class="opacity-75">{scammer.orgName}</div>
				<div class="flex items-center gap-2">
					<MapPin size={20} class="opacity-75" />
					<p class="mt-2">{scammer.address}</p>
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
