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
		<h1 class="text-2xl text-center">
			{currentFilm?.titre}
		</h1>
	{/if}
	<div class="my-4 text-center">
		<span>{currentFilm?.public},</span>
		<span>{currentFilm?.technique},</span>
		<span>{currentFilm?.duree_minutes}'</span>
		<span>{currentFilm?.duree_secondes}",</span>
		{#if currentFilm?.annee}
			<span>{currentFilm.annee}</span>
		{/if}
		{#if currentFilm?.partenariats}
			<span>{@html currentFilm.partenariats}</span>
		{/if}
		<span />
	</div>
	<VimeoIframe video={currentFilm?.video} />
	<!-- {#if currentFilm?.synopsis_fr}
		<div>
			<p>{currentFilm?.synopsis_fr}</p>
		</div>
	{/if} -->
{/if}
