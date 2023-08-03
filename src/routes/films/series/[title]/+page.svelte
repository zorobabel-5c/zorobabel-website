<script lang="ts">
	import { page } from '$app/stores';
	import { imageFromAssets } from '$lib/utils';
	import type { LayoutData } from '../$houdini';

	import VimeoIframe from '$lib/components/VimeoIframe.svelte';
	import PageHead from '$lib/components/PageHead.svelte';
	import Close from '$lib/components/icons/Close.svelte';

	export let data: LayoutData;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
	$: currentSeries = series.find((s) => s.slug === $page.params.title);

	let showAfficheModal = false;
</script>

<PageHead head={currentSeries?.titre} />

{#if !$SeriesPage.fetching}
	<h1 class="text-xl font-josefin uppercase">
		<span>{currentSeries?.titre} {currentSeries?.titre_english ? '-' : ''} </span><span
			class="italic font-thin">{currentSeries?.titre_english}</span
		>
	</h1>
	<p>{currentSeries?.realisation}</p>
	{#if currentSeries?.video_bande_annonce}
		<VimeoIframe video={currentSeries?.video_bande_annonce} />
	{:else}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img
			src={imageFromAssets(currentSeries?.image_remplacement?.id) + '&width=450'}
			alt="affiche de la série '{currentSeries?.titre}'"
			class="w-full object-contain py-2 cursor-pointer"
			on:click|self={() => (showAfficheModal = true)}
		/>
	{/if}
	<div class="columns-2">
		{#if currentSeries?.synopsis_fr}
			<p>{currentSeries.synopsis_fr}</p>
		{/if}
		{#if currentSeries?.synopsis_en}
			<p>{currentSeries?.synopsis_en}</p>
		{/if}
	</div>
	{#if showAfficheModal}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="w-full h-[100vh] bg-[rgb(0,0,0,0.9)] fixed top-0 left-0 z-50 grid place-content-center"
			on:click|self={() => (showAfficheModal = false)}
		>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				on:click={() => (showAfficheModal = false)}
				class="op-8 right-[5vw] absolute z-20 cursor-pointer"
			>
				<Close classes="text-white w-7 hover:text-red-500" />
			</div>
			<div
				class="lg:w-[700px] md:w-[90vw] flex gap-4 [&>button]:self-center [&>button]:p-2 [&>button]:rounded-lg"
			>
				<div class="flex-1">
					<img
						src={imageFromAssets(currentSeries?.image_remplacement?.id) + '&width=800'}
						alt="affiche du film '{currentSeries?.titre}'"
						class="object-contain"
					/>
				</div>
			</div>
		</div>
	{/if}
{/if}
