<script lang="ts">
	import { getVideoIframe } from '../utils/vimeo';

	export let src: string;
	$: details = getVideoIframe(src);
</script>

<div>
	{#await details then d}
		{@html d.html}
	{/await}
</div>
