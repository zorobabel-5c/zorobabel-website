<script lang="ts">
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ EquipeQuery } = data);
	$: ({ l_equipe } = $EquipeQuery.data! ?? {});
</script>

{#if !$EquipeQuery.fetching}
	<div>{@html l_equipe?.contenu ?? ''}</div>
{/if}
