<script lang="ts">
	import { imageFromAssets } from '$lib/utils';
	import type { LayoutData } from './$houdini';

	export let data: LayoutData;

	$: ({ SoirsQuery } = data);
	$: ({ ateliers = [] } = $SoirsQuery.data! ?? {});
	$: soirs = ateliers.filter((atelier) => atelier.type_d_atelier === 'soir');
</script>

{#if !$SoirsQuery.fetching}
	{#each soirs as item}
		<div class="pb-8">
			<img
				src={imageFromAssets(item.affiche) + '?width=770&quality=30'}
				alt="todo"
				class="w-full object-cover"
			/>
			<h1>
				{item.titre}
			</h1>
			<p>{@html item.description}</p>
		</div>
	{/each}
{/if}
