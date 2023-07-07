<script lang="ts">
	import { browser } from '$app/environment';
	import { pickRandom, sortByDateCreated } from '$lib/utils';
	import type { PageData } from './$houdini';

	import Affiche from '$lib/components/Affiche.svelte';
	import HomepageEntry from '$lib/components/HomepageEntry.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

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
</script>

<PageHead />

{#if !$HomepageFilms.fetching}
	<section
		class=" lg:columns-4 md:columns-3 sm:columns-2 px-4 sm:px-[unset] gap-0 font-josefin font-normal"
	>
		<HomepageEntry entry={random} index={0} />
		{#each combined as entry}
			{#if entry.affiche?.id}
				<Affiche {entry} />
			{/if}
		{/each}
	</section>
{/if}
