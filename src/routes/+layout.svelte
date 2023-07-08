<script lang="ts">
	import '../app.css';
	import { SearchStore } from '$houdini';
	import { page } from '$app/stores';
	import { getTitle, truncate } from '$lib/utils';

	import List from '$lib/components/List.svelte';
	import Close from '$lib/components/icons/Close.svelte';
	import Search from '$lib/components/icons/Search.svelte';

	let showSideNav = false;
	let toggleSideNav = () => (showSideNav = !showSideNav);

	let showSearch = false;
	let searchValue = '';
	const searchStore = new SearchStore();

	const search = () => {
		if (searchValue.length > 0) {
			searchStore.fetch({ variables: { value: searchValue } });
		}
	};

	$: ({
		films_d_ateliers,
		films_de_commande,
		Films_d_auteur,
		series,
		episodes,
		ateliers,
		evenements
	} = $searchStore.data! ?? {});
	$: empty = [
		films_d_ateliers,
		films_de_commande,
		Films_d_auteur,
		series,
		episodes,
		ateliers,
		evenements
	].every((a) => a?.length === 0);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main class="relative max-w-[800px] mx-auto">
	<nav
		class="flex items-center sticky top-0 z-10 bg-white font-josefin font-normal mb-6 border-b border-gray-800 border-solid px-4"
	>
		<a href="/">
			<img
				src="https://backend-zorobabel.5c.be/assets/62c21e86-8e74-4f41-afd0-a243b80f7b5a"
				alt="logo de zorobabel"
				class="aspect-square w-[50px]"
			/>
		</a>
		<div class="flex-1" />
		<button
			on:click={toggleSideNav}
			id="side_nav_toggle"
			class="sm:hidden [&>span]:inline-block [&>span]:w-8 [&>span]:h-1 [&>span]:bg-gray-900 flex flex-col gap-1 self-center"
			class:hidden={showSideNav}
		>
			<!-- Mobile hamburger menu -->
			<span />
			<span />
			<span />
		</button>

		<div
			on:click={toggleSideNav}
			id="side_nav_backdrop"
			class:hidden={!showSideNav}
			class="sm:hidden left-0 top-0 h-[100vh] w-[100vw] fixed opacity-0 z-10"
		/>
		<ul
			class="sm:flex sm:mt-[unset] mt-8 sm:justify-around sm:items-center sm:pt-4 sm:w-full sm:h-[unset] sm:flex-row sm:relative flex-col text-center absolute right-0 top-0 bg-white w-[clamp(200px,60vw,300px)] z-20 h-[50vh] justify-start shadow-sm [&>li]:mb-4 [&>li]:px-4"
			class:hidden={!showSideNav}
			on:click={toggleSideNav}
		>
			<li>
				<a href="/zorobabel" class:text-red-500={$page.url.pathname.startsWith('/zorobabel')}>
					<p>zorobabel</p>
				</a>
			</li>
			<li>
				<a href="/films" class:text-red-500={$page.url.pathname.startsWith('/films')}>films</a>
			</li>
			<li>
				<a href="/appels" class:text-red-500={$page.url.pathname.startsWith('/appels')}>
					<p>appels à projet</p>
					<p class="italic -mt-1">calls for proposal</p>
				</a>
			</li>
			<li>
				<a href="/ateliers" class:text-red-500={$page.url.pathname.startsWith('/ateliers')}>
					<p>ateliers</p>
					<p class="italic -mt-1">workshops</p>
				</a>
			</li>
			<li>
				<a href="/evenements" class:text-red-500={$page.url.pathname.startsWith('/evenements')}>
					<p>événements</p>
					<p class="italic -mt-1">events</p>
				</a>
			</li>
			<li id="search">
				<button class="w-4" on:click={() => (showSearch = true)}>
					<Search classes="hover:text-red-500" />
				</button>
			</li>
		</ul>
		<br />
	</nav>
	<section id="content">
		<slot />
	</section>
	{#if showSearch}
		<section
			id="search"
			class="h-full w-full fixed z-10 top-0 left-0 text-white"
			on:click|self={() => (showSearch = false)}
		>
			<div class="h-full max-w-[800px] mx-auto bg-[rgb(0,0,0,0.9)]">
				<div
					class="flex justify-between align-middle border-b-white border-b border-solid px-8 py-4 bg-[rgb(0,0,0,0.9)] sticky top-0"
				>
					<!-- svelte-ignore a11y-autofocus -->
					<form
						on:submit={(e) => {
							e.preventDefault();
							search();
						}}
						class="flex justify-center items-center w-[90%]"
					>
						<input
							type="search"
							name="search"
							id="search_input"
							bind:value={searchValue}
							autofocus={showSearch}
							class="flex-1 bg-transparent text-white outline-none w-full"
						/>
					</form>
					<div
						on:click={() => (showSearch = false)}
						class="flex justify-center items-center w-[10%] z-20 cursor-pointer"
					>
						<Close classes="text-white w-7 hover:text-red-500" />
					</div>
				</div>
				{#if !$searchStore.fetching}
					<div class="overflow-y-scroll h-[min(100%,90vh)]">
						<List
							let:item={film}
							items={Films_d_auteur}
							shouldScrollIntoView={false}
							getKey={getTitle}
						>
							<p class="py-2 px-8 hover:text-red-500" on:click={() => (showSearch = false)}>
								<a href={`/films/auteurs/${film.slug}`}
									>{film.title} -

									<i class="text-sm">{truncate(film.synopsis_fr ?? '', 60)}</i>
								</a>
							</p>
						</List>
						<List
							let:item={film}
							items={films_d_ateliers}
							shouldScrollIntoView={false}
							getKey={getTitle}
						>
							<p class="py-2 px-8 hover:text-red-500" on:click={() => (showSearch = false)}>
								<a href={`/films/ateliers/${film.slug}`}
									>{film.title} -

									<i class="text-sm">{truncate(film.synopsis_fr ?? '', 60)}</i>
								</a>
							</p>
						</List>
						<List let:item={serie} items={series} shouldScrollIntoView={false} getKey={getTitle}>
							<p class="py-2 px-8 hover:text-red-500" on:click={() => (showSearch = false)}>
								<a href={`/films/series/${serie.slug}`}
									>{serie.title} -

									<i class="text-sm">{truncate(serie.synopsis_fr ?? '', 60)}</i>
								</a>
							</p>
						</List>
						<!-- {#each  films_de_commande as film}
					<a href={`/films/commande/${film.slug}`}>{film.title}</a>
				{/each} -->
						<List
							let:item={episode}
							items={episodes}
							shouldScrollIntoView={false}
							getKey={getTitle}
						>
							<p class="py-2 px-8 hover:text-red-500" on:click={() => (showSearch = false)}>
								<a href={`/films/series/${episode.series?.slug}/episodes/${episode.slug}`}
									>{episode.title} -
									<i class="text-sm">{truncate(episode.synopsis_fr ?? '', 60)}</i>
								</a>
							</p>
						</List>
						<List
							let:item={event}
							items={evenements}
							shouldScrollIntoView={false}
							getKey={getTitle}
						>
							<p class="py-2 px-8 hover:text-red-500" on:click={() => (showSearch = false)}>
								<a href={`/evenements#${event.id}`}>{event.title}</a>
							</p>
						</List>
					</div>
				{:else if empty}
					<p class="py-2 px-8"><i>Pas de résultats.</i></p>
				{:else}
					<p class="py-2 px-8"><i>Chercher un nom, un film, une série, etc.</i></p>
				{/if}
			</div>
		</section>
	{/if}
</main>
