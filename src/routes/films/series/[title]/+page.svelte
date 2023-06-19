<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from '../$houdini';
	import VimeoIframe from '$lib/components/VimeoIframe.svelte';
	export let data: LayoutData;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
	$: currentSeries = series.find((s) => s.slug === $page.params.title);
</script>

{#if !$SeriesPage.fetching}
	<h1 class="text-2xl">
		<span>{currentSeries?.titre} {currentSeries?.titre_english ? '-' : ''} </span><span
			class="italic font-thin">{currentSeries?.titre_english}</span
		>
	</h1>
	<VimeoIframe video={currentSeries?.video_bande_annonce} />
	<div class="columns-2">
		<p>{currentSeries?.synopsis_fr}</p>
		<p>{currentSeries?.synopsis_en}</p>
	</div>
{/if}
