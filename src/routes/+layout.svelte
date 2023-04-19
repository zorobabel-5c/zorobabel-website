<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<main class="px-[10vw]">
	<nav>
		<ul class="flex justify-around items-center pt-4 w-full border-b border-gray-800 border-solid">
			<li>
				<a href="/">
					<img
						src="https://backend-zorobabel.5c.be/assets/62c21e86-8e74-4f41-afd0-a243b80f7b5a"
						alt=""
						class="aspect-square w-[70px]"
					/>
				</a>
			</li>
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
