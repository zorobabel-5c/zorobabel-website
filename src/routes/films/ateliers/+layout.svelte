<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '$lib/components/FilmLayout.svelte';
	import List from '$lib/components/List.svelte';
	import LinkListItem from '$lib/components/LinkListItem.svelte';

	export let data: LayoutData;

	$: ({ FilmDAteliers } = data);
	$: ({ films = [] } = $FilmDAteliers.data! ?? {});
</script>

{#if !$FilmDAteliers.fetching}
	<FilmLayout>
		<svelte:fragment slot="nav">
			<List items={films} let:item getKey={(f) => f.titre} classes="grid content-start gap-2">
				<LinkListItem {item} getLogoId={(f) => f.logo?.id} />
			</List>
		</svelte:fragment>
		<div slot="content">
			<slot />
		</div>
	</FilmLayout>
{/if}
