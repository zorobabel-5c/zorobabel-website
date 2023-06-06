<script lang="ts">
	import { getVideoIframe } from '$lib/utils';

	export let src: string;
	$: details = getVideoIframe(src);
</script>

<div>
	{#await details then d}
		{@html d.html}
	{/await}
</div>
