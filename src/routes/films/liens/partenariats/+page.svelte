<script lang="ts">
	import type { PageData } from '../partenariats/$houdini';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { PartenariatsQuery } = $derived(data);
	let { partenariats } = $derived($PartenariatsQuery.data! ?? {});
</script>

<PageHead head={'partenariats'} />

{#if !$PartenariatsQuery.fetching}
	<p class="overflow-y-scroll max-h-[85vh]">{@html partenariats?.liste ?? ''}</p>
{/if}
