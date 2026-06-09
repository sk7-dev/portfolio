<script lang="ts">
	export let className = '';
</script>

<h4 {...$$restProps} class={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
	<slot />
</h4>
