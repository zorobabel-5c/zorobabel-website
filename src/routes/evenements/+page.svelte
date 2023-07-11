<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from '../evenements/$houdini';
	import { isFutureDate } from '$lib/utils/date';

	import BaseLayout from '$lib/components/layouts/BaseLayout.svelte';
	import Events from '$lib/components/Events.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: LayoutData;

	$: ({ EventsQuery } = data);
	$: ({ evenements = [] } = $EventsQuery.data! ?? {});
	$: events = evenements.filter((evenement) => isFutureDate(evenement.date_de_peremption));
</script>

<PageHead head={'événements'} />

<BaseLayout>
	<svelte:fragment slot="sidemenu">
		<li>
			<a href="evenements" class:text-red-500={$page.url.pathname.startsWith('evenements')}>
				<p>événements</p>
			</a>
		</li>
	</svelte:fragment>
	<div slot="content">
		{#if !$EventsQuery.fetching}
			<Events {events} />
		{/if}
	</div>
</BaseLayout>
