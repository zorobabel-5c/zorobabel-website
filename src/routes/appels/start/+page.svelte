<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ StartQuery } = data);
	$: ({ start } = $StartQuery.data! ?? {});
</script>

<PageHead head={'start'} />

{#if !$StartQuery.fetching}
	<div>{@html start?.contenu ?? ''}</div>
{/if}
