<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from '../../../$houdini';
	import VimeoIframe from '../../../../../../components/VimeoIframe.svelte';
	import { decodeTitle } from '../../../../../../utils/string';
	export let data: LayoutData;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
	$: currentSeries = series.find((s) => s.titre === decodeTitle($page.params.title));
	$: currentEpisode = currentSeries?.episodes?.find(
		(e) => e?.titre === decodeTitle($page.params.name)
	);
</script>

{#if !$SeriesPage.fetching}
	<h1 class="text-2xl">
		<span>{currentSeries?.titre} {currentSeries?.titre_english ? '-' : ''} </span><span
			class="italic font-thin">{currentSeries?.titre_english}</span
		>
	</h1>
	<VimeoIframe video={currentEpisode?.video} />
	<div class="columns-2">
		<p>{currentEpisode?.synopsis_fr}</p>
		<p>{currentEpisode?.synopsis_en}</p>
	</div>
{/if}
