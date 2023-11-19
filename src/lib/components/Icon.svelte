<script>
	export let icon;

	let iconRef;
	let isCopied = false;

	const copyIcon = () => {
		isCopied = true;
		navigator.clipboard.writeText(iconRef.outerHTML);
	};

	$: if (isCopied) {
		setTimeout(() => {
			isCopied = false;
		}, 800);
	}

	const downloadIcon = () => {
		const blob = new Blob([iconRef.outerHTML]);
		const el = document.createElement('a');
		el.href = window.URL.createObjectURL(blob);
		el.download = `${icon.name}.svg`;
		el.click();
		el.remove();
	};
</script>

<div
	class="hover:bg-yellow-200 group relative h-24 transition-all duration-200 hover:shadow-lg rounded-3xl p-6 flex items-center justify-center bg-yellow-400/20"
>
	<div
		class="group-hover:opacity-100 transition-all duration-200 opacity-0 z-[1] absolute inset-0 p-2 grid gap-2"
	>
		<button
			on:click={copyIcon}
			disabled={isCopied}
			class="bg-yellow-400 rounded-xl text-sm font-semibold active:scale-95 transition-all duration-200 hover:bg-yellow-600"
		>
			{#if isCopied}
				Copied!
			{:else}
				Copy SVG
			{/if}
		</button>
		<button
			on:click={downloadIcon}
			class="bg-yellow-400 rounded-xl text-sm font-semibold active:scale-95 transition-all duration-200 hover:bg-yellow-600"
		>
			Download
		</button>
	</div>
	<div class="group-hover:opacity-50 transition-opacity duration-200">
		<svg
			bind:this={iconRef}
			xmlns="http://www.w3.org/2000/svg"
			viewBox={icon.viewBox}
			width={28}
			fill="currentColor"
		>
			{@html icon.path}
		</svg>
	</div>
</div>
