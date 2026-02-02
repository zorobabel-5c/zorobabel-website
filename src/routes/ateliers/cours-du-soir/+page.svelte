<script lang="ts">
	import { isFutureDate } from '$lib/utils/date';
	import type { LayoutData } from '../$houdini';

	import Events from '$lib/components/Events.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: LayoutData;
	}

	let { data }: Props = $props();

	let { AteliersQuery } = $derived(data);
	let { ateliers = [] } = $derived($AteliersQuery.data! ?? {});
	let events = $derived(ateliers
		.filter((atelier) => atelier.type_d_atelier === 'soir')
		.filter((atelier) => isFutureDate(atelier.date_de_peremption)));

	let message = `Il n'y a pas de cours du soir programmé.`;
</script>

<PageHead head={'cours du soir'} />

{#if !$AteliersQuery.fetching}
	<Events {events} noEventMessage={message} />
{/if}
