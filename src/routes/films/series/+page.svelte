<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { getSlug } from '$lib/utils';
	import type { LayoutData } from './$houdini';

	export let data: LayoutData;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
	$: browser && !$SeriesPage.fetching && goto(`/films/series/${getSlug(series[0]) ?? '404'}`);
</script>
