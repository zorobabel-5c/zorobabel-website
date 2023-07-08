<script lang="ts">
	import { page } from '$app/stores';
	import { imageFromAssets } from '$lib/utils';
	import type { LayoutData } from '../$houdini';

	import VimeoIframe from '$lib/components/VimeoIframe.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: LayoutData;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
	$: currentSeries = series.find((s) => s.slug === $page.params.title);
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
		<img
			src={imageFromAssets(currentSeries?.image_remplacement?.id) +
				'?width=450&height=300&quality=30'}
			alt="affiche de la série '{currentSeries?.titre}'"
			class="w-full object-cover py-2"
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
{/if}
