<script lang="ts">
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import HighlightCard from '$lib/components/highlights/highlight-card.svelte';
	import HighlightsData from '$lib/data/highlights';

	let search = $state('');
	const onSearch = (q: string) => (search = q);

	let result = $derived(
		HighlightsData.items.filter((h) => {
			const q = search.trim().toLowerCase();
			return q.length === 0 || h.name.toLowerCase().includes(q);
		})
	);

	// order: Extra-curricular → Certifications → Volunteering
	const activities = $derived(result.filter((r) => r.kind === 'extracurricular'));
	const certifications = $derived(result.filter((r) => r.kind === 'certification'));
	const volunteering = $derived(result.filter((r) => r.kind === 'volunteering'));
</script>

<SearchPage title={HighlightsData.title} {onSearch}>
	<div class="flex flex-1 flex-col gap-5">
		{#if result.length === 0}
			<EmptyResult />
		{:else}
			{#if activities.length}
				<h2 class="px-1 text-xl font-semibold tracking-tight text-foreground/80">Extra-Curricular Activities</h2>
				<div class="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each activities as it (it.slug)}
						<HighlightCard item={it} />
					{/each}
				</div>
			{/if}

			{#if certifications.length}
				<h2 class="mt-4 px-1 text-xl font-semibold tracking-tight text-foreground/80">Certifications</h2>
				<div class="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each certifications as it (it.slug)}
						<HighlightCard item={it} />
					{/each}
				</div>
			{/if}

			{#if volunteering.length}
				<h2 class="mt-4 px-1 text-xl font-semibold tracking-tight text-foreground/80">Volunteering</h2>
				<div class="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each volunteering as it (it.slug)}
						<HighlightCard item={it} />
					{/each}
				</div>
			{/if}
		{/if}
	</div>
</SearchPage>
