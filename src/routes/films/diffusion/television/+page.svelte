<script lang="ts">
	import List from '$lib/components/List.svelte';
	import { imageFromAssets } from '$lib/utils';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ TelevisionQuery } = data);
	$: ({ television = [] } = $TelevisionQuery.data! ?? {});
</script>

{#if !$TelevisionQuery.fetching}
	<List items={television} let:item getKey={(_) => null} shouldScrollIntoView={false}>
		<div class="flex gap-4 mb-4 items-start">
			<img src={imageFromAssets(item.logo)} alt="logo" class="w-20" />
			<p>{@html item.description}</p>
		</div>
	</List>
{/if}
