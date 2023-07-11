<script lang="ts">
	import { page } from '$app/stores';
	import { imageFromAssets } from '$lib/utils';
	import type { LayoutData } from '../$houdini';

	import VimeoIframe from '$lib/components/VimeoIframe.svelte';
	import PageHead from '$lib/components/PageHead.svelte';
	import AngleRight from '$lib/components/icons/AngleRight.svelte';
	import AngleLeft from '$lib/components/icons/AngleLeft.svelte';
	import Close from '$lib/components/icons/Close.svelte';

	export let data: LayoutData;

	$: ({ FilmDAuteurs } = data);
	$: ({ films = [] } = $FilmDAuteurs.data! ?? {});
	$: currentFilm = films.find((f) => f.slug === $page.params.title);

	let showGalleryModal = false;
	let currentIndex: number;

	const handleImage = (event: Event) => {
		currentIndex = event.target?.dataset.listIndex;
		showGalleryModal = true;
	};

	$: images = [
		currentFilm?.image_1,
		currentFilm?.image_2,
		currentFilm?.image_3,
		currentFilm?.affiche
	];

	$: prev = () => {
		currentIndex--;
	};
	$: next = () => {
		currentIndex++;
	};

	$: console.log(currentIndex);
</script>

<PageHead head={currentFilm?.titre_original} />

{#if $FilmDAuteurs.data}
	<section class="mm:overflow-y-scroll h-[calc(100vh-120px)]">
		<h1 class="text-center font-josefin uppercase">
			<span>{currentFilm?.titre_original} {currentFilm?.titre_english ? '-' : ''} </span>
			<span class="italic font-light">{currentFilm?.titre_english}</span>
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
		<div class="grid grid-cols-3 mt-4 cursor-pointer">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				on:click={handleImage}
				src={imageFromAssets(images[0]) + '?width=270&quality=30'}
				class="object-cover h-full"
				alt="image 1 du film '{currentFilm?.titre_original}'"
				data-list-index={0}
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				on:click={handleImage}
				data-list-index={1}
				src={imageFromAssets(images[1]) + '?width=270&quality=30'}
				class="object-cover h-full"
				alt="image 2 du film '{currentFilm?.titre_original}'"
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				on:click={handleImage}
				data-list-index={2}
				src={imageFromAssets(images[2]) + '?width=270&quality=30'}
				class="object-cover h-full"
				alt="image 3 du film '{currentFilm?.titre_original}'"
			/>
		</div>
		<h1 class="font-josefin text-lg mt-3 mb-2">
			<span>{currentFilm?.titre_original} {currentFilm?.titre_english ? '-' : ''} </span>
			<span class="italic">{currentFilm?.titre_english}</span>
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
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					on:click={handleImage}
					data-list-index={3}
					src={imageFromAssets(images[3]) + '?width=800&quality=30'}
					alt="affiche du film '{currentFilm?.titre_original}'"
					class="cursor-pointer"
				/>
			</li>
		</ul>
	</section>
	{#if showGalleryModal}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="w-full h-[100vh] bg-[rgb(0,0,0,0.9)] fixed top-0 left-0 z-50 grid place-content-center"
			on:click|self={() => (showGalleryModal = false)}
		>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				on:click={() => (showGalleryModal = false)}
				class="op-8 right-[5vw] absolute z-20 cursor-pointer"
			>
				<Close classes="text-white w-7 hover:text-red-500" />
			</div>
			<div
				class="lg:w-[700px] md:w-[90vw] flex gap-4 [&>button]:self-center [&>button]:p-2 [&>button]:rounded-lg"
			>
				<button
					on:click={prev}
					class:invisible={currentIndex === 0}
					class="text-white hover:text-red-500"
				>
					<AngleLeft classes="w-5 lg:w-7" />
				</button>
				<div class="flex-1">
					<img
						src={imageFromAssets(images[currentIndex]) + '?width=800&quality=30'}
						alt="affiche du film '{currentFilm?.titre_original}'"
						class="object-contain"
					/>
					<p class="text-white text-center">
						{images[currentIndex]?.title}
					</p>
				</div>
				<button
					on:click={next}
					class:invisible={currentIndex === 3}
					class="text-white hover:text-red-500"
				>
					<AngleRight classes="w-5 lg:w-7" />
				</button>
			</div>
		</div>
	{/if}
{/if}
