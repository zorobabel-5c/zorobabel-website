<script lang="ts">
	import type { PageData } from './$houdini';
	import PageHead from '$lib/components/PageHead.svelte';

	export let data: PageData;

	$: ({ LogoQuery } = data);
	$: ({ le_logo } = $LogoQuery.data! ?? {});
</script>

<PageHead head={'le logo'} />

{#if !$LogoQuery.fetching}
	<div>{@html le_logo?.contenu ?? ''}</div>
{/if}
