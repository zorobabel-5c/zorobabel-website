<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '../../../components/FilmLayout.svelte';

	export let data: LayoutData;

	$: ({ FilmDAuteurs } = data);
	$: ({ films = [] } = $FilmDAuteurs.data! ?? {});
	$: navItems = films.map((f) => f.titre_original ?? '');
</script>

{#if !$FilmDAuteurs.fetching}
	<FilmLayout sideNavItems={navItems}>
		<div slot="content">
			<slot />
		</div>
	</FilmLayout>
{/if}
