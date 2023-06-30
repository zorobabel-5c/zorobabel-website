<script lang="ts">
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ ProposQuery } = data);
	$: ({ a_propos } = $ProposQuery.data! ?? {});
</script>

{#if !$ProposQuery.fetching}
	<div>{@html a_propos?.contenu ?? ''}</div>
{/if}
