<script lang="ts">
	import { page } from '$app/stores';
	import { imageFromAssets } from '$lib/utils';
	import VimeoIframe from '$lib/components/VimeoIframe.svelte';
	import type { LayoutData } from '../$houdini';

	export let data: LayoutData;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
	$: currentSeries = series.find((s) => s.slug === $page.params.title);
</script>

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
			alt="todo"
			class="w-full object-cover py-2"
		/>
	{/if}
	<div class="columns-2">
		<p>{currentSeries?.synopsis_fr}</p>
		<p>{currentSeries?.synopsis_en}</p>
	</div>
{/if}
