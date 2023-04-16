<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '../../../components/FilmLayout.svelte';

	export let data: LayoutData;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
	$: navItems = series.map((s) => s.titre ?? '');
</script>

{#if !$SeriesPage.fetching}
	<FilmLayout sideNavItems={navItems}>
		<div slot="content">
			<slot />
		</div>
	</FilmLayout>
{/if}
