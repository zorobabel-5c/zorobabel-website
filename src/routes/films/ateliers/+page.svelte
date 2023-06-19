<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { getSlug } from '$lib/utils';
	import type { LayoutData } from './$houdini';

	export let data: LayoutData;

	$: ({ FilmDAteliers } = data);
	$: ({ films = [] } = $FilmDAteliers.data! ?? {});
	$: browser && !$FilmDAteliers.fetching && goto(`/films/ateliers/${getSlug(films[0]) ?? '404'}`);
</script>
