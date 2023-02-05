<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import type { LayoutData } from './$houdini';

	export let data: LayoutData;

	$: ({ FilmDAuteurs } = data);
	$: ({ films = [] } = $FilmDAuteurs.data! ?? {});
	$: browser &&
		!$FilmDAuteurs.fetching &&
		goto(`/films/auteurs/${encodeURI(films[0]?.titre_original ?? '404')}`);
</script>
