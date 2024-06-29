<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ ProductionQuery } = data);
	$: ({ production } = $ProductionQuery.data! ?? {});
</script>

<PageHead head={'production'} />

{#if !$ProductionQuery.fetching}
	<div>{@html production?.contenu ?? ''}</div>
{/if}
