<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	import { SearchStore } from '$houdini';
	import List from '$lib/components/List.svelte';
	import { getTitle, truncate } from '$lib/utils';

	let showSideNav = false;
	let toggleSideNav = () => (showSideNav = !showSideNav);
	const searchStore = new SearchStore();
	let searchValue = '';
	const search = () => {
		if (searchValue.length > 0) {
			searchStore.fetch({ variables: { value: searchValue } });
		}
	};
	let showSearch = false;

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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						version="1.1"
						id="Layer_1"
						viewBox="0 0 122.879 119.799"
						xml:space="preserve"
						><g
							><path
								d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z"
							/></g
						></svg
					>
				</button>
			</li>
		</ul>
		<br />
	</nav>
	<section id="content">
		<slot />
	</section>
	{#if showSearch}
		<section id="search" class="h-full w-full absolute z-10 bg-[#000000d6] top-0 left-0 text-white">
			<button
				id="search_close"
				on:click={() => (showSearch = false)}
				class="top-8 right-[10%] absolute z-20 [&>span]:absolute [&>span]:inline-block [&>span]:w-[50px] [&>span]:h-1 [&>span]:bg-white"
			>
				<span class="rotate-45" />
				<span class="-rotate-45" />
			</button>
			<div
				class="flex border-b-white border-b-2 border-solid px-8 py-4 bg-[#000000b8] sticky top-0"
			>
				<!-- svelte-ignore a11y-autofocus -->
				<form
					on:submit={(e) => {
						e.preventDefault();
						search();
					}}
					class="w-[90%]"
				>
					<input
						type="search"
						name="search"
						id="search_input"
						bind:value={searchValue}
						autofocus={showSearch}
						class="flex-1 text-2xl bg-transparent text-white outline-none w-full"
					/>
				</form>
				<!-- <button
					type="button"
					class="py-[10px] px-8 bg-white rounded-lg text-black"
					on:click={search}>Search</button
				> -->
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
					<List let:item={episode} items={episodes} shouldScrollIntoView={false} getKey={getTitle}>
						<p class="py-2 px-8 hover:text-red-500" on:click={() => (showSearch = false)}>
							<a href={`/films/series/${episode.series?.slug}/episodes/${episode.slug}`}
								>{episode.title} -
								<i class="text-sm">{truncate(episode.synopsis_fr ?? '', 60)}</i>
							</a>
						</p>
					</List>
					<List let:item={event} items={evenements} shouldScrollIntoView={false} getKey={getTitle}>
						<p class="py-2 px-8 hover:text-red-500" on:click={() => (showSearch = false)}>
							<a href={`/evenements#${event.id}`}>{event.title}</a>
						</p>
					</List>
				</div>
			{:else if empty}
				<p class="py-2 px-8"><i>No results for search query</i></p>
				<!-- {:else if $searchStore.fetching && searchValue.length > 0}
				<p class="py-2 px-8 hover:text-red-500"><i>Please wait...</i></p> -->
			{:else}
				<p class="py-2 px-8"><i>Try searching for series, films and etc.</i></p>
			{/if}
		</section>
	{/if}
</main>
