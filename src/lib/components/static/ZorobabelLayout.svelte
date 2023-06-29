<script lang="ts">
	import { page } from '$app/stores';
	import StaticLayout from '$lib/components/static/StaticLayout.svelte';
</script>

<StaticLayout>
	<svelte:fragment slot="sidemenu">
		<li>
			<a href="contact" class:text-red-500={$page.url.pathname.startsWith('/zorobabel/contact')}>
				<p>contact</p>
			</a>
		</li>
		<li>
			<a href="a-propos" class:text-red-500={$page.url.pathname.startsWith('/zorobabel/a-propos')}>
				<p>à propos</p>
			</a>
		</li>
		<li>
			<a href="equipe" class:text-red-500={$page.url.pathname.startsWith('/zorobabel/l-equipe')}>
				<p>l'équipe</p>
				<p>the team</p>
			</a>
		</li>
		<li>
			<a href="logo" class:text-red-500={$page.url.pathname.startsWith('/zorobabel/logo')}>
				<p>le logo</p>
				<p>the logo</p>
			</a>
		</li>
	</svelte:fragment>
	<div slot="content">
		<slot name="content" />
	</div>
</StaticLayout>
