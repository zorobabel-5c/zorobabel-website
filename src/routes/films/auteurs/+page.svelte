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

	let { FilmDAuteurs } = $derived(data);
	let { latests = [] } = $derived($FilmDAuteurs.data! ?? {});
	run(() => {
		browser && !$FilmDAuteurs.fetching && goto(`/films/auteurs/${getSlug(latests[0]) ?? '404'}`);
	});
</script>
