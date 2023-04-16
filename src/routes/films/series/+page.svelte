<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import type { LayoutData } from './$houdini';

	export let data: LayoutData;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
	$: browser &&
		!$SeriesPage.fetching &&
		goto(`/films/series/${encodeURI(series[0]?.titre ?? '404')}`);
</script>
