<script lang="ts">
	import type { HomepageFilms$result } from '$houdini';
	import { isAuteur, isEpisode, isFilmDAtelier } from '../utils/guards';
	import { getTitle, encodeTitle } from '../utils/string';

	export let entry:
		| HomepageFilms$result['films_d_ateliers'][number]
		| HomepageFilms$result['auteurs'][number]
		| HomepageFilms$result['episodes'][number];
	export let index: number;
	$: title = getTitle(entry);
	$: url = isAuteur(entry)
		? `/films/auteurs/${encodeTitle(title)}`
		: isEpisode(entry)
		? `/films/series/${encodeTitle(entry.series?.titre)}/episodes/${encodeTitle(title)}`
		: isFilmDAtelier(entry)
		? `/films/ateliers/${encodeTitle(title)}`
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
