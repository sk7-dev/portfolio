<script lang="ts">
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import BasePage from '../base-page/base-page.svelte';

	export let title = 'Title';
</script>

<BasePage {title}>
	<H1 className="text-center py-8 sm:py-10">{title}</H1>
	<div class="flex flex-1 flex-col gap-6 px-4 sm:px-6">
		<slot />
	</div>
</BasePage>
