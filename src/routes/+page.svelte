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
	$: random = pickRandom(films_d_ateliers, auteurs, episodes);
	$: browser && console.log(combined);
</script>

{#if !$HomepageFilms.fetching}
	<section class="xl:columns-4 lg:columns-3 md:columns-2 sm:columns-1 gap-1">
		<HomepageEntry entry={random} index={0} />
		{#each combined as entry}
			{#if entry.affiche?.id}
				<Afiche {entry} />
			{/if}
		{/each}
	</section>
{/if}
