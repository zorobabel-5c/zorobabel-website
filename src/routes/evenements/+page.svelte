<script lang="ts">
	import { page } from '$app/stores';
	import StaticLayout from '$lib/components/static/StaticLayout.svelte';
	import { imageFromAssets } from '$lib/utils';
	import type { LayoutData } from '../événements/$houdini';

	export let data: LayoutData;

	$: ({ EventsQuery } = data);
	$: ({ evenements = [] } = $EventsQuery.data! ?? {});
</script>

<StaticLayout>
	<svelte:fragment slot="sidemenu">
		<li>
			<a href="evenements" class:text-red-500={$page.url.pathname.startsWith('evenements')}>
				<p>événements</p>
			</a>
		</li>
	</svelte:fragment>
	<div slot="content">
		{#if !$EventsQuery.fetching}
			{#each evenements as item}
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
					<p>{item.date_de_peremption}</p>
				</div>
			{/each}
		{/if}
	</div>
</StaticLayout>
