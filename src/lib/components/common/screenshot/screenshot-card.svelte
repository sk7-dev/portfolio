<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card, CardFooter } from '$lib/components/ui/card';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { Screenshot } from '$lib/data/types';

	const { item }: { item: Screenshot } = $props();
</script>

<Dialog>
	<DialogTrigger>
		<Card
			class="flex aspect-square flex-col justify-end bg-cover bg-center bg-no-repeat"
			style={`background-image: url("${item.src}")`}
		>
			<Separator />
			<CardFooter class="rounded-b-md bg-[#00000099] pt-4 text-white backdrop-blur-sm">
				{item.label}
			</CardFooter>
		</Card>
	</DialogTrigger>
	<DialogContent class="flex max-h-[90vh] max-w-[90vw] flex-col items-center justify-center p-4">
		<DialogTitle>{item.label}</DialogTitle>
		<div class="flex w-full flex-1 items-center justify-center overflow-auto">
			<img src={item.src} alt={item.label} class="max-h-[70vh] max-w-[70vw] object-contain" />
		</div>
		<DialogFooter>
			<DialogClose>
				<Button>Close</Button>
			</DialogClose>
		</DialogFooter>
	</DialogContent>
</Dialog>
