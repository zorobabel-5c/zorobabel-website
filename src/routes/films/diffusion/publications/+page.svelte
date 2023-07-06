<script lang="ts">
	import { getTitle, imageFromAssets } from '$lib/utils';
	import type { PageData } from './$houdini';

	import List from '$lib/components/List.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: PageData;

	$: ({ PublicationsQuery } = data);
	$: ({ publications = [] } = $PublicationsQuery.data! ?? {});
</script>

<PageHead head={'publications'} />

{#if !$PublicationsQuery.fetching}
	<List items={publications} let:item getKey={getTitle} shouldScrollIntoView={false}>
		<div class="flex gap-4 mb-6 items-start">
			<img
				src={imageFromAssets(item.couverture)}
				alt="couverture de la publication '{item.titre}'"
				class="w-[7.5rem]"
			/>
			<div>
				<h4 class="font-semibold">{item.titre}</h4>
				<p>{@html item.description}</p>
			</div>
		</div>
	</List>
{/if}
