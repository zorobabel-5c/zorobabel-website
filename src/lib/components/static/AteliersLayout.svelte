<script lang="ts">
	import { page } from '$app/stores';
	import StaticLayout from '$lib/components/static/StaticLayout.svelte';
</script>

<StaticLayout>
	<svelte:fragment slot="sidemenu">
		<li>
			<a href="stages" class:text-red-500={$page.url.pathname.startsWith('/ateliers/stages')}>
				<p>stages enfants</p>
			</a>
		</li>
		<li>
			<a href="workshops" class:text-red-500={$page.url.pathname.startsWith('/ateliers/workshops')}>
				<p>workshops adultes</p>
			</a>
		</li>
		<li>
			<a
				href="cours-du-soir"
				class:text-red-500={$page.url.pathname.startsWith('/ateliers/cours-du-soir')}
			>
				<p>cours du soir</p>
			</a>
		</li>
	</svelte:fragment>
	<div slot="content">
		<slot name="content" />
	</div>
</StaticLayout>
