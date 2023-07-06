<script lang="ts">
	import type { PageData } from './$houdini';

	import List from '$lib/components/List.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: PageData;

	$: ({ CoprodQuery } = data);
	$: ({ coproductions = [] } = $CoprodQuery.data! ?? {});
</script>

<PageHead head={'coproductions'} />

{#if !$CoprodQuery.fetching}
	<List items={coproductions} let:item getKey={(_) => null} shouldScrollIntoView={false}>
		<div class="flex gap-4 mb-4 items-start">
			<li class="w-[130px]">
				<a href={item.lien}>
					{item.titre_lien}
				</a>
			</li>
			<div class="self-center font-bold font-josefin">
				{@html item.description}
			</div>
		</div>
	</List>
{/if}
