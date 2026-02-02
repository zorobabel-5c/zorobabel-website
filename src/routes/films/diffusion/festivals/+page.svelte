<script lang="ts">
	import type { PageData } from '../festivals/$houdini';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { FestivalsQuery } = $derived(data);
	let { festivals } = $derived($FestivalsQuery.data! ?? {});
</script>

<PageHead head={'festivals'} />

{#if !$FestivalsQuery.fetching}
	<p class="overflow-y-scroll max-h-[85vh]">{@html festivals?.liste ?? ''}</p>
{/if}
