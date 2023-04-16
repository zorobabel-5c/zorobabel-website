<script lang="ts">
	import { browser } from '$app/environment';
	import Afiche from '../components/Afiche.svelte';
	import HomepageEntry from '../components/HomepageEntry.svelte';
	import { pickRandom, sortByDateCreated } from '../utils/array';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ HomepageFilms } = data);
	$: ({
		films_d_ateliers = [],
		auteurs = [],
		episodes = [],
		evenements = [],
		ateliers = []
	} = $HomepageFilms.data! ?? {});
	$: combined = sortByDateCreated([...auteurs, ...evenements], ateliers);
	$: random = pickRandom(episodes);
	// $: random = pickRandom(films_d_ateliers, auteurs, episodes);
</script>

{#if !$HomepageFilms.fetching}
	<section class="lg:columns-4 md:columns-3 sm:columns-1 gap-1">
		<HomepageEntry entry={random} index={0} />
		{#each combined as entry, i}
			{#if entry.affiche?.id}
				<Afiche {entry} index={i + 1} />
			{/if}
		{/each}
	</section>
{/if}
