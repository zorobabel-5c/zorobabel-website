<script lang="ts">
	import List from '$lib/components/List.svelte';
	import { imageFromAssets } from '$lib/utils';
	import type { PageData } from '../événements/$houdini';

	export let data: PageData;

	$: ({ EvenementFilms } = data);
	$: ({ evenements_films = [] } = $EvenementFilms.data! ?? {});
</script>

{#if !$EvenementFilms.fetching}
	<List
		items={evenements_films}
		let:item
		getKey={(f) => f.numero.toString()}
		shouldScrollIntoView={false}
	>
		<div class="flex gap-4 mb-4">
			<img src={imageFromAssets(item.logo)} alt="logo" class="w-10" />
			<p>{item.numero}. {item.description}</p>
		</div>
	</List>
{/if}
