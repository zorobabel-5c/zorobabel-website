<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '$lib/components/layouts/FilmLayout.svelte';
	import List from '$lib/components/List.svelte';
	import LinkListItem from '$lib/components/LinkListItem.svelte';

	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

	let { FilmDAteliers } = $derived(data);
	let { films = [] } = $derived($FilmDAteliers.data! ?? {});
</script>

{#if !$FilmDAteliers.fetching}
	<FilmLayout>
		{#snippet nav()}
			
				<List items={films}  getKey={(f) => f.titre} classes="grid content-start gap-2">
					{#snippet children({ item })}
								<LinkListItem {item} getLogoId={(f) => f.logo?.id} />
												{/snippet}
						</List>
			
			{/snippet}
		{#snippet content()}
				<div >
				{@render children?.()}
			</div>
			{/snippet}
	</FilmLayout>
{/if}
