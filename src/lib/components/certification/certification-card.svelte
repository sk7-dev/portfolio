<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Certification } from '$lib/data/types';
	import { getMonthAndYear, href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import ButtonLink from '../common/button-link/button-link.svelte';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import Badge from '../ui/badge/badge.svelte';
	import CardContent from '../ui/card/card-content.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import Icon from '../ui/icon/icon.svelte';
	import Separator from '../ui/separator/separator.svelte';
	import { CardHeader } from '../ui/card';

	const { certification }: { certification: Certification } = $props();

	let from = $derived(getMonthAndYear(certification.period.from));
	let to = $derived(getMonthAndYear(certification.period.to));

	// Function to handle image error
	function handleImageError(event: Event) {
		const imgElement = event.target as HTMLImageElement;
		imgElement.src = Assets.Unknown.light;
	}
</script>

<FancyCard color={certification.color} class="flex h-full flex-col">
	<!-- href={href(`/certification/${certification.slug}`)} -->
	<CardHeader class="flex flex-row items-center gap-6 p-4">
		<div class="h-24 w-24 overflow-hidden">
			<img
				src={$mode === 'dark' ? certification.logo.dark : certification.logo.light}
				alt={certification.name}
				class="h-full w-full object-contain"
			/>
		</div>
		<div class="flex flex-col gap-2">
			<CardTitle class="text-lg">
				{certification.name}
			</CardTitle>
			<div class="flex items-center gap-2">
				<Icon icon="i-carbon-time" className="h-4 w-4" />
				<span class="text-xs">Valid: {from} - {to}</span>
			</div>
		</div>
	</CardHeader>
	<Separator />

	<CardContent class="p-4 pt-3">
		<!-- Container with flexbox for horizontal alignment -->
		<div class="flex items-center justify-between">
			<!-- Links section -->
			<div class="flex gap-2">
				{#if certification.links.length > 0}
					{#each certification.links as link (link.to)}
						<ButtonLink {link} />
					{/each}
				{/if}
			</div>

			<!-- Skills section -->
			<div class="flex flex-wrap gap-2">
				{#if certification.skills && certification.skills.length > 0}
					{#each certification.skills as skill (skill.slug)}
						<SkillBadge {skill} />
					{/each}
				{:else}{/if}
			</div>
		</div>
	</CardContent>
</FancyCard>

<!--

<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Certification } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import { mode } from 'mode-watcher';
	import ButtonLink from '../common/button-link/button-link.svelte';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import AvatarFallback from '../ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '../ui/avatar/avatar-image.svelte';
	import Avatar from '../ui/avatar/avatar.svelte';
	import Badge from '../ui/badge/badge.svelte';
	import Button from '../ui/button/button.svelte';
	import { CardHeader } from '../ui/card';
	import CardContent from '../ui/card/card-content.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '../ui/dropdown-menu';
	import Icon from '../ui/icon/icon.svelte';
	import Separator from '../ui/separator/separator.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';

	const { certification }: { certification: Certification } = $props();

	let from = $derived(getMonthAndYear(certification.period.from));
	let to = $derived(getMonthAndYear(certification.period.to));
	let exactDuration = $derived(
		computeExactDuration(certification.period.from, certification.period.to)
	);
</script>

<FancyCard
	color={certification.color}
	class="flex h-full flex-col"
	href={href(`/certification/${certification.slug}`)}
>
	<CardHeader class="flex w-full flex-col gap-4">
		<Avatar>
			<AvatarFallback>
				<img src={Assets.Unknown.light} alt={certification.name} />
			</AvatarFallback>
			<AvatarImage src={$mode === 'dark' ? certification.logo.dark : certification.logo.light} />
		</Avatar>
		<div class="flex w-full flex-row items-center gap-1 overflow-x-hidden">
			<CardTitle class="h-auto min-w-0 flex-1 overflow-x-hidden">
				<Tooltip>
					<TooltipTrigger
						class="w-full overflow-y-auto overflow-x-hidden truncate text-ellipsis text-nowrap text-left"
					>
						{certification.name}
					</TooltipTrigger>
					<TooltipContent>{certification.name}</TooltipContent>
				</Tooltip>
			</CardTitle>
			{#if certification.links.length > 2}
				<ButtonLink link={certification.links[0]} />
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button size="icon" variant="outline"
							><Icon icon="i-carbon-overflow-menu-vertical" /></Button
						>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{#each certification.links.slice(1) as link (link.to)}
							<a href={link.to} target={'_blank'}>
								<DropdownMenuItem>
									{link.label}
								</DropdownMenuItem>
							</a>
						{/each}
					</DropdownMenuContent>
				</DropdownMenu>
			{:else}
				{#each certification.links as link (link.to)}
					<ButtonLink {link} />
				{/each}
			{/if}
		</div>
		<Separator />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-4">
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-assembly-cluster" />
			<Muted>{certification.type}</Muted>
		</Muted>
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-time" />
			<Muted>{exactDuration}</Muted>
		</Muted>
		<Muted className="py-4 md:py-2 md:min-h-[100px] md:max-h-[100px]"
			>{ellipsify(certification.shortDescription, 100)}</Muted
		>
		<div class="flex w-full flex-row items-center justify-between">
			<Badge variant="outline">{from}</Badge>
			<Badge variant="outline">{to}</Badge>
		</div>
		<Separator />
		<div class="flex flex-row flex-wrap items-center gap-2">
			{#each certification.skills as skill (skill.slug)}
				<SkillBadge {skill} />
			{/each}
		</div>
	</CardContent>
</FancyCard>
-->
