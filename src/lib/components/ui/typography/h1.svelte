<!-- src/lib/components/ui/typography/h1.svelte -->
<script lang="ts">
	export let className = '';
	export let size: 'xs' | 'sm' | 'md' | 'lg' = 'sm';

	const scale = {
		xs: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
		sm: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
		md: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
		lg: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl'
	} as const;
</script>

<h1
	{...$$restProps}
	class={`scroll-m-20 font-bold leading-tight tracking-tight ${scale[size]} ${className}`}
>
	<slot />
</h1>

<!-- 
<script lang="ts">
	export let className = '';
</script>

<h1
	{...$$restProps}
	class={`scroll-m-20 text-4xl font-bold tracking-wider lg:text-5xl ${className}`}
>
	<slot />
</h1> 
-->
