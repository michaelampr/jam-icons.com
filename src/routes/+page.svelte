<script>
	import ChoiceButtons from '$lib/components/ChoiceButtons.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import icons from '$lib/data/icons';
	import keywords from '$lib/data/keywords.json';

	const choices = ['All', 'Web', 'Arrows', 'Player', 'Text', 'Social'];
	const types = ['All', 'Outline', 'Filled'];

	let query = '';
	let activeType = 'All';
	let activeChoice = 'All';

	$: queriedIcons = (icon) => {
		if (!query) return icon;

		const normalizedIcon = icon.name.endsWith('-f') ? icon.name.slice(0, -2) : icon.name;
		const iconKeywords = keywords[normalizedIcon];

		if (iconKeywords) {
			const queryTokens = query
				.toLowerCase()
				.split(' ')
				.filter((token) => token.trim() !== '');

			return queryTokens.some(
				(token) =>
					iconKeywords.some((keyword) => token.startsWith(keyword) || keyword.startsWith(token)) ||
					normalizedIcon.includes(token)
			);
		}

		return false;
	};
	$: typedIcons = (icon) => {
		const typeMatches =
			activeType === 'All' ||
			(activeType === 'Outline' && icon.type === 'outline') ||
			(activeType === 'Filled' && icon.type === 'filled');

		return typeMatches
			? queriedIcons(icon)
			: ['text', 'social'].includes(icon.category) && queriedIcons(icon);
	};

	$: filteredIcons = icons.filter((icon) => {
		const categoryMatches = activeChoice === 'All' || activeChoice.toLowerCase() === icon.category;

		return categoryMatches && typedIcons(icon);
	});

	$: iconLabel = `${filteredIcons.length} icon${filteredIcons.length > 1 ? 's' : ''}`;
</script>

<svelte:head>
	<title>Over 940 Free & High-Quality Icons for Designers & Developers / Jam</title>
	<meta
		name="description"
		content="Discover Jam Icons, a comprehensive collection of over 940 meticulously crafted, free icons. Perfect for web designers, developers, and creatives for their projects."
	/>
</svelte:head>

<header class="max-w-2xl mx-auto space-y-3 pt-12 pb-6">
	<SearchBar bind:value={query} />
	<section class="flex space-y-3 md:space-y-0 flex-col md:flex-row justify-between">
		<ChoiceButtons bind:value={activeChoice} {choices} />
		<ChoiceButtons bind:value={activeType} choices={types} />
	</section>
</header>

<main class="max-w-2xl mx-auto">
	<p class="font-semibold mt-6 text-sm text-black">{iconLabel}</p>
	<section class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 mb-12">
		{#each filteredIcons as icon}
			<Icon {icon} />
		{/each}
	</section>
</main>
