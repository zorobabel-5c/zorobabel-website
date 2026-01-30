<script lang="ts">
	import { page } from '$app/state';
	import type { LayoutData } from '../$houdini';

	import VimeoIframe from '$lib/components/VimeoIframe.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: LayoutData;
	}

	let { data }: Props = $props();

	let { FilmDAteliers } = $derived(data);
	let { films = [] } = $derived($FilmDAteliers.data! ?? {});
	let currentFilm = $derived(films.find((f) => f.slug === page.params.title));
</script>

<PageHead head={currentFilm?.titre} />

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
