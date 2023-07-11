<script lang="ts">
	import type { HomepageFilms$result } from '$houdini';
	import { showVideoModal } from '$lib/store/modals';
	import { getSlug, isAuteur, isEpisode, isFilmDAtelier } from '$lib/utils';
	import { getTitle } from '$lib/utils';

	export let entry:
		| HomepageFilms$result['films_d_ateliers'][number]
		| HomepageFilms$result['auteurs'][number]
		| HomepageFilms$result['episodes'][number];
	export let index: number;
	$: title = getTitle(entry);
	$: url = isAuteur(entry)
		? `/films/auteurs/${getSlug(entry)}`
		: isEpisode(entry)
		? `/films/series/${getSlug(entry.series)}/episodes/${getSlug(entry)}`
		: isFilmDAtelier(entry)
		? `/films/ateliers/${getSlug(entry)}`
		: '';
</script>

<div class="group overflow-hidden relative cursor-pointer font-josefin">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={() => showVideoModal.set(true)}>
		<div
			class="absolute h-full w-full bg-black opacity-80 hidden group-hover:flex justify-center items-center"
		>
			<span class="text-lg text-white text-center text-ellipsis px-2">
				{!isEpisode(entry) ? title : `${getTitle(entry.series)} - EP${entry.numero} ${title}`}
			</span>
		</div>
		<img
			src={entry.video?.thumbnail_url + '?width=300&quality=30'}
			alt="affiche du film '{title}'"
			class:aspect-video={index % 2 !== 0}
			class:aspect-square={index % 2 === 0}
			class="w-full object-cover"
		/>
	</div>
	<p class="py-2">
		film du catalogue: <span class="italic"
			>{!isEpisode(entry) ? title : `${getTitle(entry.series)} - EP${entry.numero} ${title}`}</span
		>
	</p>
</div>
