<script lang="ts">
	import type { PageData } from '../partenariats/$houdini';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: PageData;

	$: ({ PartenariatsQuery } = data);
	$: ({ partenariats } = $PartenariatsQuery.data! ?? {});
</script>

<PageHead head={'partenariats'} />

{#if !$PartenariatsQuery.fetching}
	<p class="overflow-y-scroll max-h-[85vh]">{@html partenariats?.liste ?? ''}</p>
{/if}
