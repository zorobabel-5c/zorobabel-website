<script lang="ts">
	import { pickRandom, randomizeMany, sortByDateCreated } from '$lib/utils';
	import type { PageData } from './$houdini';

	import Affiche from '$lib/components/Affiche.svelte';
	import HomepageEntry from '$lib/components/HomepageEntry.svelte';
	import Close from '$lib/components/Close.svelte';
	import PageHead from '$lib/components/PageHead.svelte';
	import { showBackDrop } from '$lib/store/backdrop';
	import VimeoIframe from '$lib/components/VimeoIframe.svelte';

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

	$: randomized = randomizeMany(films_d_ateliers, auteurs, episodes);
	let current = 0;
	$: currentEntry = randomized[current];
	$: next = () => {
		current = Math.min(current + 1, randomized.length - 1);
		currentEntry = randomized[current];
		console.log(current, currentEntry);
	};
	$: prev = () => {
		current = Math.max(current - 1, 0);
		currentEntry = randomized[current];
		console.log(current, currentEntry);
	};
</script>

<PageHead />

{#if !$HomepageFilms.fetching}
	<section
		class=" lg:columns-4 md:columns-3 sm:columns-2 px-4 sm:px-[unset] gap-0 font-josefin font-normal"
	>
		<HomepageEntry entry={currentEntry} index={0} />
		{#each combined as entry}
			{#if entry.affiche?.id}
				<Affiche {entry} />
			{/if}
		{/each}
		<div
			class="w-full h-[100vh] bg-[#000000ad] fixed top-0 left-0 z-50 grid place-content-center"
			class:hidden={!$showBackDrop}
		>
			<Close on:click={() => showBackDrop.set(false)} />
			<div class="w-[70vw] flex gap-4 [&>button]:self-center [&>button]:p-2 [&>button]:rounded-lg">
				<button on:click={prev} class="text-white text-2xl hover:bg-[#00000026]">
					<svg
						fill="currentColor"
						height="3rem"
						viewBox="0 0 52 52"
						transform="matrix(-1, 0, 0, 1, 0, 0)"
					>
						<g>
							<path
								d="M14,52a2,2,0,0,1-1.41-3.41L35.17,26,12.59,3.41a2,2,0,0,1,0-2.82,2,2,0,0,1,2.82,0l24,24a2,2,0,0,1,0,2.82l-24,24A2,2,0,0,1,14,52Z"
							/>
						</g>
					</svg>
				</button>
				<div class="flex-1">
					<VimeoIframe video={currentEntry.video} />
				</div>
				<button on:click={next} class="text-white text-2xl hover:bg-[#00000026]">
					<svg
						fill="currentColor"
						height="3rem"
						viewBox="0 0 52 52"
						transform="matrix(1, 0, 0, 1, 0, 0)"
					>
						<g>
							<path
								d="M14,52a2,2,0,0,1-1.41-3.41L35.17,26,12.59,3.41a2,2,0,0,1,0-2.82,2,2,0,0,1,2.82,0l24,24a2,2,0,0,1,0,2.82l-24,24A2,2,0,0,1,14,52Z"
							/>
						</g>
					</svg>
				</button>
			</div>
		</div>
	</section>
{/if}
