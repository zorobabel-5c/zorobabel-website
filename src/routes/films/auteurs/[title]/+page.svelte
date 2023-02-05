<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from '../$houdini';
	export let data: LayoutData;

	$: ({ FilmDAuteurs } = data);
	$: ({ films = [] } = $FilmDAuteurs.data! ?? {});
	$: currentFilm = films.find((f) => f.titre_original === $page.params.title);
</script>

{#if !$FilmDAuteurs.fetching}
	<h1 class="text-2xl">
		<span>{currentFilm?.titre_original} {currentFilm?.titre_english ? '-' : ''} </span><span
			class="italic font-thin">{currentFilm?.titre_english}</span
		>
	</h1>
	{#if currentFilm?.video?.html}
		<div class="iframe-container">
			{@html currentFilm?.video?.html}
		</div>
	{/if}
	<div class="columns-2">
		<p>{currentFilm?.synopsis_fr}</p>
		<p>{currentFilm?.synopsis_en}</p>
	</div>
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
