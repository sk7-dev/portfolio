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
	<div class="flex flex-1 flex-col gap-8">
		{#if result.length === 0}
			<EmptyResult />
		{:else}
			{#if activities.length}
				<h2 class="px-1 text-2xl font-semibold">EXTRA-CURRICULAR ACTIVITIES</h2>
				<div
					class="grid grid-cols-1 items-stretch gap-4 [grid-auto-rows:minmax(0,1fr)] md:grid-cols-2 lg:grid-cols-3"
				>
					{#each activities as it (it.slug)}
						<div class="h-full"><HighlightCard item={it} /></div>
					{/each}
				</div>
			{/if}

			{#if certifications.length}
				<h2 class="mt-6 px-1 text-2xl font-semibold">CERTIFICATIONS</h2>
				<div
					class="grid grid-cols-1 items-stretch gap-4 [grid-auto-rows:minmax(0,1fr)] md:grid-cols-2 lg:grid-cols-3"
				>
					{#each certifications as it (it.slug)}
						<div class="h-full"><HighlightCard item={it} /></div>
					{/each}
				</div>
			{/if}

			{#if volunteering.length}
				<h2 class="mt-6 px-1 text-2xl font-semibold">VOLUNTEERING</h2>
				<div
					class="grid grid-cols-1 items-stretch gap-4 [grid-auto-rows:minmax(0,1fr)] md:grid-cols-2 lg:grid-cols-3"
				>
					{#each volunteering as it (it.slug)}
						<div class="h-full"><HighlightCard item={it} /></div>
					{/each}
				</div>
			{/if}
		{/if}
	</div>
</SearchPage>
