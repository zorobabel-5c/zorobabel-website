<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '../../../components/FilmLayout.svelte';

	export let data: LayoutData;

	$: ({ FilmDAteliers } = data);
	$: ({ films = [] } = $FilmDAteliers.data! ?? {});
	$: navItems = films.map((f) => f.titre ?? '');
</script>

{#if !$FilmDAteliers.fetching}
	<FilmLayout sideNavItems={navItems}>
		<div slot="content">
			<slot />
		</div>
	</FilmLayout>
{/if}
