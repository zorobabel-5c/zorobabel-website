<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '../../../components/FilmLayout.svelte';
	import List from '../../../components/List.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

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
						let:item
						getKey={(e) => encodeURI(e?.titre ?? '')}
						classes="overflow-y-scroll lg:h-[80vh] md:h-[40vh]"
					>
						{#if item}
							<a
								href={`/films/series/${isActive}/episodes/${encodeURI(item.titre)}`}
								class:text-red-500={$page.url.pathname.endsWith(encodeURI(item.titre))}
							>
								{item.titre}
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
