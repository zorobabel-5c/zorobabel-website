<script lang="ts">
	import List from '$lib/components/List.svelte';
	import { getTitle, imageFromAssets } from '$lib/utils';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ PublicationsQuery } = data);
	$: ({ publications = [] } = $PublicationsQuery.data! ?? {});
</script>

{#if !$PublicationsQuery.fetching}
	<List items={publications} let:item getKey={getTitle} shouldScrollIntoView={false}>
		<div class="flex gap-4 mb-6 items-start">
			<img src={imageFromAssets(item.couverture)} alt="logo" class="w-30" />
			<div>
				<h4 class="font-semibold">{item.titre}</h4>
				<p>{@html item.description}</p>
			</div>
		</div>
	</List>
{/if}
