<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Tooltip, TooltipTrigger } from '$lib/components/ui/tooltip';
	import TooltipContent from '$lib/components/ui/tooltip/tooltip-content.svelte';
	import H4 from '$lib/components/ui/typography/h4.svelte';
	import BaseData from '$lib/data/base';
	import NavBarData from '$lib/data/nav-bar';
	import { href } from '$lib/utils';
	import { mode, toggleMode } from 'mode-watcher';

	let isDarkMode = $derived($mode === 'dark');
</script>

<div
	class="border-1 fixed left-1 right-1 top-1 z-10 flex h-[48px] flex-row items-center rounded-lg border bg-[--bg] px-3 shadow-md backdrop-blur-xl sm:left-8 sm:right-8 sm:top-4 sm:h-[70px] sm:px-8"
	style="--bg : hsl(var(--background) / 0.9)"
>
	<!-- Logo/Home icon - visible on all screens, name only on desktop -->
	<div class="flex-none md:flex-1">
		<a href={href('/')} class="flex flex-row items-center justify-start text-lg sm:text-2xl">
			<Icon icon={NavBarData.left.icon} />
			<H4 className="hidden md:ml-3 md:block">{NavBarData.left.title}</H4>
		</a>
	</div>

	<!-- Main navigation items - text for all screen sizes -->
	<div class="hidden flex-1 flex-row items-center justify-center gap-2 sm:flex">
		{#each NavBarData.items as item}
			<a href={href(item.href)}>
				<Button class="flex flex-row items-center justify-center gap-2" variant="ghost">
					<span class="text-sm md:text-base">{item.title}</span>
				</Button>
			</a>
		{/each}
	</div>

	<!-- Desktop and tablet right controls -->
	<div class="hidden flex-row items-center justify-end gap-2 sm:flex sm:flex-1">
		<a href={href('/search')}>
			<Button variant="ghost" class="text-xl">
				<Icon icon="i-carbon-search" />
			</Button>
		</a>
		<Button variant="ghost" class="text-xl" on:click={toggleMode}>
			<Icon icon={isDarkMode ? 'i-carbon-moon' : 'i-carbon-sun'} />
		</Button>
	</div>

	<!-- Mobile navigation items - smaller text labels -->
	<div class="flex flex-1 items-center justify-center px-1 sm:hidden">
		<div class="flex flex-row items-center justify-center gap-0">
			{#each NavBarData.items as item}
				<a href={href(item.href)}>
					<Button size="sm" variant="ghost" class="h-8 min-w-0 px-1 py-0">
						<span class="text-2xs">{item.title}</span>
					</Button>
				</a>
			{/each}
		</div>
	</div>

	<!-- Mobile right controls -->
	<div class="ml-1 flex flex-none items-center justify-end pl-1 sm:hidden">
		<Button size="sm" variant="ghost" class="h-8 min-w-0 p-1" on:click={toggleMode}>
			<Icon icon={isDarkMode ? 'i-carbon-moon' : 'i-carbon-sun'} className="text-base" />
		</Button>
	</div>
</div>

<style>
	/* Extra small text for mobile */
	.text-2xs {
		font-size: 0.55rem;
	}
</style>
