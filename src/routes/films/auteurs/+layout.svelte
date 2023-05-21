<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '../../../components/FilmLayout.svelte';
	import List from '../../../components/List.svelte';
	import LinkListItem from '../../../components/LinkListItem.svelte';
	import { getTitle } from '../../../utils';

	export let data: LayoutData;

	$: ({ FilmDAuteurs } = data);
	$: ({ films = [] } = $FilmDAuteurs.data! ?? {});
</script>

{#if !$FilmDAuteurs.fetching}
	<FilmLayout>
		<svelte:fragment slot="nav">
			<List items={films} let:item getKey={getTitle}>
				<LinkListItem {item} getLogoId={(f) => f.logo?.id} />
			</List>
		</svelte:fragment>
		<div slot="content">
			<slot />
		</div>
	</FilmLayout>
{/if}
