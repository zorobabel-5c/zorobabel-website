<script lang="ts">
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ ContactQuery } = data);
	$: ({ contact } = $ContactQuery.data! ?? {});
</script>

{#if !$ContactQuery.fetching}
	<div>{@html contact?.contenu ?? ''}</div>
{/if}
