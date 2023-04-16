<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '../../../components/FilmLayout.svelte';
	import { page } from '$app/stores';

	export let data: LayoutData;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
</script>

{#if !$SeriesPage.fetching}
	<FilmLayout>
		<ul slot="nav" id="sub-sidenav">
			{#each series as entry}
				<li>
					<a
						href={`./${encodeURI(entry.titre ?? '')}`}
						class:text-red-500={$page.url.pathname.endsWith(encodeURI(entry.titre ?? ''))}
						>{entry.titre}</a
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
