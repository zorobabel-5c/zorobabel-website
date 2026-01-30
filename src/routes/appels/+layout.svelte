<script lang="ts">
	import AppelsLayout from '$lib/components/layouts/AppelsLayout.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<AppelsLayout>
	{#snippet content()}
		<div >
			{@render children?.()}
		</div>
	{/snippet}
</AppelsLayout>
