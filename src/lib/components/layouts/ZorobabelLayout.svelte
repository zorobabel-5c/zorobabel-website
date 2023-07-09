<script lang="ts">
	import { page } from '$app/stores';
	import BaseLayout from '$lib/components/layouts/BaseLayout.svelte';
</script>

<BaseLayout>
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
				<p class="italic -mt-1">the team</p>
			</a>
		</li>
		<li>
			<a href="logo" class:text-red-500={$page.url.pathname.startsWith('/zorobabel/logo')}>
				<p>le logo</p>
				<p class="italic -mt-1">the logo</p>
			</a>
		</li>
	</svelte:fragment>
	<div slot="content">
		<slot name="content" />
	</div>
</BaseLayout>
