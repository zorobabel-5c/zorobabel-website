<script lang="ts">
	import type { PageData } from './$houdini';

	import { getTitle, imageFromAssets } from '$lib/utils';
	import List from '$lib/components/List.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: PageData;

	$: ({ CatalogueAteliers } = data);
	$: ({ ateliers = [] } = $CatalogueAteliers.data! ?? {});
</script>

<PageHead head={`films d'atelier (catalogue)`} />

{#if !$CatalogueAteliers.fetching}
	<section class="mm:overflow-y-scroll h-[calc(100vh-120px)]">
		<List items={ateliers} let:item getKey={getTitle}>
			<div class="flex gap-4 mb-4">
				<div class="min-w-[2.5rem] min-h-[2.5rem]">
					<img src={imageFromAssets(item.logo) + '&width=40'} alt="logo du film '{item.titre}'" />
				</div>
				<div>
					<p>
						{item.numero}.
						{#if item.titre}
							<span class="font-bold">{item.titre}</span>

							({item.public}, {item.duree_minutes}’{item.duree_secondes}’’, {item.annee})
						{/if}
					</p>
					{#if item.synopsis_fr}
						<p>
							{item.synopsis_fr}
						</p>
					{/if}
					{#if item.partenariats}
						<p class="italic font-semibold">
							{@html item.partenariats}
						</p>
					{/if}
				</div>
			</div>
		</List>
	</section>
{/if}
