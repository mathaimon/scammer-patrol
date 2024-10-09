<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<Card.Root class="h-fit w-full max-w-xl">
	<Card.Header>
		<Card.Title class="text-2xl">Report New Scammer</Card.Title>
		<Card.Description>Add details about the scammer</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="flex w-full flex-col justify-center gap-4">
				<div class="flex flex-col space-y-1.5">
					<Label for="name">Name</Label>
					<Input id="name" placeholder="Name of the contact person" />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="organisation">Organisation</Label>
					<Input id="organisation" placeholder="Name of the organisation" />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="address1">Address</Label>
					<Input id="address1" placeholder="Address Line 1" />
					<Input placeholder="Address Line 2" />
					<Input placeholder="Country" />
					<Input placeholder="Pincode" />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="phone">Phone number</Label>
					<div class="flex items-center gap-1">
						<p class="text-xl">+</p>
						<Input
							type="number"
							placeholder="000"
							class="w-14 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
						/>
						<Input
							id="phone"
							type="number"
							placeholder="Phone number"
							class="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
						/>
					</div>
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="Email of the individual or organisation" />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="description">Description</Label>
					<Textarea id="description" placeholder="Brief description of the issue" rows={8} />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="image">Image</Label>
					<Input id="image" type="file" />
				</div>
			</div>
		</form>
	</Card.Content>
	<Card.Footer class="flex w-full flex-col items-center">
		<div class="items-top flex space-x-2">
			<Checkbox id="terms1" />
			<div class="grid gap-1.5 leading-none">
				<Label
					for="terms1"
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Accept terms and conditions
				</Label>
				<p class="flex flex-col gap-1 text-sm text-muted-foreground">
					By submitting information to this platform, I/We hereby affirm that the information
					provided is accurate and truthful to the best of my/our knowledge. I/We acknowledge the
					following conditions:
					<span>
						<span class="font-semibold">Accuracy of Information:</span> The information submitted is
						based on personal knowledge and is believed to be correct at the time of submission.
					</span>
					<span>
						<span class="font-semibold">No Harmful Intent:</span> I/We do not intend to harm, defame,
						or disparage any individual, group, or organization by providing this information.
					</span>
					<span>
						<span class="font-semibold">Responsible Use:</span> I/We agree that the platform will not
						be used for malicious purposes, including defacement, harassment, or targeting of any person
						or entity.
					</span>
					<span>
						<span class="font-semibold">Compliance:</span> I/We understand that failure to comply with
						these terms may result in the removal of the content provided, suspension of access to the
						platform, or other actions deemed necessary by the platform administrators.
					</span>
					<span class="font-semibold"
						>By using this platform, I/We agree to abide by these terms and conditions.</span
					>
				</p>
			</div>
		</div>

		<Button class="mt-4 w-full">Submit</Button>
	</Card.Footer>
</Card.Root>
