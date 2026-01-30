<script lang="ts">
	import type { FilmDAuteurs$result } from '$houdini/artifacts/FilmDAuteurs';
	interface Props {
		video: FilmDAuteurs$result['films'][number]['video'] | undefined;
	}

	let { video }: Props = $props();
</script>

{#if video?.html}
	<div class="iframe-container" style={`aspect-ratio: ${video.width}/${video.height};`}>
		{@html video.html}
	</div>
{/if}

<style lang="scss">
	.iframe-container {
		position: relative;
		overflow: hidden;
		margin: 1rem 0 0.5rem 0;

		& > :global(iframe) {
			width: 100%;
			height: 100%;
		}
	}
</style>
