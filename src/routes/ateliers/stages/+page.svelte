<script lang="ts">
	import Events from '$lib/components/Events.svelte';
	import { isPastDate } from '$lib/utils/date';
	import type { LayoutData } from '../$houdini';

	export let data: LayoutData;

	$: ({ AteliersQuery } = data);
	$: ({ ateliers = [] } = $AteliersQuery.data! ?? {});
	$: events = ateliers
		.filter((atelier) => atelier.type_d_atelier === 'enfants')
		.filter((atelier) => isPastDate(atelier.date_de_peremption));

	let message = `Il n'y a pas de stage programmé.`;
</script>

{#if !$AteliersQuery.fetching}
	<Events {events} noEventMessage={message} />
{/if}
