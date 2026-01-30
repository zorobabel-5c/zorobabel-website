<script lang="ts">
	import { getTitle, imageFromAssets } from '$lib/utils';
	import type { PageData } from './$houdini';

	import List from '$lib/components/List.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { CinemaQuery } = $derived(data);
	let { cinema = [] } = $derived($CinemaQuery.data! ?? {});
</script>

<PageHead head={'cinema'} />

{#if !$CinemaQuery.fetching}
	<List items={cinema}  getKey={getTitle} shouldScrollIntoView={false}>
		{#snippet children({ item })}
				<div class="flex gap-4 mb-6 items-start">
				<img src={imageFromAssets(item.affiche)} alt="affiche du film '{item.titre}'" class="w-30" />
				<div>
					<h4 class="font-semibold">{item.titre}</h4>
					<p>{@html item.description}</p>
				</div>
			</div>
					{/snippet}
		</List>
{/if}
