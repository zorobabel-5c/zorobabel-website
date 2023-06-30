<script lang="ts">
	import { page } from '$app/stores';
	import StaticLayout from '$lib/components/static/StaticLayout.svelte';
</script>

<StaticLayout>
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
</StaticLayout>
