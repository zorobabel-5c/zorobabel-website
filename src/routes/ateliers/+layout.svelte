<script lang="ts">
	import AteliersLayout from '$lib/components/layouts/AteliersLayout.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<AteliersLayout>
	{#snippet content()}
		<div >
			{@render children?.()}
		</div>
	{/snippet}
</AteliersLayout>
