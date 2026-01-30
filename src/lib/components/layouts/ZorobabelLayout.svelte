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
				<a href="contact" class:text-red-500={page.url.pathname.startsWith('/zorobabel/contact')}>
					<p>contact</p>
				</a>
			</li>
			<li>
				<a href="contact#a-propos" class:text-red-500={page.url.pathname.endsWith('#a-propos')}>
					<p>à propos</p>
				</a>
			</li>
			<li>
				<a href="contact#equipe" class:text-red-500={page.url.pathname.startsWith('#equipe')}>
					<p>l'équipe</p>
					<p class="italic -mt-1">the team</p>
				</a>
			</li>
			<li>
				<a href="logo" class:text-red-500={page.url.pathname.startsWith('/zorobabel/logo')}>
					<p>le logo</p>
					<p class="italic -mt-1">the logo</p>
				</a>
			</li>
		
	{/snippet}
	{#snippet content()}
		<div >
			{@render content_render?.()}
		</div>
	{/snippet}
</BaseLayout>
