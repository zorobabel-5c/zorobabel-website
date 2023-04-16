<script lang="ts">
	import type { HomepageFilms$result } from '$houdini';
	import { isAtelier, isAuteur, isEvenement } from '../utils/guards';

	export let index: number;
	export let entry:
		| HomepageFilms$result['evenements'][number]
		| HomepageFilms$result['ateliers'][number]
		| HomepageFilms$result['auteurs'][number];
	$: title =
		isEvenement(entry) || isAtelier(entry)
			? entry.titre
			: isAuteur(entry)
			? entry.titre_original
			: '';
	$: baseUrl = isEvenement(entry)
		? `/événements/`
		: isAtelier(entry)
		? `/ateliers/`
		: isAuteur(entry)
		? '/films/auteurs/'
		: '';
	$: url = `${baseUrl}${encodeURI(title ?? '')}`;
</script>

<div class="group rounded-md overflow-hidden mb-1 relative cursor-pointer">
	<a href={title ? url : '#'}>
		<div
			class="absolute h-full w-full bg-black opacity-80 hidden group-hover:flex justify-center items-center"
		>
			<p class="font-extralight text-lg text-white text-center text-ellipsis px-2">
				{title}
			</p>
		</div>
		<img
			src={'https://backend-zorobabel.5c.be/assets/' + entry.affiche?.id}
			alt="todo"
			class:aspect-video={index % 2 !== 0}
			class:aspect-square={index % 2 === 0}
			class="w-full object-cover"
		/>
	</a>
</div>
