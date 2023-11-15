<script>
	import { onMount, tick } from 'svelte';

	export let choices = [];
	export let value = '';

	let choicesWrapper;

	$: elWidth = 0;
	$: left = 0;

	const handleOnClick = async (choice) => {
		value = choice;
		await tick();
		updateActiveTabWidth();
	};

	const updateActiveTabWidth = () => {
		const activeButton = choicesWrapper.querySelector('.active');
		if (activeButton) {
			elWidth = activeButton.offsetWidth;
			left = activeButton.offsetLeft - 7;
		}
	};

	onMount(() => {
		updateActiveTabWidth();
	});
</script>

<div class="space-x-2 relative" bind:this={choicesWrapper}>
	{#each choices as choice}
		<button
			on:click={() => handleOnClick(choice)}
			class="{value === choice
				? ' text-white active'
				: 'text-black'} p-2.5 relative z-[1] font-semibold rounded-2xl text-sm leading-none duration-200 transition-all"
			>{choice}</button
		>
	{/each}
	{#if elWidth > 0}
		<div
			class="absolute top-0 left-0 h-full rounded-2xl bg-black duration-200 transition-all"
			style="width: {elWidth}px;left: {left}px"
		/>
	{/if}
</div>
