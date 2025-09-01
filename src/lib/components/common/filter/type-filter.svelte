<script lang="ts">
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Toggle from '$lib/components/ui/toggle/toggle.svelte';

	export let types: string[] = [];
	export let selectedTypes: string[] = [];

	function toggleType(type: string) {
		if (selectedTypes.includes(type)) {
			selectedTypes = selectedTypes.filter((t) => t !== type);
		} else {
			selectedTypes = [...selectedTypes, type];
		}
	}
</script>

<div class="mb-4">
	<h3 class="mb-2 text-sm font-medium">FILTER BY TYPE</h3>
	<div class="flex flex-row flex-wrap gap-2">
		{#each types as type (type)}
			<Toggle
				pressed={selectedTypes.includes(type)}
				variant="outline"
				class="flex flex-row items-center gap-2 rounded-lg"
				on:click={() => toggleType(type)}
			>
				{#if selectedTypes.includes(type)}
					<Icon icon="i-carbon-close" />
				{/if}
				{type}
			</Toggle>
		{/each}
	</div>
</div>
