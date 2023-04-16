<script lang="ts">
	import type { LayoutData } from './$houdini';
	import FilmLayout from '../../../components/FilmLayout.svelte';
	import List from '../../../components/List.svelte';
	import { page } from '$app/stores';

	export let data: LayoutData;

	$: ({ FilmDAteliers } = data);
	$: ({ films = [] } = $FilmDAteliers.data! ?? {});
	$: navItems = films.map((f) => f.titre ?? '');
</script>

{#if !$FilmDAteliers.fetching}
	<FilmLayout>
		<svelte:fragment slot="nav">
			<List items={navItems} let:item getKey={encodeURI}>
				<a
					href={`./${encodeURI(item)}`}
					class:text-red-500={$page.url.pathname.endsWith(encodeURI(item))}
				>
					{item}
				</a>
			</List>
		</svelte:fragment>
		<div slot="content">
			<slot />
		</div>
	</FilmLayout>
{/if}
