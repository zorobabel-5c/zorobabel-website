<script lang="ts">
	import type { PageData } from '../a-propos/$houdini';
	import PageHead from '$lib/components/PageHead.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { ProposQuery } = $derived(data);
	let { a_propos, l_equipe, contact } = $derived($ProposQuery.data! ?? {});
</script>

<PageHead head={'à propos'} />

{#if !$ProposQuery.fetching}
	<div id="contact">{@html contact?.contenu ?? ''}</div>
	<div id="a-propos">{@html a_propos?.contenu ?? ''}</div>
	<iframe
		title="map"
		width="100%"
		height="350"
		frameborder="0"
		scrolling="no"
		marginheight="0"
		marginwidth="0"
		src="https://www.openstreetmap.org/export/embed.html?bbox=4.321864843368531%2C50.81766617771769%2C4.32863473892212%2C50.82108574264538&amp;layer=hot&amp;marker=50.81937599148283%2C4.325249791145325"
	></iframe><br />
	<div id="equipe">{@html l_equipe?.contenu ?? ''}</div>
{/if}
