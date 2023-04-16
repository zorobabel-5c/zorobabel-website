<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from '../$houdini';
	export let data: LayoutData;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
	$: currentSeries = series.find((s) => s.titre === $page.params.title);
</script>

{#if !$SeriesPage.fetching}
	<h1 class="text-2xl">
		<span>{currentSeries?.titre} {currentSeries?.titre_english ? '-' : ''} </span><span
			class="italic font-thin">{currentSeries?.titre_english}</span
		>
	</h1>
	<!-- {#if currentSeries?.video?.html}
		<div
			class="iframe-container"
			style={`aspect-ratio: ${currentSeries.video.width}/${currentSeries.video.height};`}
		>
			{@html currentSeries.video.html}
		</div>
	{/if} -->
	<div class="columns-2">
		<p>{currentSeries?.synopsis_fr}</p>
		<p>{currentSeries?.synopsis_en}</p>
	</div>
{/if}

<!-- <pre><code>{JSON.stringify(currentFilm, null, 2)}</code></pre> -->
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
