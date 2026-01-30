<script lang="ts">
	import type { PageData } from './$houdini';

	import { getTitle, imageFromAssets } from '$lib/utils';
	import List from '$lib/components/List.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { CatalogueAuteurs } = $derived(data);
	let { auteurs = [] } = $derived($CatalogueAuteurs.data! ?? {});
</script>

<PageHead head={`films d'auteur (catalogue)`} />

{#if !$CatalogueAuteurs.fetching}
	<section class="mm:overflow-y-scroll h-[calc(100vh-120px)]">
		<List items={auteurs}  getKey={getTitle}>
			{#snippet children({ item })}
						<div class="flex gap-4 mb-4">
					<div class="min-w-[2.5rem] min-h-[2.5rem]">
						<img
							src={imageFromAssets(item?.logo) + '&width=40'}
							alt="logo du film '{item.titre_original}'"
						/>
					</div>
					<div>
						<p>
							{item.numero}.
							{#if item.titre_original}
								<span class="font-bold">{item.titre_original}</span>
								{#if item.titre_english}
									<span class="font-bold italic"> / {item.titre_english}</span>
								{/if}
								({item.realisation}, {item.duree_minutes}’{item.duree_secondes}’’, {item.annee})
							{/if}
						</p>
						{#if item.synopsis_fr}
							<p>{item.synopsis_fr}</p>
						{/if}
						{#if item.synopsis_en}
							<p class="italic">{item.synopsis_en}</p>
						{/if}
						{#if item.coproduction}
							<p class="italic font-semibold">
								{@html item.coproduction}
							</p>
						{/if}
					</div>
				</div>
								{/snippet}
				</List>
	</section>
{/if}
