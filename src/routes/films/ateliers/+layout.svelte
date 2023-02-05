<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '../../../components/FilmLayout.svelte';
	import { page } from '$app/stores';

	export let data: LayoutData;

	$: ({ FilmDAteliers } = data);
	$: ({ films = [] } = $FilmDAteliers.data! ?? {});
</script>

{#if !$FilmDAteliers.fetching}
	<FilmLayout>
		<ul slot="nav" id="sub-sidenav">
			{#each films as film}
				<li>
					<a
						href={`./${encodeURI(film.titre ?? '')}`}
						class:text-red-500={$page.url.pathname.endsWith(encodeURI(film.titre ?? ''))}
						>{film.titre}</a
					>
				</li>
			{/each}
		</ul>
		<div slot="content">
			<slot />
		</div>
	</FilmLayout>
{/if}

<style>
	#sub-sidenav > li {
		margin-bottom: 2rem;
	}
</style>
