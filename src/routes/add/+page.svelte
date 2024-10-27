<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { FilePlus, Trash2 } from 'lucide-svelte';
	import * as Form from '$lib/components/ui/form';
	import type { PageData } from './$types';
	import { formSchema } from './schema';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;

	const addUrlInput = () => {
		$formData.imageUrls = [...$formData.imageUrls, ''];
	};
	const removeUrlInput = (index: number) => {
		if ($formData.imageUrls.length > 1) {
			$formData.imageUrls = $formData.imageUrls.filter((_, i) => i !== index);
			console.log(`Removed Item Index: ${index}`);
		}
	};

	let acceptTerms: boolean = false;
</script>

<Card.Root class="h-fit w-full max-w-xl">
	<form method="POST" use:enhance>
		<Card.Header>
			<Card.Title class="text-2xl">Report New Scammer</Card.Title>
			<Card.Description>Add details about the scammer</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="flex w-full flex-col justify-center gap-2">
				<Form.Field {form} name="name">
					<Form.Control let:attrs>
						<Form.Label>Name</Form.Label>
						<Input
							{...attrs}
							bind:value={$formData.name}
							placeholder="Name of the contact person"
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="orgName">
					<Form.Control let:attrs>
						<Form.Label>Organisation</Form.Label>
						<Input
							{...attrs}
							bind:value={$formData.orgName}
							placeholder="Name of the organisation"
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<div>
					<Form.Field {form} name="addressLine1">
						<Form.Control let:attrs>
							<Form.Label>Address</Form.Label>
							<Input {...attrs} bind:value={$formData.addressLine1} placeholder="Address Line 1" />
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="addressLine2">
						<Form.Control let:attrs>
							<Input {...attrs} bind:value={$formData.addressLine2} placeholder="Address Line 2" />
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="country">
						<Form.Control let:attrs>
							<Input {...attrs} bind:value={$formData.country} placeholder="Country" />
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="pincode">
						<Form.Control let:attrs>
							<Input {...attrs} bind:value={$formData.pincode} placeholder="Pincode" />
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<Form.Field {form} name="phone">
					<Form.Control let:attrs>
						<Form.Label>Phone number</Form.Label>
						<div class="flex items-center gap-1">
							<p class="text-xl">+</p>
							<Input
								bind:value={$formData.phonePrefix}
								type="number"
								placeholder="000"
								class="w-14 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
							/>
							<Input
								{...attrs}
								bind:value={$formData.phone}
								type="number"
								placeholder="Phone number"
								class="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
							/>
						</div>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="email">
					<Form.Control let:attrs>
						<Form.Label>Email</Form.Label>
						<Input
							{...attrs}
							bind:value={$formData.email}
							placeholder="Email of the individual or organisation"
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="description">
					<Form.Control let:attrs>
						<Form.Label>Description</Form.Label>
						<Textarea
							{...attrs}
							bind:value={$formData.description}
							id="description"
							placeholder="Brief description of the issue"
							rows={8}
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Fieldset {form} name="imageUrls" class="flex flex-col">
					<Form.Legend>Image(s)</Form.Legend>
					{#each $formData.imageUrls as _, index}
						<Form.ElementField {form} name="imageUrls[{index}]">
							<Form.Control let:attrs>
								<Form.Label class="sr-only">URL {index + 1}</Form.Label>
								<div class="flex gap-2">
									<Input {...attrs} bind:value={$formData.imageUrls[index]} />
									<Button
										variant="secondaryDestructive"
										size="icon"
										on:click={() => removeUrlInput(index)}
										disabled={$formData.imageUrls.length === 1}><Trash2 class="size-4" /></Button
									>
								</div>
							</Form.Control>
							<Form.FieldErrors />
						</Form.ElementField>
					{/each}
					<Form.FieldErrors />
					<Button variant="secondary" class="mx-auto w-fit" on:click={addUrlInput}
						><FilePlus class="mr-2 size-4" />Add Image Url</Button
					>
				</Form.Fieldset>
			</div>
		</Card.Content>
		<Card.Footer class="flex w-full flex-col items-center">
			<div class="items-top flex space-x-2">
				<Checkbox id="terms1" bind:checked={acceptTerms} />
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
							these terms may result in the removal of the content provided, suspension of access to
							the platform, or other actions deemed necessary by the platform administrators.
						</span>
						<span class="font-semibold"
							>By using this platform, I/We agree to abide by these terms and conditions.</span
						>
					</p>
				</div>
			</div>
			<div class="mt-2 text-sm text-destructive {acceptTerms ? 'hidden' : ''}">
				Please Accept T&C to continue
			</div>
			<Form.Button class="mt-4 w-full" disabled={!acceptTerms}>Submit</Form.Button>
		</Card.Footer>
	</form>
</Card.Root>
