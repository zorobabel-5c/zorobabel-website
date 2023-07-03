<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from '../$houdini';
	import VimeoIframe from '$lib/components/VimeoIframe.svelte';
	export let data: LayoutData;

	$: ({ FilmDAteliers } = data);
	$: ({ films = [] } = $FilmDAteliers.data! ?? {});
	$: currentFilm = films.find((f) => f.slug === $page.params.title);
</script>

{#if !$FilmDAteliers.fetching}
	{#if currentFilm?.titre}
		<h1 class="text-center font-josefin uppercase">
			{currentFilm?.titre}
		</h1>
	{/if}
	<div class="text-center">
		<span
			>{currentFilm?.public}, {currentFilm?.technique}, {currentFilm?.duree_minutes}’{currentFilm?.duree_secondes}’’,
			{#if currentFilm?.annee}
				{currentFilm.annee}.
			{/if}
		</span>
		{#if currentFilm?.partenariats}
			<p>{@html currentFilm.partenariats}</p>
		{/if}
	</div>
	<VimeoIframe video={currentFilm?.video} />
	{#if currentFilm?.synopsis_fr}
		<div>
			<p>{currentFilm?.synopsis_fr}</p>
		</div>
	{/if}
{/if}
