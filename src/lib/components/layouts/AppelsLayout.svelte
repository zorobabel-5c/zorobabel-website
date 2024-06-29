<script lang="ts">
	import { page } from '$app/stores';
	import BaseLayout from '$lib/components/layouts/BaseLayout.svelte';
</script>

<BaseLayout>
	<svelte:fragment slot="sidemenu">
		<li>
			<a href="start" class:text-red-500={$page.url.pathname.startsWith('/appels/start')}>
				<p>start</p>
			</a>
		</li>
		<li>
			<a href="carre" class:text-red-500={$page.url.pathname.startsWith('/appels/carre')}>
				<p>résidence au carré</p>
			</a>
		</li>
		<li>
			<a href="production" class:text-red-500={$page.url.pathname.startsWith('/appels/production')}>
				<p>production</p>
			</a>
		</li>
	</svelte:fragment>
	<div slot="content">
		<slot name="content" />
	</div>
</BaseLayout>
