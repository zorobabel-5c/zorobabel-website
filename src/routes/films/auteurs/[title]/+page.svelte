<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import type { LayoutData } from '../$houdini';
	export let data: LayoutData;

	$: ({ FilmDAuteurs } = data);
</script>

<h1>Auteurs</h1>
<p>title: {$page.params.title}</p>
