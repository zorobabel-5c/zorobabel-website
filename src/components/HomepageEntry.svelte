<script lang="ts">
	import type { HomepageFilms$result } from '$houdini';

	export let entry: HomepageFilms$result[keyof HomepageFilms$result][number];
	export let index: number;
	$: isAtelier = 'titre' in entry;
	$: title = 'titre' in entry ? entry.titre : 'titre_original' in entry ? entry.titre_original : '';
	$: url = isAtelier
		? `/films/ateliers/${encodeURI(title ?? '')}`
		: `/films/auteurs/${encodeURI(title ?? '')}`;
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
