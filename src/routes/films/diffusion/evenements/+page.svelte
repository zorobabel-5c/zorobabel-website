<script lang="ts">
	import { imageFromAssets } from '$lib/utils';
	import type { PageData } from '../événements/$houdini';

	import List from '$lib/components/List.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { EvenementFilms } = $derived(data);
	let { evenements_films = [] } = $derived($EvenementFilms.data! ?? {});
</script>

<PageHead head={'événements (diffusion)'} />

{#if !$EvenementFilms.fetching}
	<List
		items={evenements_films}
		
		getKey={(f) => f.numero.toString()}
		shouldScrollIntoView={false}
	>
		{#snippet children({ item })}
				<div class="flex gap-4 mb-4">
				<img
					src={imageFromAssets(item.logo) + '&width=40'}
					alt="logo de l'événement numéro {item.numero}"
					class="object-contain"
				/>
				<p>{item.numero}. {item.description}</p>
			</div>
					{/snippet}
		</List>
{/if}
