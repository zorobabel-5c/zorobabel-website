<script lang="ts">
	import { getTitle, imageFromAssets } from '$lib/utils';
	import type { PageData } from './$houdini';

	import List from '$lib/components/List.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: PageData;

	type PrixEntry = (typeof prix)[number];
	type Item = NonNullable<
		NonNullable<NonNullable<(typeof prix)[number]['film_awarded']>[number]>['item']
	>;
	interface NonNullPrixEntry extends PrixEntry {
		film_awarded: [
			{
				item: Item;
			}
		];
	}

	$: ({ PrixQuery } = data);
	$: ({ prix = [] } = $PrixQuery.data! ?? {});
	$: flattenedPrix = prix
		.filter((n): n is (typeof prix)[number] => n !== null)
		.filter((n): n is NonNullPrixEntry => !!n.film_awarded?.[0]?.item)
		.map(({ numero, description, film_awarded }) => ({
			numero,
			description,
			...film_awarded?.[0]?.item
		}))
		.sort((a, b) => a.numero - b.numero);
</script>

<PageHead head={'prix'} />

{#if !$PrixQuery.fetching}
	<List items={flattenedPrix} let:item getKey={getTitle}>
		<div class="flex gap-4 mb-4">
			<img src={imageFromAssets(item.logo)} alt="logo du film '{item.title}'" class="w-10" />
			<p>{item.numero} <i>{item.title}</i> : {item.description}</p>
		</div>
	</List>
{/if}
