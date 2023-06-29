<section id="zorobabel" class="grid lg:grid-cols-[211px_1fr] md:grid-cols-[250px_1fr]">
	<aside
		class="grid lg:grid-cols-[1fr] md:lg:grid-cols-[1fr] lg:border-none md:border-r border-solid border-gray-800 md:mr-4"
	>
		<nav
			class="sidenav lg:border-r border-solid border-gray-800 text-center"
			data-sveltekit-preload-data="tap"
		>
			<ul class="[&>li]:mb-8 overflow-y-scroll lg:h-[calc(100vh-120px)] md:h-[calc(50vh-60px)]">
				<slot name="sidemenu" />
			</ul>
		</nav>
		<div class="lg:hidden md:block h-[1px] bg-gray-800 w-[90%] my-8" />
	</aside>
	<main class="max-w-[600px] pl-4">
		<slot name="content" />
	</main>
</section>
