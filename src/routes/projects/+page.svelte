<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import ProjectCard from '$lib/components/projects/project-card.svelte';
	import TypeFilter from '$lib/components/common/filter/type-filter.svelte'; // Import the new component
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Toggle from '$lib/components/ui/toggle/toggle.svelte';
	import ProjectsData from '$lib/data/projects';
	import SkillsData from '$lib/data/skills';
	import type { Skill } from '$lib/data/types';

	interface SkillFilter extends Skill {
		isSelected?: boolean;
	}

	let filters: Array<SkillFilter> = $state(
		SkillsData.items.filter((it) => {
			return ProjectsData.items.some((project) =>
				project.skills.some((skill) => skill.slug === it.slug)
			);
		})
	);

	// Get unique project types
	const allProjectTypes = [...new Set(ProjectsData.items.map((project) => project.type))];

	// State for selected project types
	let selectedTypes: string[] = $state([]);

	let result = $derived(
		ProjectsData.items.filter((project) => {
			// Check skill filter match
			const isSkillFiltered =
				filters.every((item) => !item.isSelected) ||
				project.skills.some((tech) =>
					filters.some((filter) => filter.isSelected && filter.slug === tech.slug)
				);

			// Check type filter match
			const isTypeFiltered = selectedTypes.length === 0 || selectedTypes.includes(project.type);

			// Return true if both filters pass
			return isSkillFiltered && isTypeFiltered;
		})
	);

	const toggleSelected = (slug: string) => {
		filters = filters.map((it) => (it.slug === slug ? { ...it, isSelected: !it.isSelected } : it));
	};
</script>

<TitledPage title={ProjectsData.title}>
	<div class="flex flex-1 flex-col gap-8">
		<!-- Project Type Filters -->
		<TypeFilter types={allProjectTypes} bind:selectedTypes />

		<!-- Skill Filters 
		<div>
			<h3 class="mb-2 text-sm font-medium">Filter by Skills</h3>
			<div class="flex flex-row flex-wrap gap-2">
				{#each filters as it (it.slug)}
					<Toggle
						pressed={it.isSelected}
						variant="outline"
						class="flex flex-row items-center gap-2 rounded-lg"
						on:click={() => toggleSelected(it.slug)}
					>
						{#if it.isSelected}
							<Icon icon="i-carbon-close" />
						{/if}
						{it.name}</Toggle
					>
				{/each}
			</div>
		</div>
		-->
		<!-- Results -->
		{#if result.length === 0}
			<EmptyResult />
		{:else}
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each result as it (it.slug)}
					<ProjectCard project={it} />
				{/each}
			</div>
		{/if}
	</div>
</TitledPage>
