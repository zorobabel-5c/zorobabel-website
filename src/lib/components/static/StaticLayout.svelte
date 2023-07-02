<section id="zorobabel" class="grid lg:grid-cols-[146px_1fr]">
	<aside
		class="grid lg:grid-cols-[1fr] md:lg:grid-cols-[1fr] lg:border-none md:border-r border-solid border-gray-800 md:mr-4 font-josefin"
	>
		<nav
			class="sidenav lg:border-r border-solid border-gray-800 text-center"
			data-sveltekit-preload-data="tap"
		>
			<ul class="[&>li]:mb-12 overflow-y-scroll lg:h-[calc(100vh-120px)] md:h-[calc(50vh-60px)]">
				<slot name="sidemenu" />
			</ul>
		</nav>
	</aside>
	<main class="[&_p]:pb-5 [&_a]:text-red-500 text-sm [&_h1]:font-bold [&_h2]:font-bold">
		<slot name="content" />
	</main>
</section>
