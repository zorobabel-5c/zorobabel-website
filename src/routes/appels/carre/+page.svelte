<script lang="ts">
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ CarreQuery } = data);
	$: ({ carre_des_auteurs } = $CarreQuery.data! ?? {});
</script>

{#if !$CarreQuery.fetching}
	<div>{@html carre_des_auteurs?.contenu ?? ''}</div>
{/if}
