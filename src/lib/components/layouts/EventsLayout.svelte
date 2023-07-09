<script lang="ts">
	import { page } from '$app/stores';
	import BaseLayout from '$lib/components/layouts/BaseLayout.svelte';
</script>

<BaseLayout>
	<svelte:fragment slot="sidemenu">
		<li>
			<a href="stages" class:text-red-500={$page.url.pathname.startsWith('/evenements')}>
				<p>événements</p>
			</a>
		</li>
	</svelte:fragment>
	<div slot="content">
		<slot name="content" />
	</div>
</BaseLayout>
