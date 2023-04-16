<script lang="ts">
	import type { HomepageFilms$result } from '$houdini';

	export let index: number;
	export let entry:
		| HomepageFilms$result['evenements'][number]
		| HomepageFilms$result['ateliers'][number]
		| HomepageFilms$result['auteurs'][number];
	// TODO: fix links
	// let title = "SO"
	// $: isAtelier = 'titre' in entry;
	$: title = 'titre' in entry ? entry.titre : 'titre_original' in entry ? entry.titre_original : '';
	// $: url = isAtelier
	// 	? `/films/ateliers/${encodeURI(title ?? '')}`
	// 	: `/films/auteurs/${encodeURI(title ?? '')}`;
</script>

<div class="group rounded-md overflow-hidden mb-1 relative cursor-pointer">
	<a href={'#'}>
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
