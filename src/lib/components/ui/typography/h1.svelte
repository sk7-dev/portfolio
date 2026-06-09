<script lang="ts">
	export let className = '';
</script>

<h1
	{...$$restProps}
	class={`scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${className}`}
>
	<slot />
</h1>
