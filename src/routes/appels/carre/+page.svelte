<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import type { PageData } from './$houdini';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { CarreQuery } = $derived(data);
	let { carre_des_auteurs } = $derived($CarreQuery.data! ?? {});
</script>

<PageHead head={'résidence au carré'} />

{#if !$CarreQuery.fetching}
	<div>{@html carre_des_auteurs?.contenu ?? ''}</div>
{/if}
