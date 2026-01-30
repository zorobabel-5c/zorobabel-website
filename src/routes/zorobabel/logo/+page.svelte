<script lang="ts">
	import type { PageData } from './$houdini';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { LogoQuery } = $derived(data);
	let { le_logo } = $derived($LogoQuery.data! ?? {});
</script>

<PageHead head={'le logo'} />

{#if !$LogoQuery.fetching}
	<div>{@html le_logo?.contenu ?? ''}</div>
{/if}
