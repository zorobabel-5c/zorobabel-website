<script lang="ts">
	import { page } from '$app/stores';
	import StaticLayout from '$lib/components/static/StaticLayout.svelte';
	import { imageFromAssets } from '$lib/utils';
	import type { LayoutData } from '../événements/$houdini';

	export let data: LayoutData;

	function formatDate(date_de_peremption: string) {
		const date = new Date(date_de_peremption);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear().toString();
		return `${day}/${month}/${year}`;
	}

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
				<div class="border-b border-black mb-5">
					<img
						src={imageFromAssets(item.affiche) + '?width=654&quality=30'}
						alt="todo"
						class="w-full object-cover"
					/>
					<div class="my-4">
						<h1>
							{item.titre} <span class="font-josefin">- {formatDate(item.date_de_peremption)}</span>
						</h1>
					</div>
					{@html item.description}
				</div>
			{/each}
		{/if}
	</div>
</StaticLayout>
