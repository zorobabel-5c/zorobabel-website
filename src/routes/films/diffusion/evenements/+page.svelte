<script lang="ts">
	import { imageFromAssets } from '$lib/utils';
	import type { PageData } from '../événements/$houdini';

	import List from '$lib/components/List.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: PageData;

	$: ({ EvenementFilms } = data);
	$: ({ evenements_films = [] } = $EvenementFilms.data! ?? {});
</script>

<PageHead head={'événements (diffusion)'} />

{#if !$EvenementFilms.fetching}
	<List
		items={evenements_films}
		let:item
		getKey={(f) => f.numero.toString()}
		shouldScrollIntoView={false}
	>
		<div class="flex gap-4 mb-4">
			<img
				src={imageFromAssets(item.logo)}
				alt="logo de l'événement numéro {item.numero}"
				class="w-10"
			/>
			<p>{item.numero}. {item.description}</p>
		</div>
	</List>
{/if}
