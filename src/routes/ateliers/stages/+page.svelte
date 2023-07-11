<script lang="ts">
	import { isFutureDate } from '$lib/utils/date';
	import type { LayoutData } from '../$houdini';

	import Events from '$lib/components/Events.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: LayoutData;

	$: ({ AteliersQuery } = data);
	$: ({ ateliers = [] } = $AteliersQuery.data! ?? {});
	$: events = ateliers
		.filter((atelier) => atelier.type_d_atelier === 'enfants')
		.filter((atelier) => isFutureDate(atelier.date_de_peremption));

	let message = `Il n'y a pas de stage programmé.`;
</script>

<PageHead head={'stages enfants'} />

{#if !$AteliersQuery.fetching}
	<Events {events} noEventMessage={message} />
{/if}
