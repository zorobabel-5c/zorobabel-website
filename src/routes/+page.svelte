<script lang="ts">
	import { getTitle, randomizeMany, sortByExpiryDate } from '$lib/utils';
	import type { PageData } from './$houdini';

	import { showVideoModal } from '$lib/store/modals';
	import { isFutureDate } from '$lib/utils/date';

	import Affiche from '$lib/components/Affiche.svelte';
	import HomepageEntry from '$lib/components/HomepageEntry.svelte';
	import Close from '$lib/components/icons/Close.svelte';
	import PageHead from '$lib/components/PageHead.svelte';
	import VimeoIframe from '$lib/components/VimeoIframe.svelte';
	import AngleLeft from '$lib/components/icons/AngleLeft.svelte';
	import AngleRight from '$lib/components/icons/AngleRight.svelte';
	// @ts-ignore
	import Masonry from 'svelte-bricks';
	import AfficheEvent from '$lib/components/AfficheEvent.svelte';

	export let data: PageData;
	export let showModal: boolean;

	$: ({ HomepageFilms } = data);
	$: ({
		films_d_ateliers = [],
		auteurs = [],
		episodes = [],
		evenements = [],
		ateliers = []
	} = $HomepageFilms.data! ?? {});
	$: events = sortByExpiryDate(ateliers, evenements).filter((e) =>
		isFutureDate(e.date_de_peremption ?? '')
	);

	$: all = [...events, ...auteurs].filter((item) => item.id !== currentEntry.id);

	showVideoModal.subscribe((value) => {
		showModal = value;
	});

	$: randomized = randomizeMany(films_d_ateliers, auteurs, episodes).filter(
		(e) => !!e?.video?.thumbnail_url
	);
	let current = 0;

	$: currentEntry = randomized[current];
	$: next = () => {
		current = Math.min(current + 1, randomized.length - 1);
		currentEntry = randomized[current];
	};
	$: prev = () => {
		current = Math.max(current - 1, 0);
		currentEntry = randomized[current];
	};
</script>

<PageHead />

{#if !$HomepageFilms.fetching}
	<div class="flex flex-wrap bg-black text-white font-josefin">
		{#each [currentEntry, ...all] as item, idx}
			{#if item?.affiche?.id && idx !== 0}
				<div class="w-1/2 md:w-1/3 lg:w-1/4">
					{#if item?.date_de_peremption}
						<AfficheEvent entry={item} />
					{:else}
						<Affiche entry={item} />
					{/if}
				</div>
			{:else if idx === 0}
				<div class="w-1/2 md:w-1/3 lg:w-1/4">
					<HomepageEntry entry={currentEntry} index={0} />
				</div>
			{/if}
		{/each}
	</div>
	{#if showModal}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="w-full h-[100vh] bg-[rgb(0,0,0,0.9)] fixed top-0 left-0 z-50 grid place-content-center"
			on:click|self={() => showVideoModal.set(false)}
		>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				on:click={() => showVideoModal.set(false)}
				class="op-8 right-[5vw] absolute z-20 cursor-pointer"
			>
				<Close classes="text-white w-7 hover:text-red-500" />
			</div>
			<div
				class="lg:w-[700px] md:w-[90vw] flex gap-4 [&>button]:self-center [&>button]:p-2 [&>button]:rounded-lg"
			>
				<button
					on:click={prev}
					class:invisible={current === 0}
					class="text-white hover:text-red-500"
				>
					<AngleLeft classes="w-5 lg:w-7" />
				</button>
				<div class="flex-1">
					<VimeoIframe video={currentEntry.video} />
					<p class="text-white text-center">
						{getTitle(currentEntry)}
					</p>
				</div>
				<button on:click={next} class="text-white hover:text-red-500">
					<AngleRight classes="w-5 lg:w-7" />
				</button>
			</div>
		</div>
	{/if}
{/if}
