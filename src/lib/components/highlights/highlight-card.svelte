<script lang="ts">
	import type { Highlight } from '$lib/data/types';
	import { getMonthAndYear } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { CardHeader } from '$lib/components/ui/card';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';

	const { item }: { item: Highlight } = $props();

	let from = $derived(item.period?.from ? getMonthAndYear(item.period.from) : undefined);
	let to = $derived(item.period?.to ? getMonthAndYear(item.period.to) : 'Present');
</script>

<FancyCard color={item.color} class="flex h-full flex-col">
	<CardHeader class="flex h-[148px] flex-row items-center gap-6 overflow-hidden p-4">
		<div class="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden">
			<img
				src={$mode === 'dark' ? item.logo.dark : item.logo.light}
				alt={item.name}
				class="max-h-full max-w-full object-contain"
			/>
		</div>

		<div class="flex min-w-0 flex-1 flex-col gap-2">
			<CardTitle
				class="text-lg leading-snug"
				style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;"
			>
				{item.name}
			</CardTitle>

			<div class="flex items-center gap-2 text-xs opacity-80">
				<Icon icon="i-carbon-information" className="h-4 w-4" />
				<span class="capitalize">{item.kind}</span>
			</div>

			<!--<div class="flex items-center gap-2 text-xs">
				<Icon icon="i-carbon-time" className="h-4 w-4" />
				<span>Period: {from} - {to}</span>-->
			{#if item.period?.from}
				<div class="flex items-center gap-2 text-xs">
					<Icon icon="i-carbon-time" className="h-4 w-4" />
					<span>Period: {from} - {to}</span>
				</div>
			{/if}
		</div>
	</CardHeader>

	<Separator />

	<CardContent class="mt-auto p-4 pt-3">
		{#if item.links?.length}
			<div class="flex flex-wrap gap-2">
				{#each item.links as link (link.to)}
					<a href={link.to} target="_blank" rel="noopener noreferrer">
						<Badge variant="outline">{link.label}</Badge>
					</a>
				{/each}
			</div>
		{/if}
	</CardContent>
</FancyCard>
