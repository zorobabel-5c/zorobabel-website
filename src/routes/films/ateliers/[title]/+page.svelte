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
		<div class="iframe-container">
			{@html currentFilm?.video?.html}
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
		padding: 76% 0 0 0;
		overflow: hidden;
		border-radius: 3px;
		margin-bottom: 2rem;

		& > :global(iframe) {
			width: 100%;
			height: 100%;
			right: 0;
			top: 0;
			position: absolute;
		}
	}
</style>
