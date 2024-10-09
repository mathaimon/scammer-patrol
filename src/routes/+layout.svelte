<script>
	import '@fontsource-variable/rethink-sans';
	import '../app.css';
</script>

<nav
	class="fixed z-40 flex h-14 w-full items-center border-b-2 border-opacity-85 bg-background bg-opacity-75 px-10 backdrop-blur-md"
>
	<div class="flex items-center gap-3">
		<img class="h-8" src="/favicon.svg" alt="scammer list icon" />
		<div class="text-2xl font-semibold tracking-tight">Scammer Patrol</div>
	</div>
</nav>
<div class="min-h-dvh px-10 pt-20">
	<slot></slot>
</div>

<style>
	:global(body) {
		font-family: 'Rethink Sans Variable', sans-serif;
	}
</style>
