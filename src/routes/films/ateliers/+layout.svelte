<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '../../../components/FilmLayout.svelte';

	export let data: LayoutData;

	$: ({ FilmDAteliers } = data);
	$: ({ films } = $FilmDAteliers.data!);
</script>

<FilmLayout>
	<ul slot="nav" id="sub-sidenav">
		{#each films as film}
			<li>
				<a href={`./${encodeURI(film.titre ?? '')}`}>{film.titre}</a>
			</li>
		{/each}
	</ul>
	<div slot="content">
		<slot />
	</div>
</FilmLayout>

<style>
	#sub-sidenav > li {
		margin-bottom: 2rem;
	}
</style>
