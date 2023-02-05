<section id="films" class="grid lg:grid-cols-[500px_1fr] md:grid-cols-[250px_1fr]">
	<aside
		class="grid lg:grid-cols-[1fr_1fr] md:lg:grid-cols-[1fr] lg:border-none md:border-r border-solid border-gray-800 md:mr-4"
	>
		<nav class="lg:border-r border-solid border-gray-800 lg:mr-4">
			<ul id="sidenav">
				<li>
					<a href="../auteurs">
						<p>films d'auteur</p>
						<p>author's films</p>
					</a>
				</li>
				<li>
					<a href="/series">
						<p>séries créatives</p>
						<p>creative series</p>
					</a>
				</li>
				<li>
					<a href="../ateliers">
						<p>films d’atelier</p>
						<p>workshop's films</p>
					</a>
				</li>
				<li>
					<a href="/diffusion">
						<p>diffusion</p>
					</a>
				</li>
				<li>
					<a href="/liens">
						<p>liens</p>
						<p>links</p>
					</a>
				</li>
				<li>
					<a href="/catalogue">
						<p>catalogue</p>
					</a>
				</li>
			</ul>
		</nav>
		<div class="lg:hidden md:block h-[1px] bg-gray-800 w-[90%] my-8" />
		<nav class="lg:border-r border-solid border-gray-800 lg:mr-4">
			<slot name="nav" />
		</nav>
	</aside>
	<main>
		<slot name="content" />
	</main>
</section>

<style lang="scss">
	#sidenav > li {
		margin-bottom: 1rem;
	}
</style>
