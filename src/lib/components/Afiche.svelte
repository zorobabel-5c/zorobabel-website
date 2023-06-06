<script lang="ts">
	import type { HomepageFilms$result } from '$houdini';
	import { imageFromAssets } from '$lib/utils';
	import { isAtelier, isAuteur, isEvenement } from '$lib/utils';
	import { getTitle, encodeTitle } from '$lib/utils';

	export let entry:
		| HomepageFilms$result['evenements'][number]
		| HomepageFilms$result['ateliers'][number]
		| HomepageFilms$result['auteurs'][number];
	$: title = getTitle(entry);
	$: baseUrl = isEvenement(entry)
		? `/événements/`
		: isAtelier(entry)
		? `/ateliers/`
		: isAuteur(entry)
		? '/films/auteurs/'
		: '';
	$: url = `${baseUrl}${encodeTitle(title)}`;
</script>

<div class="group overflow-hidden mb-1 relative cursor-pointer">
	<a href={title ? url : '#'}>
		<div
			class="absolute h-full w-full bg-black opacity-80 hidden group-hover:flex justify-center items-center"
		>
			<p class="font-extralight text-lg text-white text-center text-ellipsis px-2">
				{title}
			</p>
		</div>
		{#if entry.affiche}
			<img src={imageFromAssets(entry.affiche)} alt="todo" class="w-full object-cover" />
		{/if}
	</a>
</div>
