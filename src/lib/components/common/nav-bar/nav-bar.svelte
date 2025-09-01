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
	import NavBarData from '$lib/data/nav-bar';
	import { href } from '$lib/utils';
	import { mode, toggleMode } from 'mode-watcher';
	let isDarkMode = $derived($mode === 'dark');
</script>

<!-- Taller & roomier on mobile; desktop unchanged -->
<div
	class="border-1 fixed left-2 right-2 top-3 z-10 flex
         h-14 flex-row
         items-center rounded-lg border bg-[--bg]
         px-4 shadow-md backdrop-blur-xl
         sm:left-8 sm:right-8 sm:top-4 sm:h-[70px] sm:px-8"
	style="--bg: hsl(var(--background) / 0.9)"
>
	<!-- Logo/Home icon -->
	<div class="flex-none md:flex-1">
		<!-- Bigger text & icon on mobile -->
		<a href={href('/')} class="flex flex-row items-center justify-start text-xl sm:text-2xl">
			<Icon icon={NavBarData.left.icon} className="text-2xl sm:text-3xl" />
			<!-- Keep title hidden on small, show from md+ -->
			<H4 className="hidden md:ml-3 md:block md:text-2xl">{NavBarData.left.title}</H4>
		</a>
	</div>

	<!-- Main navigation items - desktop -->
	<div class="hidden flex-1 flex-row items-center justify-center gap-2 sm:flex">
		{#each [...NavBarData.primaryItems, ...NavBarData.secondaryItems] as item}
			<a href={href(item.href)}>
				<Button class="flex flex-row items-center justify-center gap-2" variant="ghost">
					<span class="text-sm md:text-base">{item.title}</span>
				</Button>
			</a>
		{/each}
	</div>

	<!-- Desktop right controls -->
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

	<!-- Mobile navigation -->
	<div class="flex flex-1 items-center justify-center px-1 sm:hidden">
		<!-- Primary items for mobile -->
		<div class="flex flex-row items-center justify-center gap-4">
			{#each NavBarData.primaryItems as item}
				<a href={href(item.href)}>
					<Button size="sm" variant="ghost" class="h-9 min-w-0 px-2 py-0">
						<span class="text-base font-medium">{item.title}</span>
					</Button>
				</a>
			{/each}
		</div>
	</div>

	<!-- Mobile right controls including hamburger menu -->
	<div class="ml-1 flex flex-none items-center justify-end gap-1 pl-1 sm:hidden">
		<Dialog>
			<Tooltip>
				<TooltipTrigger>
					<DialogTrigger>
						<Button size="sm" variant="ghost" class="h-9 min-w-0 px-2 py-0">
							<Icon icon="i-carbon-menu" className="text-xl" />
						</Button>
					</DialogTrigger>
				</TooltipTrigger>
				<TooltipContent>More</TooltipContent>
			</Tooltip>

			<DialogContent class="p-4 text-center">
				<H4 class="mb-2">More</H4>
				<Separator />
				<div class="flex flex-col items-center gap-2 py-2">
					{#each NavBarData.secondaryItems as item}
						<DialogClose>
							<a href={href(item.href)} class="w-full">
								<Button variant="ghost" class="w-full justify-start text-sm">
									<Icon icon={item.icon} className="mr-2" />
									{item.title}
								</Button>
							</a>
						</DialogClose>
					{/each}
				</div>
				<DialogFooter>
					<DialogClose>
						<Button variant="secondary" size="sm">Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>

		<!-- Theme toggle button -->
		<Button size="sm" variant="ghost" class="h-9 min-w-0 p-2" on:click={toggleMode}>
			<Icon icon={isDarkMode ? 'i-carbon-moon' : 'i-carbon-sun'} className="text-xl" />
		</Button>
	</div>
</div>

<!--
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
	import NavBarData from '$lib/data/nav-bar';
	import { href } from '$lib/utils';
	import { mode, toggleMode } from 'mode-watcher';
	let isDarkMode = $derived($mode === 'dark');
</script>

<div
	class="border-1 fixed left-2 right-2 top-5 z-10 flex h-[48px] flex-row items-center rounded-lg border bg-[--bg] px-3 shadow-md backdrop-blur-xl sm:left-8 sm:right-8 sm:top-4 sm:h-[70px] sm:px-8"
	style="--bg: hsl(var(--background) / 0.9)"
>
	<!-- Logo/Home icon 
	<div class="flex-none md:flex-1">
		<a href={href('/')} class="flex flex-row items-center justify-start text-lg sm:text-2xl">
			<Icon icon={NavBarData.left.icon} />
			<H4 className="hidden md:ml-3 md:block">{NavBarData.left.title}</H4>
		</a>
	</div>

	<!-- Main navigation items - desktop 
	<div class="hidden flex-1 flex-row items-center justify-center gap-2 sm:flex">
		{#each [...NavBarData.primaryItems, ...NavBarData.secondaryItems] as item}
			<a href={href(item.href)}>
				<Button class="flex flex-row items-center justify-center gap-2" variant="ghost">
					<span class="text-sm md:text-base">{item.title}</span>
				</Button>
			</a>
		{/each}
	</div>

	<!-- Desktop right controls 
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

	<!-- Mobile navigation 
	<div class="flex flex-1 items-center justify-center px-1 sm:hidden">
		<!-- Primary items for mobile 
		<div class="flex flex-row items-center justify-center gap-5">
			{#each NavBarData.primaryItems as item}
				<a href={href(item.href)}>
					<Button size="sm" variant="ghost" class="h-8 min-w-0 px-1 py-0">
						<span class="text-2xs">{item.title}</span>
					</Button>
				</a>
			{/each}
		</div>
	</div>

	<!-- Mobile right controls including hamburger menu 
	<div class="ml-1 flex flex-none items-center justify-end gap-1 pl-1 sm:hidden">
		<Dialog>
			<Tooltip>
				<TooltipTrigger>
					<DialogTrigger>
						<Button size="sm" variant="ghost" class="h-8 min-w-0 px-1 py-0">
							<Icon icon="i-carbon-menu" className="text-base" />
						</Button>
					</DialogTrigger>
				</TooltipTrigger>
				<TooltipContent>More</TooltipContent>
			</Tooltip>

			<DialogContent class="p-4 text-center">
				<H4 class="mb-2">More</H4>
				<Separator />
				<div class="flex flex-col items-center gap-2 py-2">
					{#each NavBarData.secondaryItems as item}
						<DialogClose>
							<a href={href(item.href)} class="w-full">
								<Button variant="ghost" class="w-full justify-start text-sm">
									<Icon icon={item.icon} className="mr-2" />
									{item.title}
								</Button>
							</a>
						</DialogClose>
					{/each}
				</div>
				<DialogFooter>
					<DialogClose>
						<Button variant="secondary" size="sm">Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>

		<!-- Theme toggle button 
		<Button size="sm" variant="ghost" class="h-8 min-w-0 p-1" on:click={toggleMode}>
			<Icon icon={isDarkMode ? 'i-carbon-moon' : 'i-carbon-sun'} className="text-base" />
		</Button>
	</div>
</div>

<style>
	/* Extra small text for mobile */
	.text-2xs {
		font-size: 0.8rem;
	}
</style>
-->

<style>
	/* You can delete this if you switch to Tailwind's text-xs above */
	.text-2xs {
		font-size: 0.8rem;
	}
</style>
