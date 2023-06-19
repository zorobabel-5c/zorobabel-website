<script lang="ts">
	import { page } from '$app/stores';
	import FilmLayout from '$lib/components/FilmLayout.svelte';
</script>

<FilmLayout>
	<svelte:fragment slot="nav">
		<ul class="ml-4">
			<li class:text-red-500={$page.url.pathname.endsWith('/prix')}>
				<a href="./prix">prix</a>
			</li>
			<li class:text-red-500={$page.url.pathname.endsWith('/festivals')}>
				<a href="./festivals">festivals</a>
			</li>
			<li class:text-red-500={$page.url.pathname.endsWith('nements')}>
				<a href="./événements">
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
</FilmLayout>
