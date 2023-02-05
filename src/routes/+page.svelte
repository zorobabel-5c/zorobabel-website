<script lang="ts">
	import { sortByDateCreated } from '../utils/array';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ HomepageFilms } = data);
	$: ({ ateliers, auteurs } = $HomepageFilms.data!);
	$: combined = sortByDateCreated(ateliers, auteurs);
</script>

<section class="lg:columns-4 md:columns-3 sm:columns-1 gap-1">
	{#each combined as entry, i}
		<div class="group rounded-md overflow-hidden mb-1 relative cursor-pointer">
			<div
				class="absolute h-full w-full bg-black opacity-80 hidden group-hover:flex justify-center items-center"
			>
				<p class="font-extralight text-lg text-white text-center text-ellipsis">
					{'titre' in entry ? entry.titre : 'titre_original' in entry ? entry.titre_original : ''}
				</p>
			</div>
			<img
				src={entry.video?.thumbnail_url}
				alt="todo"
				class:aspect-video={i % 2 !== 0}
				class:aspect-square={i % 2 === 0}
				class="w-full object-cover"
			/>
		</div>
	{/each}
</section>
