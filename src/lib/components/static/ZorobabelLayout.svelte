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
			<a href="contact#a-propos" class:text-red-500={$page.url.pathname.endsWith('#a-propos')}>
				<p>à propos</p>
			</a>
		</li>
		<li>
			<a href="contact#equipe" class:text-red-500={$page.url.pathname.startsWith('#equipe')}>
				<p>l'équipe</p>
				<p class="italic">the team</p>
			</a>
		</li>
		<li>
			<a href="logo" class:text-red-500={$page.url.pathname.startsWith('/zorobabel/logo')}>
				<p>le logo</p>
				<p class="italic">the logo</p>
			</a>
		</li>
	</svelte:fragment>
	<div slot="content">
		<slot name="content" />
	</div>
</StaticLayout>
