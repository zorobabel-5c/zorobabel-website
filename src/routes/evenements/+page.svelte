<script lang="ts">
	import { page } from '$app/state';
	import type { LayoutData } from '../evenements/$houdini';
	import { isFutureDate } from '$lib/utils/date';

	import BaseLayout from '$lib/components/layouts/BaseLayout.svelte';
	import Events from '$lib/components/Events.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: LayoutData;
	}

	let { data }: Props = $props();

	let { EventsQuery } = $derived(data);
	let { evenements = [] } = $derived($EventsQuery.data! ?? {});
	let events = $derived(evenements.filter((evenement) => isFutureDate(evenement.date_de_peremption)));
</script>

<PageHead head={'événements'} />

<BaseLayout>
	{#snippet sidemenu()}
	
			<li>
				<a href="evenements" class:text-red-500={page.url.pathname.startsWith('evenements')}>
					<p>événements</p>
				</a>
			</li>
		
	{/snippet}
	{#snippet content()}
		<div >
			{#if !$EventsQuery.fetching}
				<Events {events} />
			{/if}
		</div>
	{/snippet}
</BaseLayout>
