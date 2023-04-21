<script>
	import '../app.css';
	import { page } from '$app/stores';
	let showSideNav = false;
	let toggleSideNav = () => (showSideNav = !showSideNav);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main class="px-[10vw]">
	<nav class="flex border-b relative border-gray-800 border-solid mb-8 pt-4">
		<a href="/">
			<img
				src="https://backend-zorobabel.5c.be/assets/62c21e86-8e74-4f41-afd0-a243b80f7b5a"
				alt=""
				class="aspect-square w-[70px]"
			/>
		</a>
		<div class="flex-1" />
		<button
			on:click={toggleSideNav}
			id="side_nav_toggle"
			class="md:hidden [&>span]:inline-block [&>span]:w-8 [&>span]:h-1 [&>span]:bg-gray-900 flex flex-col gap-1 self-center"
			class:hidden={showSideNav}
		>
			<span />
			<span />
			<span />
		</button>

		<div
			on:click={toggleSideNav}
			id="side_nav_backdrop"
			class:hidden={!showSideNav}
			class="md:hidden left-0 top-0 h-[100vh] w-[100vw] fixed opacity-0 z-10"
		/>
		<ul
			class="md:flex md:justify-around md:items-center md:pt-4 md:w-full md:h-[unset] md:flex-row md:relative flex-col absolute right-0 top-0 bg-white w-[clamp(200px,60vw,300px)] z-20 h-[50vh] justify-start shadow-sm [&>li]:mb-4 [&>li]:px-4"
			class:hidden={!showSideNav}
			on:click={toggleSideNav}
		>
			<li><a href="/">zorobabel</a></li>
			<li>
				<a href="/films" class:text-red-500={$page.url.pathname.startsWith('/films')}>films</a>
			</li>
			<li>
				<a href="/appels" class:text-red-500={$page.url.pathname.startsWith('/appels')}>
					<p>appels à projet</p>
					<p>calls for proposal</p>
				</a>
			</li>
			<li>
				<a href="/ateliers" class:text-red-500={$page.url.pathname.startsWith('/ateliers')}
					>ateliers</a
				>
			</li>
			<li>
				<a href="/événements" class:text-red-500={$page.url.pathname.startsWith('/événements')}
					>événements</a
				>
			</li>
			<li>search</li>
		</ul>
		<br />
	</nav>
	<section id="content">
		<slot />
	</section>
</main>
