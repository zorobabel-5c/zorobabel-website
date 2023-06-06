<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { getAndEncodeTitle } from '$lib/utils';
	import type { LayoutData } from './$houdini';

	export let data: LayoutData;

	$: ({ FilmDAteliers } = data);
	$: ({ films = [] } = $FilmDAteliers.data! ?? {});
	$: browser &&
		!$FilmDAteliers.fetching &&
		goto(`/films/ateliers/${getAndEncodeTitle(films[0]) ?? '404'}`);
</script>
