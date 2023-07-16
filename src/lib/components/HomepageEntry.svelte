<script lang="ts">
	import type { HomepageFilms$result } from '$houdini';
	import { showVideoModal } from '$lib/store/modals';
	import { getTitle, imageFromAssets, isEpisode } from '$lib/utils';
	import Play from './icons/Play.svelte';

	export let entry:
		| HomepageFilms$result['films_d_ateliers'][number]
		| HomepageFilms$result['auteurs'][number]
		| HomepageFilms$result['episodes'][number];
	$: title = getTitle(entry);
</script>

<div class="group overflow-hidden relative cursor-pointer font-josefin">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={() => showVideoModal.set(true)}>
		<div
			class="absolute h-full w-full bg-black opacity-80 hidden group-hover:flex justify-center items-center z-20"
		>
			<div>
				<span class="text-lg text-white text-center text-ellipsis px-2">
					{!isEpisode(entry) ? title : `${getTitle(entry.series)} - EP${entry.numero} ${title}`}
				</span>
			</div>
		</div>
		<div class="relative">
			<div>
				<img
					src={entry.video?.thumbnail_url ||
						imageFromAssets(entry.image_1) + '?width=300&quality=30'}
					alt="image du film '{title}'"
					class="w-full object-contain"
				/>
			</div>
			<div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
				<Play />
			</div>
		</div>
	</div>
	<p class="py-2">
		Film du catalogue : <span class="italic"
			>{!isEpisode(entry) ? title : `${getTitle(entry.series)} - EP${entry.numero} ${title}`}</span
		>
	</p>
</div>
