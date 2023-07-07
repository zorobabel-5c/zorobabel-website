<script lang="ts">
	import type { PageData } from './$houdini';

	import PageHead from '$lib/components/PageHead.svelte';
	import List from '$lib/components/List.svelte';
	import LinkListItem from '$lib/components/LinkListItem.svelte';

	import { getSlug, imageFromAssets, removePrefix, truncate } from '$lib/utils';

	export let data: PageData;

	$: ({ CatalogueSeries } = data);
	$: ({ series = [] } = $CatalogueSeries.data! ?? {});
</script>

<PageHead head={`séries créatives (catalogue)`} />

{#if !$CatalogueSeries.fetching}
	<section class="overflow-y-scroll h-[calc(100vh-120px)]">
		<List
			items={series}
			let:item
			getKey={getSlug}
			classes="mb-8 relative"
			shouldScrollIntoView={false}
		>
			<div class="font-semibold flex gap-2 items-center mb-4 py-1">
				<img
					src={imageFromAssets(item.logo?.id)}
					alt="logo de la série '{item.titre}'"
					class="w-10"
				/>
				<span class="font-bold">{item.titre}</span>
			</div>
			<div class="pb-8">
				<List
					items={item.episodes ?? []}
					let:item={subItem}
					getKey={getSlug}
					classes="ml-10 grid content-start gap-2"
					pathIndex={5}
				>
					{#if subItem?.titre}
						<LinkListItem
							item={subItem}
							getLogoId={(f) => f.logo?.id}
							getLink={(ep) => `/films/series/${getSlug(item)}/episodes/${getSlug(ep)}`}
							getProcessedTitle={(ep) => truncate(ep.titre, 100)}
						/>
					{/if}
				</List>
			</div>
		</List>
	</section>
{/if}
