<script lang="ts">
	import '@fontsource-variable/rethink-sans';
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';
	import { resetMode, setMode } from 'mode-watcher';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
</script>

<nav
	class="fixed z-40 flex h-14 w-full items-center justify-between border-b-2 border-opacity-85 bg-background bg-opacity-75 px-3 backdrop-blur-md md:px-10"
>
	<a href="/" class="flex items-center gap-3">
		<img
			class="h-8 rounded-full border-2 border-primary"
			src="/favicon.svg"
			alt="scammer list icon"
		/>
		<div class="text-2xl font-semibold tracking-tight">Scammer Patrol</div>
	</a>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			<Button builders={[builder]} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end">
			<DropdownMenu.Item on:click={() => setMode('light')}>Light</DropdownMenu.Item>
			<DropdownMenu.Item on:click={() => setMode('dark')}>Dark</DropdownMenu.Item>
			<DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</nav>
<div class="flex min-h-dvh w-full justify-center px-3 pb-10 pt-20 md:px-10">
	<ModeWatcher />
	<slot></slot>
</div>

<style>
	:global(body) {
		font-family: 'Rethink Sans Variable', sans-serif;
	}
</style>
