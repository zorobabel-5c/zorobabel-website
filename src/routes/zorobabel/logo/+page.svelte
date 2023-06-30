<script lang="ts">
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ LogoQuery } = data);
	$: ({ le_logo } = $LogoQuery.data! ?? {});
</script>

{#if !$LogoQuery.fetching}
	<div>{@html le_logo?.contenu ?? ''}</div>
{/if}
