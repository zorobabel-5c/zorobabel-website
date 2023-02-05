<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from '../$houdini';
	export let data: LayoutData;

	$: ({ FilmDAteliers } = data);
	$: ({ films = [] } = $FilmDAteliers.data! ?? {});
	$: currentFilm = films.find((f) => f.titre === $page.params.title);
</script>

{#if !$FilmDAteliers.fetching}
	{#if currentFilm?.titre}
		<h1 class="text-2xl">
			{currentFilm?.titre}
		</h1>
	{/if}

	{#if currentFilm?.video?.html}
		<div
			class="iframe-container"
			style={`aspect-ratio: ${currentFilm.video.width}/${currentFilm.video.height};`}
		>
			{@html currentFilm.video.html}
		</div>
	{/if}
	{#if currentFilm?.synopsis_fr}
		<div>
			<p>{currentFilm?.synopsis_fr}</p>
		</div>
	{/if}
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
