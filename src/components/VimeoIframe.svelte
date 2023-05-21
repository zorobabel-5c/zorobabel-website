<script lang="ts">
	import type { FilmDAuteurs$result } from '$houdini/artifacts/FilmDAuteurs';
	export let video: FilmDAuteurs$result['films'][number]['video'] | undefined;
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
		border-radius: 3px;
		margin: 2rem 0;

		& > :global(iframe) {
			width: 100%;
			height: 100%;
		}
	}
</style>
