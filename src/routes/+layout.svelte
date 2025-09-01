<script lang="ts">
	import NavBar from '$lib/components/common/nav-bar/nav-bar.svelte';
	import 'virtual:uno.css';
	import '../app.css';
	import '../markdown.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />
<div class="flex h-screen w-screen flex-col overflow-x-hidden">
	<NavBar />
	<!-- match the mobile/desktop navbar heights -->
	<div class="mt-14 flex flex-1 flex-col sm:mt-[70px]">
		{@render children()}
	</div>
</div>
<!--
<div class="flex h-screen w-screen flex-col overflow-x-hidden">
	<NavBar />
	<div class="mt-[50px] flex flex-1 flex-col">{@render children()}</div>
</div>
-->
