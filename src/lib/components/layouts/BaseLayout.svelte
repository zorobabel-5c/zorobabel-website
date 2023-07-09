<section id="zorobabel" class="grid md:grid-cols-[146px_1fr]">
	<nav
		class="col-span-2 md:col-span-1 font-josefin mx-4 md:sticky md:top-[101px] md:h-[calc(97vh-90px)] md:border-r border-solid border-gray-800 text-center"
		data-sveltekit-preload-data="tap"
	>
		<ul
			class="[&>li]:mb-3 md:[&>li]:mb-12 flex flex-row md:flex-col flex-wrap [&>li]:basis-1/4 [&>li]:grow justify-between items-center"
		>
			<slot name="sidemenu" />
		</ul>
	</nav>
	<main
		class="col-span-2 md:col-span-1 overflow-y-scroll mx-4 [&_p]:pb-5 [&_a]:text-red-500 text-sm [&_h1]:font-bold [&_h2]:font-bold"
	>
		<slot name="content" />
	</main>
</section>
