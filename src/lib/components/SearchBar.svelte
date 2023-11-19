<script>
	import { createEventDispatcher } from 'svelte';

	export let value;

	const dispatch = createEventDispatcher();

	const handleOnChange = (e) => {
		dispatch('input', e.target.value);
	};
</script>

<div class="relative">
	<input
		type="text"
		class="py-3 px-6 text-base placeholder-shown:text-gray-500 font-semibold rounded-full w-full shadow focus:outline-none active:outline-none focus:shadow-lg transition-all duration-200 pr-24"
		placeholder="Search icons"
		bind:value
		on:input={handleOnChange}
	/>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="-2.5 -2.5 24 24"
		width="26"
		fill="currentColor"
		class="absolute top-2.5 right-4 text-gray-400"
	>
		<path
			d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"
		/>
	</svg>
</div>
