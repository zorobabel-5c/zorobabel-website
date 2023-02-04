<script lang="ts">
	import { interleave } from '../utils/array';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ HomepageFilms } = data);
	$: ({ ateliers, auteurs } = $HomepageFilms.data!);
	$: combined = interleave(ateliers, auteurs);
</script>

<section class="lg:columns-4 md:columns-3 sm:columns-1 gap-1">
	{#each combined as entry, i}
		<div class="border-solid border-white border-1 mb-1">
			<img
				src={entry.video?.thumbnail_url}
				alt="todo"
				class:aspect-video={i % 2 !== 0}
				class:aspect-square={i % 2 === 0}
				class="w-full object-cover rounded-md"
			/>
		</div>
	{/each}
</section>
