<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from '../evenements/$houdini';
	import { isPastDate } from '$lib/utils/date';

	import StaticLayout from '$lib/components/static/StaticLayout.svelte';
	import Events from '$lib/components/Events.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: LayoutData;

	$: ({ EventsQuery } = data);
	$: ({ evenements = [] } = $EventsQuery.data! ?? {});
	$: events = evenements.filter((evenement) => isPastDate(evenement.date_de_peremption));
</script>

<PageHead head={'événements'} />

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
			<Events {events} />
		{/if}
	</div>
</StaticLayout>
