<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import type { LayoutData } from './$houdini';

	export let data: LayoutData;

	$: ({ FilmDAteliers } = data);
	$: ({ films = [] } = $FilmDAteliers.data! ?? {});
	$: browser &&
		!$FilmDAteliers.fetching &&
		goto(`/films/ateliers/${encodeURI(films[0]?.titre ?? '404')}`);
</script>
