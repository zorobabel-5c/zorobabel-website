<script lang="ts">
	import { page } from '$app/state';
	import type { LayoutData } from '../../../$houdini';

	import VimeoIframe from '$lib/components/VimeoIframe.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: LayoutData;
	}

	let { data }: Props = $props();

	let { SeriesPage } = $derived(data);
	let { series = [] } = $derived($SeriesPage.data! ?? {});
	let currentSeries = $derived(series.find((s) => s.slug === page.params.title));
	let currentEpisode = $derived(currentSeries?.episodes?.find((e) => e?.slug === page.params.name));
</script>

<PageHead head={currentEpisode?.titre} />

{#if !$SeriesPage.fetching}
	<h1 class="text-center font-josefin uppercase">
		<span>{currentEpisode?.titre} {currentEpisode?.titre_english ? '-' : ''} </span>
		<span class="italic">{currentEpisode?.titre_english}</span>
	</h1>
	<div class="text-center">
		<span>{currentEpisode?.realisation}</span>
		<span>, {currentEpisode?.duree_minutes}’{currentEpisode?.duree_secondes}’’</span>
		{#if currentEpisode?.annee}
			<span>, {currentEpisode.annee}.</span>
		{/if}
		{#if currentEpisode?.coproduction}
			<span class="[&>p]:inline">
				In coproduction with {@html currentEpisode.coproduction}
			</span>
		{/if}
	</div>
	<VimeoIframe video={currentEpisode?.video} />
	<div class="columns-2">
		<p>{currentEpisode?.synopsis_fr}</p>
		<p>{currentEpisode?.synopsis_en}</p>
	</div>
{/if}
