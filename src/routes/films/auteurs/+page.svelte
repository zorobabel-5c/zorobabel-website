<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { getAndEncodeTitle } from '../../../utils/string';
	import type { LayoutData } from './$houdini';

	export let data: LayoutData;

	$: ({ FilmDAuteurs } = data);
	$: ({ films = [] } = $FilmDAuteurs.data! ?? {});
	$: browser &&
		!$FilmDAuteurs.fetching &&
		goto(`/films/auteurs/${getAndEncodeTitle(films[0]) ?? '404'}`);
</script>
