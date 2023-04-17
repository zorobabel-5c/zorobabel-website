<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '../../../components/FilmLayout.svelte';
	import List from '../../../components/List.svelte';
	import { page } from '$app/stores';
	import { removePrefix, truncate } from '../../../utils/string';

	export let data: LayoutData;
	let isActive = $page.params.title;

	$: ({ SeriesPage } = data);
	$: ({ series = [] } = $SeriesPage.data! ?? {});
</script>

{#if !$SeriesPage.fetching}
	<FilmLayout>
		<svelte:fragment slot="nav">
			<List items={series} let:item getKey={(s) => encodeURI(s.titre)} shouldScrollIntoView={false}>
				<p
					class="cursor-pointer font-semibold"
					on:click={() => {
						isActive = item.titre;
					}}
					on:keydown={(e) => {
						if (e.key === 'Tab' || e.key === 'Enter') {
							isActive = item.titre;
						}
					}}
				>
					{item.titre}
				</p>
				{#if isActive === item.titre}
					<List
						items={item.episodes ?? []}
						let:item={subItem}
						getKey={(e) => encodeURI(e?.titre ?? '')}
						classes="overflow-y-scroll lg:h-[80vh] md:h-[40vh]  grid gap-4"
						pathIndex={5}
					>
						{#if subItem?.titre}
							<a
								href={`/films/series/${encodeURI(item.titre)}/episodes/${encodeURI(subItem.titre)}`}
								class:text-red-500={$page.url.pathname.endsWith(encodeURI(subItem.titre))}
							>
								{removePrefix(subItem.titre, item.titre)}
							</a>
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
