<script lang="ts">
	import { page } from '$app/stores';
	import FilmSecondaryLayout from '$lib/components/FilmSecondaryLayout.svelte';
	import PageHead from '$lib/components/PageHead.svelte';
</script>

<PageHead head={'diffusion'} />

<FilmSecondaryLayout>
	<svelte:fragment slot="nav">
		<ul class="text-center [&>li]:mb-12">
			<li class:text-red-500={$page.url.pathname.endsWith('/prix')}>
				<a href="./prix">prix</a>
			</li>
			<li class:text-red-500={$page.url.pathname.endsWith('/festivals')}>
				<a href="./festivals">festivals</a>
			</li>
			<li class:text-red-500={$page.url.pathname.endsWith('/evenements')}>
				<a href="./evenements">
					<p>événements</p>
					<p>events</p>
				</a>
			</li>
			<li class:text-red-500={$page.url.pathname.endsWith('/television')}>
				<a href="./television">television</a>
			</li>
			<li class:text-red-500={$page.url.pathname.endsWith('/cinema')}>
				<a href="./cinema">cinema</a>
			</li>
			<li class:text-red-500={$page.url.pathname.endsWith('/publications')}>
				<a href="./publications">publications</a>
			</li>
		</ul>
	</svelte:fragment>
	<div slot="content">
		<slot />
	</div>
</FilmSecondaryLayout>
