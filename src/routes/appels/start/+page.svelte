<script lang="ts">
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ StartQuery } = data);
	$: ({ start } = $StartQuery.data! ?? {});
</script>

{#if !$StartQuery.fetching}
	<div>{@html start?.contenu ?? ''}</div>
{/if}
