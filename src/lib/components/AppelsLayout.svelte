<script lang="ts">
	import { page } from '$app/stores';
</script>

<section id="films" class="grid lg:grid-cols-[500px_1fr] md:grid-cols-[250px_1fr]">
	<aside
		class="grid lg:grid-cols-[1fr_1.5fr] md:lg:grid-cols-[1fr] lg:border-none md:border-r border-solid border-gray-800 md:mr-4"
	>
		<nav
			id="sidenav"
			class="lg:border-r border-solid border-gray-800"
			data-sveltekit-preload-data="tap"
		>
			<ul class="[&>li]:mb-8 overflow-y-scroll lg:h-[calc(100vh-120px)] md:h-[calc(50vh-60px)]">
				<li>
					<a href="start" class:text-red-500={$page.url.pathname.startsWith('/appels/start')}>
						<p>start</p>
					</a>
				</li>
				<li>
					<a href="carre" class:text-red-500={$page.url.pathname.startsWith('/appels/carre')}>
						<p>le carré des auteurs</p>
					</a>
				</li>
			</ul>
		</nav>
		<div class="lg:hidden md:block h-[1px] bg-gray-800 w-[90%] my-8" />
	</aside>
	<main>
		<slot name="content" />
	</main>
</section>
