<script lang="ts">
	import { randomizeMany, sortByDateCreated } from '$lib/utils';
	import type { PageData } from './$houdini';

	import Affiche from '$lib/components/Affiche.svelte';
	import HomepageEntry from '$lib/components/HomepageEntry.svelte';
	import Close from '$lib/components/icons/Close.svelte';
	import PageHead from '$lib/components/PageHead.svelte';
	import { showBackDrop } from '$lib/store/backdrop';
	import VimeoIframe from '$lib/components/VimeoIframe.svelte';
	import AngleLeft from '$lib/components/icons/AngleLeft.svelte';
	import AngleRight from '$lib/components/icons/AngleRight.svelte';

	export let data: PageData;
	export let showModal: boolean;

	showBackDrop.subscribe((value) => {
		showModal = value;
	});

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
		{#if showModal}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="w-full h-[100vh] bg-[rgb(0,0,0,0.9)] fixed top-0 left-0 z-50 grid place-content-center"
				on:click|self={() => showBackDrop.set(false)}
			>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					on:click={() => showBackDrop.set(false)}
					class="op-8 right-[5vw] absolute z-20 cursor-pointer"
				>
					<Close classes="text-white w-7 hover:text-red-500" />
				</div>
				<div
					class="lg:w-[700px] md:w-[90vw] flex gap-4 [&>button]:self-center [&>button]:p-2 [&>button]:rounded-lg"
				>
					<button on:click={prev} class="text-white hover:text-red-500">
						<AngleLeft classes="w-5 lg:w-7" />
					</button>
					<div class="flex-1">
						<VimeoIframe video={currentEntry.video} />
						<p class="text-white text-center">
							{currentEntry.titre || currentEntry.titre_original}
						</p>
					</div>
					<button on:click={next} class="text-white hover:text-red-500">
						<AngleRight classes="w-5 lg:w-7" />
					</button>
				</div>
			</div>
		{/if}
	</section>
{/if}
