<script lang="ts">
	import { run } from 'svelte/legacy';

	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { getSlug } from '$lib/utils';
	import type { LayoutData } from './$houdini';

	interface Props {
		data: LayoutData;
	}

	let { data }: Props = $props();

	let { SeriesPage } = $derived(data);
	let { series = [] } = $derived($SeriesPage.data! ?? {});
	run(() => {
		browser && !$SeriesPage.fetching && goto(`/films/series/${getSlug(series[0]) ?? '404'}`);
	});
</script>
