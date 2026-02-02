<script lang="ts">
	import type { HomepageFilms$result } from '$houdini';
	import { imageFromAssets } from '$lib/utils';
	import { isAtelier, isEvenement } from '$lib/utils';
	import { getTitle } from '$lib/utils';

	interface Props {
		entry: 
		| HomepageFilms$result['evenements'][number]
		| HomepageFilms$result['ateliers'][number];
	}

	let { entry }: Props = $props();

	let atelierUrl = (entry: HomepageFilms$result['ateliers'][number]) => {
		if (entry.type_d_atelier === 'enfants') {
			return `/ateliers/stages`;
		} else if (entry.type_d_atelier === 'adultes') {
			return `/ateliers/workshops`;
		} else if (entry.type_d_atelier === 'soir') {
			return `/ateliers/cours-du-soir`;
		}
	};
	let title = $derived(getTitle(entry));
	let url = $derived(isEvenement(entry) ? `/evenements/` : isAtelier(entry) ? atelierUrl(entry) : '');
</script>

<div class="group overflow-hidden relative cursor-pointer">
	<a href={title ? url : '#'}>
		<div
			class="absolute h-full w-full bg-black opacity-80 hidden group-hover:flex justify-center items-center"
		>
			<p class="text-lg text-white text-center text-ellipsis px-2">
				{title}
			</p>
		</div>
		{#if entry.affiche}
			<img
				src={imageFromAssets(entry.affiche) + '&width=300'}
				alt="affiche de '{title}'"
				class="w-full object-cover"
			/>
		{/if}
	</a>
	<p class="py-2">{title}</p>
</div>
