<script lang="ts">
	import type { HomepageFilms$result } from '$houdini';
	import { isAuteur, isEpisode, isFilmDAtelier } from '../utils/guards';

	export let entry:
		| HomepageFilms$result['films_d_ateliers'][number]
		| HomepageFilms$result['auteurs'][number]
		| HomepageFilms$result['episodes'][number];
	export let index: number;
	$: title = isAuteur(entry)
		? entry.titre_original
		: isEpisode(entry)
		? entry.series?.titre
		: isFilmDAtelier(entry)
		? entry.titre
		: '';
	$: path = isAuteur(entry)
		? '/auteurs'
		: isFilmDAtelier(entry)
		? '/ateliers'
		: isEpisode(entry)
		? '/series'
		: '';
	$: url = `/films${path}/${encodeURI(title ?? '')}`;
</script>

<div class="group rounded-md overflow-hidden mb-1 relative cursor-pointer">
	<a href={url}>
		<div
			class="absolute h-full w-full bg-black opacity-80 hidden group-hover:flex justify-center items-center"
		>
			<p class="font-extralight text-lg text-white text-center text-ellipsis px-2">
				{title}
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
