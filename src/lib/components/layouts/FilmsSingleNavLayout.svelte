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
				<a href="/films/auteurs" class:text-red-500={page.url.pathname.startsWith('/films/auteurs')}>
					<p>films d'auteur</p>
					<p class="italic -mt-1">author's films</p>
				</a>
			</li>
			<li>
				<a href="/films/series" class:text-red-500={page.url.pathname.startsWith('/films/series')}>
					<p>séries créatives</p>
					<p class="italic -mt-1">creative series</p>
				</a>
			</li>
			<li>
				<a
					href="/films/ateliers"
					class:text-red-500={page.url.pathname.startsWith('/films/ateliers')}
				>
					<p>films d’atelier</p>
					<p class="italic -mt-1">workshop's films</p>
				</a>
			</li>
			<li>
				<a
					href="/films/diffusion"
					class:text-red-500={page.url.pathname.startsWith('/films/diffusion')}
				>
					<p>diffusion</p>
				</a>
			</li>
			<li>
				<a href="/films/liens" class:text-red-500={page.url.pathname.startsWith('/films/liens')}>
					<p>liens</p>
					<p class="italic -mt-1">links</p>
				</a>
			</li>
			<li>
				<a
					href="/films/catalogue"
					class:text-red-500={page.url.pathname.startsWith('/films/catalogue')}
				>
					<p>catalogue</p>
				</a>
			</li>
		
	{/snippet}
	{#snippet content()}
		<div >
			{@render content_render?.()}
		</div>
	{/snippet}
</BaseLayout>
