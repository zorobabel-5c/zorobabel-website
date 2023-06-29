<script lang="ts">
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ StartQuery } = data);
	$: ({ start } = $StartQuery.data! ?? {});
</script>

{#if !$StartQuery.fetching}
	<div class="overflow-y-scroll max-h-[85vh]">{@html start?.contenu ?? ''}</div>
{/if}
