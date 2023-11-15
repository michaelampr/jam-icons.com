<script>
	import AppFooter from '$lib/components/AppFooter.svelte';
	import AppHeader from '$lib/components/AppHeader.svelte';
	import '../app.css';
</script>

<div class="bg-yellow-500 min-h-screen">
	<div class="max-w-4xl mx-auto px-5">
		<AppHeader />
		<slot />
		<AppFooter />
	</div>
</div>
