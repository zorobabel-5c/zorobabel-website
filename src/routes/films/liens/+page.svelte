<script lang="ts">
	import FilmsSingleNavLayout from '$lib/components/FilmsSingleNavLayout.svelte';
	import { imageFromAssets } from '$lib/utils';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ LiensQuery } = data);
	$: ({ liens } = $LiensQuery.data! ?? {});
</script>

<FilmsSingleNavLayout>
	<div slot="content" class="grid gap-1 grid-cols-6 mt-6">
		{#if !$LiensQuery.fetching}
			{#each liens as item}
				<a href={item.lien}>
					<img
						src={imageFromAssets(item.image) + '?width=270&quality=30'}
						class="object-cover h-full"
						alt={item.lien}
					/>
				</a>
			{/each}
		{/if}
	</div>
</FilmsSingleNavLayout>
