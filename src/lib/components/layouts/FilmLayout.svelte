<script lang="ts">
	import { page } from '$app/state';

	import ArrowDown from '../icons/ArrowDown.svelte';
	import ArrowUp from '../icons/ArrowUp.svelte';
	interface Props {
		nav?: import('svelte').Snippet;
		content?: import('svelte').Snippet;
	}

	let { nav, content }: Props = $props();

	let uppercasify =
		$derived(page.url.pathname.startsWith('/films/auteurs') ||
		page.url.pathname.startsWith('/films/series') ||
		page.url.pathname.startsWith('/films/ateliers'));

	let element: HTMLElement = $state();

	let showTop = $state(false);
	let showBottom = $state(true);

	function handleScroll() {
		if (element.scrollTop === 0) {
			// Scroll is at the start of the element
			showTop = false;
		} else {
			showTop = true;
		}

		if (element.scrollTop + element.offsetHeight >= element.scrollHeight) {
			// Scroll is at the end of the element
			showBottom = false;
		} else {
			showBottom = true;
		}
	}
</script>

<section id="films" class="mm:grid mm:grid-cols-8 lg:grid-cols-films">
	<aside
		class="grid grid-cols-8 grid-flow-dense grid-rows-[290px_1fr] lg:grid-rows-1 font-josefin mm:col-span-3 lg:col-span-1 mm:h-[calc(89vh-15px)] mm:border-r border-solid border-gray-800 lg:sticky lg:top-[101px]"
	>
		<nav
			id="sidenav"
			class="col-span-3 mm:col-span-8 lg:col-span-3 border-r mm:border-[0] lg:border-r border-solid border-gray-800 text-center"
			data-sveltekit-preload-data="tap"
		>
			<ul class="[&>li]:mb-3 lg:[&>li]:mb-12 mx-2">
				<li>
					<a
						href="/films/auteurs"
						class:text-red-500={page.url.pathname.startsWith('/films/auteurs')}
					>
						<p>films d'auteur</p>
						<p class="italic -mt-1">author's films</p>
					</a>
				</li>
				<li>
					<a
						href="/films/series"
						class:text-red-500={page.url.pathname.startsWith('/films/series')}
					>
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
			</ul>
		</nav>
		<div class="col-span-8 mm:col-span-8 lg:hidden my-3 h-[1px] bg-gray-800 w-[90%] mx-auto"></div>
		<nav
			id="second_sidenav"
			class:uppercase={uppercasify}
			class:text-[11px]={uppercasify}
			class="col-span-5 mm:col-span-8 lg:col-span-5 overflow-y-scroll"
			bind:this={element}
			onscroll={handleScroll}
		>
			<div class={showTop ? 'sticky top-0 bg-white flex items-center justify-center' : 'hidden'}>
				<ArrowUp classes="-mt-[11px]" />
			</div>
			{@render nav?.()}
			<div
				class={showBottom ? 'sticky bottom-0 bg-white flex items-center justify-center' : 'hidden'}
			>
				<ArrowDown classes="-mb-[11px]" />
			</div>
		</nav>
	</aside>
	<main class="mm:col-span-5 lg:col-start-2 lg:col-end-3 text-sm mx-2">
		{@render content?.()}
	</main>
</section>
