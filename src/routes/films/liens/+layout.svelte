<script lang="ts">
	import { page } from '$app/stores';
	import FilmSecondaryLayout from '$lib/components/layouts/FilmSecondaryLayout.svelte';
	import PageHead from '$lib/components/PageHead.svelte';
</script>

<PageHead head={'liens'} />

<FilmSecondaryLayout>
	<svelte:fragment slot="nav">
		<ul class="[&>li]:mb-3 lg:[&>li]:mb-12 text-center">
			<li class:text-red-500={$page.url.pathname.endsWith('/liens')}>
				<a href="./liens">
					<p>liens</p>
					<p>links</p>
				</a>
			</li>
			<li class:text-red-500={$page.url.pathname.endsWith('/coproductions')}>
				<a href="./coproductions">coproductions</a>
			</li>
			<li class:text-red-500={$page.url.pathname.endsWith('/partenariats')}>
				<a href="./partenariats">
					<p>partenariats</p>
					<p>partnerships</p>
				</a>
			</li>
		</ul>
	</svelte:fragment>
	<div slot="content">
		<slot />
	</div>
</FilmSecondaryLayout>
