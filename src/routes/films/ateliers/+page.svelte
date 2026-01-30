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

	let { FilmDAteliers } = $derived(data);
	let { films = [] } = $derived($FilmDAteliers.data! ?? {});
	run(() => {
		browser && !$FilmDAteliers.fetching && goto(`/films/ateliers/${getSlug(films[0]) ?? '404'}`);
	});
</script>
