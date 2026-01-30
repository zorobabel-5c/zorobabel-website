<script lang="ts">
	import ZorobabelLayout from '$lib/components/layouts/ZorobabelLayout.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<ZorobabelLayout>
	{#snippet content()}
		<div >
			{@render children?.()}
		</div>
	{/snippet}
</ZorobabelLayout>
