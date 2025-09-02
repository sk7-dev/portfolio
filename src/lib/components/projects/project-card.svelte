<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Project } from '$lib/data/types';
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

	const { project }: { project: Project } = $props();
	const linkIcons: Record<string, `i-carbon-${string}`> = {
		GitHub: 'i-carbon-logo-github',
		'Tableau Public': 'i-carbon-chart-line',
		Presentation: 'i-carbon-document'
	};

	const getIcon = (label: string): `i-carbon-${string}` => linkIcons[label] || 'i-carbon-link';

	//let from = $derived(getMonthAndYear(project.period.from));
	//let to = $derived(getMonthAndYear(project.period.to));
	//let exactDuration = $derived(computeExactDuration(project.period.from, project.period.to));
	let from = $derived(getMonthAndYear(project.period.from));
	// Only compute `to` if it actually exists; otherwise leave `undefined`
	let hasEnd = $derived(!!project.period.to);
	let to = $derived(hasEnd ? getMonthAndYear(project.period.to as Date) : undefined);

	let exactDuration = $derived(computeExactDuration(project.period.from, project.period.to));
</script>

<FancyCard
	color={project.color}
	class="flex h-full flex-col"
	href={href(`/projects/${project.slug}`)}
>
	<CardHeader class="flex w-full flex-col gap-4">
		<Avatar>
			<AvatarFallback>
				<img src={Assets.Unknown.light} alt={project.name} />
			</AvatarFallback>
			<AvatarImage src={$mode === 'dark' ? project.logo.dark : project.logo.light} />
		</Avatar>
		<div class="flex w-full flex-row items-center gap-1 overflow-x-hidden">
			<CardTitle class="h-auto min-w-0 flex-1 overflow-x-hidden">
				<Tooltip>
					<TooltipTrigger
						class="w-full overflow-y-auto overflow-x-hidden truncate text-ellipsis text-nowrap text-left"
					>
						{project.name}
					</TooltipTrigger>
					<TooltipContent>{project.name}</TooltipContent>
				</Tooltip>
			</CardTitle>

			{#if project.links.length > 2}
				<ButtonLink link={project.links[0]} />
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button size="icon" variant="outline"
							><Icon icon="i-carbon-overflow-menu-vertical" /></Button
						>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{#each project.links.slice(1) as link (link.to)}
							<a href={link.to} target={'_blank'}>
								<DropdownMenuItem>
									{link.label}
								</DropdownMenuItem>
							</a>
						{/each}
					</DropdownMenuContent>
				</DropdownMenu>
			{:else}
				{#each project.links as link (link.to)}
					<a
						href={link.to}
						target="_blank"
						class="inline-flex items-center gap-2 rounded-md border border-gray-500 px-3 py-1 hover:bg-gray-700"
					>
						<Icon icon={getIcon(link.label)} />
						<!--<span>{link.label}</span>-->
					</a>
				{/each}
				<!--
				{#each project.links as link (link.to)}
					<ButtonLink {link} />
				{/each} -->
			{/if}
		</div>
		<Separator />
	</CardHeader>
	<!--	<CardContent class="flex flex-1 flex-col gap-4">
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-assembly-cluster" />
			<Muted>{project.type}</Muted>
		</Muted>
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-time" />
			<Muted>{exactDuration}</Muted>
		</Muted>
		<Muted className="py-4 md:py-2 md:min-h-[100px] md:max-h-[100px]"
			>{ellipsify(project.shortDescription, 100)}</Muted
		>
		<div class="flex w-full flex-row items-center justify-between">
			<Badge variant="outline">{from}</Badge>
			<Badge variant="outline">{to}</Badge>
		</div>
		<Separator />
		<!--
		<div class="flex flex-row flex-wrap items-center gap-2">
			{#each project.skills as skill (skill.slug)}
				<SkillBadge {skill} />
			{/each}
		</div>--
		<div class="flex flex-row flex-wrap items-center gap-2">
			{#each project.skills as skill (skill.slug)}
				<Badge variant="secondary" class="flex items-center gap-1">
					<!--	<img
						src={$mode === 'dark' ? skill.logo.dark : skill.logo.light}
						alt={skill.name}
						class="h-4 w-4 rounded-sm"
					/>--
					{skill.name}
				</Badge>
			{/each}
		</div>
	</CardContent>-->
	<CardContent class="flex flex-1 flex-col gap-4">
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-assembly-cluster" />
			<Muted>{project.type}</Muted>
		</Muted>
		<!--
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-time" />
			<Muted>{exactDuration}</Muted>
		</Muted>-->

		<Muted className="py-4 md:py-2 md:min-h-[100px] md:max-h-[100px]">
			{ellipsify(project.shortDescription, 100)}
		</Muted>

		<!-- Dates row: show only start; show end only if provided -->
		<div class="flex w-full flex-row items-center gap-2">
			<Badge variant="outline">{from}</Badge>
			{#if hasEnd}
				<span class="text-muted-foreground">–</span>
				<Badge variant="outline">{to}</Badge>
			{/if}
		</div>

		<Separator />

		<div class="flex flex-row flex-wrap items-center gap-2">
			{#each project.skills as skill (skill.slug)}
				<Badge variant="secondary" class="flex items-center gap-1">
					<!--	<img
						src={$mode === 'dark' ? skill.logo.dark : skill.logo.light}
						alt={skill.name}
						class="h-4 w-4 rounded-sm"
					/>-->
					{skill.name}
				</Badge>
			{/each}
		</div>
	</CardContent>
</FancyCard>
