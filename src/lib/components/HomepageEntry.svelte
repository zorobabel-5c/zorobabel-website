<script lang="ts">
	import type { HomepageFilms$result } from '$houdini';
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

<div class="group rounded-md overflow-hidden mb-1 relative cursor-pointer">
	<a href={url}>
		<div
			class="absolute h-full w-full bg-black opacity-80 hidden group-hover:flex justify-center items-center"
		>
			<p class="font-extralight text-lg text-white text-center text-ellipsis px-2">
				{!isEpisode(entry) ? title : `${getTitle(entry.series)} - EP${entry.numero} ${title}`}
			</p>
		</div>
		<img
			src={entry.video?.thumbnail_url}
			alt="todo"
			class:aspect-video={index % 2 !== 0}
			class:aspect-square={index % 2 === 0}
			class="w-full object-cover"
		/>
	</a>
</div>
