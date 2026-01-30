<script lang="ts">
	import { page } from '$app/state';
	import BaseLayout from '$lib/components/layouts/BaseLayout.svelte';
	interface Props {
		content?: import('svelte').Snippet;
	}

	let { content }: Props = $props();

	const content_render = $derived(content);
</script>

<BaseLayout>
	{#snippet sidemenu()}
	
			<li>
				<a href="stages" class:text-red-500={page.url.pathname.startsWith('/evenements')}>
					<p>événements</p>
				</a>
			</li>
		
	{/snippet}
	{#snippet content()}
		<div >
			{@render content_render?.()}
		</div>
	{/snippet}
</BaseLayout>
