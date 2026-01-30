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
	
			<!--li>
				<a href="start" class:text-red-500={page.url.pathname.startsWith('/appels/start')}>
					<p>start</p>
				</a>
			</li-->
			<li>
				<a href="carre" class:text-red-500={page.url.pathname.startsWith('/appels/carre')}>
					<p>résidence au carré</p>
				</a>
			</li>
			<li>
				<a href="production" class:text-red-500={page.url.pathname.startsWith('/appels/production')}>
					<p>production</p>
				</a>
			</li>
		
	{/snippet}
	{#snippet content()}
		<div >
			{@render content_render?.()}
		</div>
	{/snippet}
</BaseLayout>
