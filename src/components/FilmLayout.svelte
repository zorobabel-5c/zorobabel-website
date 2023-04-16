<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		let active = $page.url.pathname.split('/')[3];
		document.getElementById(active)?.scrollIntoView();
	});
</script>

<section id="films" class="grid lg:grid-cols-[500px_1fr] md:grid-cols-[250px_1fr]">
	<aside
		class="grid lg:grid-cols-[1fr_1fr] md:lg:grid-cols-[1fr] lg:border-none md:border-r border-solid border-gray-800 md:mr-4"
	>
		<nav
			id="sidenav"
			class="lg:border-r border-solid border-gray-800 lg:mr-4"
			data-sveltekit-preload-data="tap"
		>
			<ul class="[&>li]:mb-8 overflow-y-scroll lg:h-[calc(100vh-120px)] md:h-[calc(50vh-60px)]">
				<li>
					<a
						href="/films/auteurs"
						class:text-red-500={$page.url.pathname.startsWith('/films/auteurs')}
					>
						<p>films d'auteur</p>
						<p>author's films</p>
					</a>
				</li>
				<li>
					<a
						href="/films/series"
						class:text-red-500={$page.url.pathname.startsWith('/films/series')}
					>
						<p>séries créatives</p>
						<p>creative series</p>
					</a>
				</li>
				<li>
					<a
						href="/films/ateliers"
						class:text-red-500={$page.url.pathname.startsWith('/films/ateliers')}
					>
						<p>films d’atelier</p>
						<p>workshop's films</p>
					</a>
				</li>
				<li>
					<a href="/diffusion" class:text-red-500={$page.url.pathname.startsWith('/diffusion')}>
						<p>diffusion</p>
					</a>
				</li>
				<li>
					<a href="/liens" class:text-red-500={$page.url.pathname.startsWith('/liens')}>
						<p>liens</p>
						<p>links</p>
					</a>
				</li>
				<li>
					<a href="/catalogue" class:text-red-500={$page.url.pathname.startsWith('/catalogue')}>
						<p>catalogue</p>
					</a>
				</li>
			</ul>
		</nav>
		<div class="lg:hidden md:block h-[1px] bg-gray-800 w-[90%] my-8" />
		<nav
			id="second_sidenav"
			class="lg:border-r border-solid border-gray-800 lg:mr-4 [&>ul>li]:mb-8 lg:[&>ul]:h-[calc(100vh-120px)] [&>ul]:md:h-[calc(50vh-60px)] [&>ul]:overflow-y-scroll"
		>
			<slot name="nav" />
		</nav>
	</aside>
	<main>
		<slot name="content" />
	</main>
</section>
