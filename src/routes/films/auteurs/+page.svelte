<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { getSlug } from '$lib/utils';
	import type { LayoutData } from './$houdini';

	export let data: LayoutData;

	$: ({ FilmDAuteurs } = data);
	$: ({ latests = [] } = $FilmDAuteurs.data! ?? {});
	$: browser && !$FilmDAuteurs.fetching && goto(`/films/auteurs/${getSlug(latests[0]) ?? '404'}`);
</script>
