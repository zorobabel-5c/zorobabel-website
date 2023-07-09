<script lang="ts">
	import { page } from '$app/stores';
	import FilmSecondaryLayout from '$lib/components/FilmSecondaryLayout.svelte';
	import PageHead from '$lib/components/PageHead.svelte';
</script>

<PageHead head={'catalogue'} />

<FilmSecondaryLayout>
	<svelte:fragment slot="nav">
		<ul class="[&>li]:mb-3 lg:[&>li]:mb-12 text-center">
			<li class:text-red-500={$page.url.pathname.endsWith('/auteurs')}>
				<a href="./auteurs">
					<p>films d’auteur</p>
					<p>author's films</p>
				</a>
			</li>
			<li class:text-red-500={$page.url.pathname.endsWith('/series')}>
				<a href="./series">
					<p>séries créatives</p>
					<p>creative series</p>
				</a>
			</li>
			<li class:text-red-500={$page.url.pathname.endsWith('/ateliers')}>
				<a href="./ateliers">
					<p>films d’atelier</p>
					<p>workshop's films</p>
				</a>
			</li>
			<li class:text-red-500={$page.url.pathname.endsWith('/commandes')}>
				<a href="./commandes">
					<p>films de commande</p>
					<p>commissionned films</p>
				</a>
			</li>
		</ul>
	</svelte:fragment>
	<div slot="content">
		<slot />
	</div>
</FilmSecondaryLayout>
