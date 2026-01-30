<script lang="ts">
	import { getTitle, imageFromAssets } from '$lib/utils';
	import type { PageData } from './$houdini';

	import List from '$lib/components/List.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

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

	let { PrixQuery } = $derived(data);
	let { prix = [] } = $derived($PrixQuery.data! ?? {});
	let flattenedPrix = $derived(prix
		.filter((n): n is (typeof prix)[number] => n !== null)
		.filter((n): n is NonNullPrixEntry => !!n.film_awarded?.[0]?.item)
		.map(({ numero, description, film_awarded }) => ({
			numero,
			description,
			...film_awarded?.[0]?.item
		}))
		.sort((a, b) => b.numero - a.numero));
</script>

<PageHead head={'prix'} />

{#if !$PrixQuery.fetching}
	<List items={flattenedPrix}  getKey={getTitle}>
		{#snippet children({ item })}
				<div class="flex gap-4 mb-4">
				<img
					src={imageFromAssets(item.logo) + '&width=40'}
					alt="logo du film '{item.title}'"
					class="object-contain"
				/>
				<p>{item.numero} <i>{item.title}</i> : {item.description}</p>
			</div>
					{/snippet}
		</List>
{/if}
