<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import type { LayoutData } from '../../../$houdini';
	export let data: LayoutData;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
	$: currentSeries = series.find((s) => s.titre === $page.params.title);
	$: currentEpisode = currentSeries?.episodes?.find((e) => e?.titre === $page.params.name);
</script>

{#if !$SeriesPage.fetching}
	<h1 class="text-2xl">
		<span>{currentSeries?.titre} {currentSeries?.titre_english ? '-' : ''} </span><span
			class="italic font-thin">{currentSeries?.titre_english}</span
		>
	</h1>
	{#if currentEpisode?.video?.html}
		<div
			class="iframe-container"
			style={`aspect-ratio: ${currentEpisode.video.width}/${currentEpisode.video.height};`}
		>
			{@html currentEpisode.video.html}
		</div>
	{/if}
	<div class="columns-2">
		<p>{currentEpisode?.synopsis_fr}</p>
		<p>{currentEpisode?.synopsis_en}</p>
	</div>
{/if}

<style lang="scss">
	.iframe-container {
		position: relative;
		overflow: hidden;
		border-radius: 3px;
		margin: 2rem 0;

		& > :global(iframe) {
			width: 100%;
			height: 100%;
		}
	}
</style>
