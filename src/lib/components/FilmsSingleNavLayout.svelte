<script lang="ts">
	import { page } from '$app/stores';
	import StaticLayout from '$lib/components/static/StaticLayout.svelte';
</script>

<StaticLayout>
	<svelte:fragment slot="sidemenu">
		<li>
			<a href="/films/auteurs" class:text-red-500={$page.url.pathname.startsWith('/films/auteurs')}>
				<p>films d'auteur</p>
				<p class="italic -mt-1">author's films</p>
			</a>
		</li>
		<li>
			<a href="/films/series" class:text-red-500={$page.url.pathname.startsWith('/films/series')}>
				<p>séries créatives</p>
				<p class="italic -mt-1">creative series</p>
			</a>
		</li>
		<li>
			<a
				href="/films/ateliers"
				class:text-red-500={$page.url.pathname.startsWith('/films/ateliers')}
			>
				<p>films d’atelier</p>
				<p class="italic -mt-1">workshop's films</p>
			</a>
		</li>
		<li>
			<a
				href="/films/diffusion"
				class:text-red-500={$page.url.pathname.startsWith('/films/diffusion')}
			>
				<p>diffusion</p>
			</a>
		</li>
		<li>
			<a href="/films/liens" class:text-red-500={$page.url.pathname.startsWith('/films/liens')}>
				<p>liens</p>
				<p class="italic -mt-1">links</p>
			</a>
		</li>
		<li>
			<a
				href="/films/catalogue"
				class:text-red-500={$page.url.pathname.startsWith('/films/catalogue')}
			>
				<p>catalogue</p>
			</a>
		</li>
	</svelte:fragment>
	<div slot="content">
		<slot name="content" />
	</div>
</StaticLayout>
