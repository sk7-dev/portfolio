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

<!-- Compact on mobile; desktop unchanged -->
<div
	class="fixed left-2 right-2 top-2 z-10 flex
         h-12 items-center rounded-lg border bg-[--bg]
         px-3 shadow-md backdrop-blur-xl
         sm:left-8 sm:right-8 sm:top-4 sm:h-[70px] sm:px-8"
	style="--bg: hsl(var(--background) / 0.9)"
>
	<!-- Brand  -->
	<div class="flex-none md:flex-1">
		<a href={href('/')} class="flex items-center text-lg sm:text-2xl">
			<Icon icon={NavBarData.left.icon} className="text-lg sm:text-3xl" />
			<H4 className="hidden md:ml-3 md:block md:text-2xl">
				{NavBarData.left.title}
			</H4>
		</a>
	</div>

	<!-- Desktop menu  -->
	<div class="hidden flex-1 items-center justify-center gap-2 sm:flex">
		{#each [...NavBarData.primaryItems, ...NavBarData.secondaryItems] as item}
			<a href={href(item.href)}>
				<Button class="flex items-center gap-2" variant="ghost">
					<span class="text-sm md:text-base">{item.title}</span>
				</Button>
			</a>
		{/each}
	</div>

	<!-- Desktop right controls  -->
	<div class="hidden items-center justify-end gap-2 sm:flex sm:flex-1">
		<!--
		<a href={href('/search')}>
			<Button variant="ghost" class="text-xl">
				<Icon icon="i-carbon-search" />
			</Button>
		</a> -->
		<Button variant="ghost" class="text-xl" on:click={toggleMode}>
			<Icon icon={isDarkMode ? 'i-carbon-moon' : 'i-carbon-sun'} />
		</Button>
	</div>

	<!-- Mobile primary menu  -->
	<div class="flex flex-1 items-center justify-center px-0 sm:hidden">
		<nav class="flex items-center justify-center gap-3 sm:gap-3">
			{#each NavBarData.primaryItems as item}
				<a href={href(item.href)}>
					<Button size="sm" variant="ghost" class="h-8 min-w-0 px-1.5 py-0 sm:h-8 sm:px-2">
						<span
							class="whitespace-nowrap text-[clamp(12px,3.6vw,16px)] leading-tight tracking-tight sm:text-base"
						>
							{item.title}
						</span>
					</Button>
				</a>
			{/each}
		</nav>
	</div>

	<!-- Mobile right controls  -->
	<div class="ml-1 flex flex-none items-center justify-end gap-1 pl-1 sm:hidden">
		<Dialog>
			<Tooltip>
				<TooltipTrigger>
					<DialogTrigger>
						<Button size="sm" variant="ghost" class="h-8 min-w-0 px-2 py-0">
							<Icon icon="i-carbon-menu" className="text-lg" />
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
		<!--
		<Button size="sm" variant="ghost" class="h-8 min-w-0 p-2" on:click={toggleMode}>
			<Icon icon={isDarkMode ? 'i-carbon-moon' : 'i-carbon-sun'} className="text-lg" />
		</Button> -->
	</div>
</div>
