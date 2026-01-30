<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '$lib/components/layouts/FilmLayout.svelte';
	import List from '$lib/components/List.svelte';
	import { page } from '$app/state';
	import { getSlug, removePrefix, truncate } from '$lib/utils';
	import LinkListItem from '$lib/components/LinkListItem.svelte';

	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
	let isActive = $state(page.params.title);

	let { SeriesPage } = $derived(data);
	let { series = [] } = $derived($SeriesPage.data! ?? {});
</script>

<svelte:head>
	<title>zorobabel - series</title>
</svelte:head>

{#if !$SeriesPage.fetching}
	<FilmLayout>
		{#snippet nav()}
			
				<List
					items={series}
					
					getKey={getSlug}
					classes="mb-8 relative"
					shouldScrollIntoView={false}
				>
					{#snippet children({ item })}
								<LinkListItem
							{item}
							getLogoId={() => item.logo?.id}
							getLink={() => `/films/series/${getSlug(item)}`}
							getProcessedTitle={() => truncate(item.titre, 40)}
							on:click={() => {
								isActive = getSlug(item);
							}}
							className={`sticky top-0 cursor-pointer font-semibold flex gap-2 items-center mb-4 py-1 px-4 bg-white ${
								isActive === item.slug ? 'shadow-sm' : ''
							}`}
						/>
						{#if isActive === item.slug}
							<List
								items={item.episodes ?? []}
								
								getKey={getSlug}
								classes="overflow-y-scroll ml-10 lg:max-h-[80vh] md:max-h-[40vh]  grid content-start gap-2"
								pathIndex={5}
							>
								{#snippet children({ item: subItem })}
												{#if subItem?.titre}
										<LinkListItem
											item={subItem}
											getLogoId={(f) => f.logo?.id}
											getLink={(ep) => `/films/series/${getSlug(item)}/episodes/${getSlug(ep)}`}
											getProcessedTitle={(ep) => truncate(removePrefix(ep.titre, item.titre), 51)}
										/>
									{/if}
																			{/snippet}
										</List>
						{/if}
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
