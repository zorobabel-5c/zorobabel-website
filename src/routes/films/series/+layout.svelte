<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '../../../components/FilmLayout.svelte';
	import List from '../../../components/List.svelte';
	import { page } from '$app/stores';
	import { removePrefix, truncate } from '../../../utils/string';
	import LinkListItem from '../../../components/LinkListItem.svelte';
	import { imageFromAssets } from '../../../utils/assets';

	export let data: LayoutData;
	let isActive = $page.params.title;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
</script>

{#if !$SeriesPage.fetching}
	<FilmLayout>
		<svelte:fragment slot="nav">
			<List
				items={series}
				let:item
				getKey={(s) => s.titre}
				classes="mb-8 relative"
				shouldScrollIntoView={false}
			>
				<div
					class="sticky top-0 cursor-pointer font-semibold flex gap-2 items-center mb-4 py-1 px-4 bg-white"
					class:shadow-sm={isActive === item.titre}
					on:click={() => {
						isActive = item.titre;
					}}
					on:keydown={(e) => {
						if (e.key === 'Tab' || e.key === 'Enter') {
							isActive = item.titre;
						}
					}}
				>
					<img src={imageFromAssets(item.logo?.id)} alt="logo" class="w-10" />
					<span>{item.titre}</span>
				</div>
				{#if isActive === item.titre}
					<List
						items={item.episodes ?? []}
						let:item={subItem}
						getKey={(e) => e?.titre}
						classes="overflow-y-scroll ml-10 lg:max-h-[80vh] md:max-h-[40vh]  grid content-start gap-4"
						pathIndex={5}
					>
						{#if subItem?.titre}
							<LinkListItem
								item={subItem}
								getTitle={(f) => f.titre}
								getLogoId={(f) => f.logo?.id}
								getLink={(ep) =>
									`/films/series/${encodeURI(item.titre)}/episodes/${encodeURI(ep.titre)}`}
								getProcessedTitle={(ep) => truncate(removePrefix(ep.titre, item.titre))}
							/>
						{/if}
					</List>
				{/if}
			</List>
		</svelte:fragment>
		<div slot="content">
			<slot />
		</div>
	</FilmLayout>
{/if}
