<script lang="ts">
	import { imageFromAssets } from '$lib/utils';
	import type { PageData } from './$houdini';

	import List from '$lib/components/List.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { TelevisionQuery } = $derived(data);
	let { television = [] } = $derived($TelevisionQuery.data! ?? {});
</script>

<PageHead head={'television'} />

{#if !$TelevisionQuery.fetching}
	<List items={television}  getKey={(_) => null} shouldScrollIntoView={false}>
		{#snippet children({ item })}
				<div class="flex gap-4 mb-4 items-start">
				<img src={imageFromAssets(item.logo)} alt="logo de la chaîne télé" class="w-20" />
				<div class="self-center">
					{@html item.description}
				</div>
			</div>
					{/snippet}
		</List>
{/if}
