<script lang="ts">
	// We no longer need Input or onMount.
	import { type Snippet } from 'svelte';
	import TitledPage from '../titled-page/titled-page.svelte';

	// onSearch is now optional and defaults to a no-op function
	let {
		title = 'Untitled',
		onSearch = () => {},
		children
	}: {
		title: string;
		onSearch?: (value: string) => void;
		children: Snippet;
	} = $props();
</script>

<!--
  All search-related code (query, URLSearchParams, etc.) is removed.
  We simply render the TitledPage with its children, no Input component.
-->
<TitledPage {title}>
	{@render children()}
</TitledPage>

<!--
<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { onMount, type Snippet } from 'svelte';
	import TitledPage from '../titled-page/titled-page.svelte';

	let {
		title = 'Untitled',
		onSearch,
		children
	}: { title: string; onSearch: (value: string) => void; children: Snippet } = $props();

	let query = $state('');
	let mounted = $state(false);

	$effect(() => {
		if (mounted) {
			let searchParams = new URLSearchParams(window.location.search);

			searchParams.set('q', query);

			const url = `${window.location.protocol}//${window.location.host}${
				window.location.pathname
			}?${searchParams.toString()}`;

			const state = window.history.state;

			window.history.replaceState(state, '', url);

			onSearch(query);
		}
	});

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);
		query = searchParams.get('q') ?? '';
		mounted = true;
	});
</script>

<TitledPage {title}>
	<Input placeholder="Search..." bind:value={query} />
	{@render children()}
</TitledPage>
-->
