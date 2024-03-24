<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ CarreQuery } = data);
	$: ({ carre_des_auteurs } = $CarreQuery.data! ?? {});
</script>

<PageHead head={'résidence au carré'} />

{#if !$CarreQuery.fetching}
	<div>{@html carre_des_auteurs?.contenu ?? ''}</div>
{/if}
