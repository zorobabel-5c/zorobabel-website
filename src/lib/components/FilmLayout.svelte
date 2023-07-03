<script lang="ts">
	import { page } from '$app/stores';

	$: uppercasify =
		$page.url.pathname.startsWith('/films/auteurs') ||
		$page.url.pathname.startsWith('/films/series') ||
		$page.url.pathname.startsWith('/films/ateliers');
</script>

<section id="films" class="grid lg:grid-cols-[380px_1fr] md:grid-cols-[250px_1fr]">
	<aside
		class="grid lg:grid-cols-[130px_1fr] md:lg:grid-cols-[1fr] lg:border-none md:border-r border-solid border-gray-800  font-josefin"
	>
		<nav
			id="sidenav"
			class="lg:border-r border-solid border-gray-800 text-center"
			data-sveltekit-preload-data="tap"
		>
			<ul class="[&>li]:mb-12 overflow-y-scroll lg:h-[calc(100vh-120px)] md:h-[calc(50vh-60px)]">
				<li>
					<a
						href="/films/auteurs"
						class:text-red-500={$page.url.pathname.startsWith('/films/auteurs')}
					>
						<p>films d'auteur</p>
						<p class="italic -mt-1">author's films</p>
					</a>
				</li>
				<li>
					<a
						href="/films/series"
						class:text-red-500={$page.url.pathname.startsWith('/films/series')}
					>
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
			</ul>
		</nav>
		<div class="lg:hidden md:block h-[1px] bg-gray-800 w-[90%] my-8" />
		<nav
			id="second_sidenav"
			class:uppercase={uppercasify}
			class:text-[11px]={uppercasify}
			class="lg:border-r border-solid border-gray-800 lg:mr-4 [&>ul>li]:mb-2 lg:[&>ul]:h-[calc(100vh-120px)] [&>ul]:md:h-[calc(50vh-60px)] [&>ul]:overflow-y-scroll"
		>
			<slot name="nav" />
		</nav>
	</aside>
	<main class="text-sm">
		<slot name="content" />
	</main>
</section>
