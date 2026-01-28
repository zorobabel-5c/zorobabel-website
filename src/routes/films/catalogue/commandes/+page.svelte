<script lang="ts">
	import type { PageData } from './$houdini';

	import { getTitle, imageFromAssets } from '$lib/utils';
	import List from '$lib/components/List.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: PageData;

	$: ({ CatalogueCommandes } = data);
	$: ({ commandes = [] } = $CatalogueCommandes.data! ?? {});
</script>

<PageHead head={`films d'auteur (catalogue)`} />

{#if !$CatalogueCommandes.fetching}
	<section class="mm:overflow-y-scroll h-[calc(100vh-120px)]">
		<List items={commandes} let:item getKey={getTitle}>
			<div class="flex gap-4 mb-4">
				<div class="min-w-[2.5rem] min-h-[2.5rem]">
					<img src={imageFromAssets(item?.logo) + '&width=40'} alt="logo du film '{item.titre}'" />
				</div>
				<div>
					<p>
						{item.numero}.
						{#if item.titre}
							<span class="font-bold">{item.titre}</span>

							({item.realisation}, {item.technique}, {item.duree_minutes}’{item.duree_secondes}’’, {item.annee})
						{/if}
					</p>
					{#if item.description}
						<p>{@html item.description}</p>
					{/if}
				</div>
			</div>
		</List>
	</section>
{/if}
