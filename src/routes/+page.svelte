<script>
	import ChoiceButtons from '$lib/components/ChoiceButtons.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';

	const choices = ['All', 'Web', 'Arrows', 'Player', 'Text', 'Social'];
	const types = ['Outline', 'Filled', 'All'];

	let activeType = 'Outline';
	let activeChoice = 'All';
</script>

<header class="max-w-2xl mx-auto space-y-3">
	<SearchBar />
	<section class="flex justify-between">
		<ChoiceButtons bind:value={activeChoice} {choices} />
		<ChoiceButtons bind:value={activeType} choices={types} />
	</section>
</header>

<main class="grid grid-cols-4 gap-6 max-w-2xl mx-auto my-12">
	<Icon />
	<Icon />
	<Icon />
	<Icon />
	<Icon />
	<Icon />
	<Icon />
	<Icon />
</main>
