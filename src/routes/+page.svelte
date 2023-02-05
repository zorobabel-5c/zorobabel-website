<script lang="ts">
	import HomepageEntry from '../components/HomepageEntry.svelte';
	import { sortByDateCreated } from '../utils/array';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ HomepageFilms } = data);
	$: ({ ateliers = [], auteurs = [] } = $HomepageFilms.data! ?? {});
	$: combined = sortByDateCreated(ateliers, auteurs);
</script>

<section class="lg:columns-4 md:columns-3 sm:columns-1 gap-1">
	{#each combined as entry, i}
		<HomepageEntry {entry} index={i} />
	{/each}
</section>
