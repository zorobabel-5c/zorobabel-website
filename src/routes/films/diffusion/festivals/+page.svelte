<script lang="ts">
	import type { PageData } from '../festival/$houdini';
	export let data: PageData;

	$: ({ FestivalsQuery } = data);
	$: ({ festivals } = $FestivalsQuery.data! ?? {});
</script>

{#if !$FestivalsQuery.fetching}
	<p class="overflow-y-scroll max-h-[85vh]">{@html festivals?.liste ?? ''}</p>
{/if}
