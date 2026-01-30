<script lang="ts">


	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	$: browser && goto(`/appels/production`); // This page is disabled in favor of production

	/*
	Previous call: 


	import PageHead from '$lib/components/PageHead.svelte';
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ StartQuery } = data);
	$: ({ start } = $StartQuery.data! ?? {});
	
	*/
</script>

<!--- Previous implem:


	<PageHead head={'start'} />

	{#if !$StartQuery.fetching}
		<div>{@html start?.contenu ?? ''}</div>
	{/if}

-->