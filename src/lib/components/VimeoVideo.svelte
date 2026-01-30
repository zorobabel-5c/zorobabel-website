<script lang="ts">
	import { getVideoIframe } from '$lib/utils';

	interface Props {
		src: string;
	}

	let { src }: Props = $props();
	let details = $derived(getVideoIframe(src));
</script>

<div>
	{#await details then d}
		{@html d.html}
	{/await}
</div>
