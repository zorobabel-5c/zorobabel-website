<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '$lib/components/FilmLayout.svelte';
	import List from '$lib/components/List.svelte';
	import LinkListItem from '$lib/components/LinkListItem.svelte';
	import { getSlug } from '$lib/utils';

	export let data: LayoutData;

	$: ({ FilmDAuteurs } = data);
	$: ({ films = [] } = $FilmDAuteurs.data! ?? {});
</script>

{#if !$FilmDAuteurs.fetching}
	<FilmLayout>
		<svelte:fragment slot="nav">
			<List items={films} let:item getKey={getSlug} classes="grid content-start gap-2">
				<LinkListItem {item} getLogoId={(f) => f.logo?.id} />
			</List>
		</svelte:fragment>
		<div slot="content">
			<slot />
		</div>
	</FilmLayout>
{/if}
