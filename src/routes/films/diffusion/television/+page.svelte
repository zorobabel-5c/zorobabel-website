<script lang="ts">
	import { imageFromAssets } from '$lib/utils';
	import type { PageData } from './$houdini';

	import List from '$lib/components/List.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: PageData;

	$: ({ TelevisionQuery } = data);
	$: ({ television = [] } = $TelevisionQuery.data! ?? {});
</script>

<PageHead head={'television'} />

{#if !$TelevisionQuery.fetching}
	<List items={television} let:item getKey={(_) => null} shouldScrollIntoView={false}>
		<div class="flex gap-4 mb-4 items-start">
			<img src={imageFromAssets(item.logo)} alt="logo de la chaîne télé" class="w-20" />
			<div class="self-center">
				{@html item.description}
			</div>
		</div>
	</List>
{/if}
