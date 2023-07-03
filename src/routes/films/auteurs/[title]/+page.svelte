<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from '../$houdini';
	import VimeoIframe from '$lib/components/VimeoIframe.svelte';
	import { imageFromAssets } from '$lib/utils';
	export let data: LayoutData;

	$: ({ FilmDAuteurs } = data);
	$: ({ films = [] } = $FilmDAuteurs.data! ?? {});
	$: currentFilm = films.find((f) => f.slug === $page.params.title);
</script>

{#if $FilmDAuteurs.data}
	<section class="overflow-y-scroll h-[calc(100vh-120px)]">
		<h1 class="text-center font-josefin uppercase">
			<span>{currentFilm?.titre_original} {currentFilm?.titre_english ? '-' : ''} </span><span
				class="italic">{currentFilm?.titre_english}</span
			>
		</h1>
		<div class="text-center">
			<span>{currentFilm?.realisation}</span>
			<span>, {currentFilm?.duree_minutes}’{currentFilm?.duree_secondes}’’</span>
			{#if currentFilm?.annee}
				<span>, {currentFilm.annee}.</span>
			{/if}
			{#if currentFilm?.coproduction}
				<span class="[&>p]:inline">
					In coproduction with {@html currentFilm.coproduction}
				</span>
			{/if}
		</div>
		<VimeoIframe video={currentFilm?.video} />
		<div class="columns-2">
			<p>{currentFilm?.synopsis_fr ?? ''}</p>
			<p>{currentFilm?.synopsis_en ?? ''}</p>
		</div>
		{#if currentFilm?.prix_obtenus_par_le_film}
			<div class="mt-4 font-light text-sm text-center px-8">
				<p>{currentFilm?.prix_obtenus_par_le_film}</p>
			</div>
		{/if}
		<div class="grid grid-cols-3 mt-4">
			<img
				src={imageFromAssets(currentFilm?.image_1) + '?width=270&quality=30'}
				class="object-cover h-full"
				alt="first"
			/>
			<img
				src={imageFromAssets(currentFilm?.image_2) + '?width=270&quality=30'}
				class="object-cover h-full"
				alt="second"
			/>
			<img
				src={imageFromAssets(currentFilm?.image_3) + '?width=270&quality=30'}
				class="object-cover h-full"
				alt="third"
			/>
		</div>
		<h1 class="font-josefin text-lg mt-3 mb-2">
			<span>{currentFilm?.titre_original} {currentFilm?.titre_english ? '-' : ''} </span>
			<span>{currentFilm?.titre_english}</span>
		</h1>
		<ul class="mb-4 grid gap-2">
			<li><b>Réalisation :</b> <span>{currentFilm?.realisation}</span></li>
			<li><b>Scénario / <i>Screenplay</i> :</b> <span>{currentFilm?.scenario}</span></li>
			<li>
				<b>Langue originale des dialogues / <i>Original language</i> :</b>
				<span>{currentFilm?.langue_originale}</span>
			</li>
			<li>
				<b>Titre anglais / <i>English title</i> :</b> <span>'{currentFilm?.titre_english}'</span>
			</li>
			<li><b>Public / <i>Audience</i> :</b> <span>{currentFilm?.public}</span></li>
			<li>
				<p><b>Synopsis / <i>Synopsis</i></b></p>
				<p>{currentFilm?.synopsis_fr}</p>
				<p>{currentFilm?.synopsis_en}</p>
			</li>
			<li><b>Images / <i>Camera</i> :</b> <span>{currentFilm?.image}</span></li>
			<li><b>Animation / <i>Animation</i> :</b> <span>{currentFilm?.animation}</span></li>
			<li><b>Montage / <i>Editing</i> :</b> <span>{currentFilm?.montage}</span></li>
			<li><b>Son / <i>Sound</i> :</b> <span>{currentFilm?.son}</span></li>
			<li><b>Voix / <i>Voices</i> :</b> <span>{currentFilm?.voix}</span></li>
			<li><b>Musique / <i>Music</i> :</b> <span>{currentFilm?.musique}</span></li>
			<li>
				<b>Format pour la sélection / <i>Selection format</i> :</b>
				<span>{currentFilm?.format}</span>
			</li>
			<li>
				<b>Durée / <i>Running time</i> :</b>
				<span>{currentFilm?.duree_minutes}'{currentFilm?.duree_secondes}"</span>
			</li>
			<li>
				<p><b>Production / <i>Production</i> :</b></p>
				<span>{currentFilm?.production}</span>
			</li>
			<li>
				<b>Contact :</b>
				<p>{@html currentFilm?.contact}</p>
			</li>
			<li>
				<b>Année de production / <i>Year of production</i> :</b>
				<span>{currentFilm?.ville} - {currentFilm?.annee}</span>
			</li>
			<li>
				<img src={imageFromAssets(currentFilm?.affiche) + '?width=800&quality=30'} alt="afiche" />
			</li>
		</ul>
	</section>
{/if}
