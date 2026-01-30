<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import type { PageData } from './$houdini';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { ProductionQuery } = $derived(data);
	let { production } = $derived($ProductionQuery.data! ?? {});
</script>

<PageHead head={'production'} />

{#if !$ProductionQuery.fetching}
	<div>{@html production?.contenu ?? ''}</div>
{/if}
