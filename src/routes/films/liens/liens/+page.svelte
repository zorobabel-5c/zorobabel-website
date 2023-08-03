<script lang="ts">
	import { imageFromAssets } from '$lib/utils';
	import type { PageData } from './$houdini';

	import PageHead from '$lib/components/PageHead.svelte';

	export let data: PageData;

	$: ({ LiensQuery } = data);
	$: ({ liens } = $LiensQuery.data! ?? {});
</script>

<PageHead head={'liens'} />

<div class="grid gap-1 grid-cols-6 mt-6">
	{#if !$LiensQuery.fetching}
		{#each liens as item}
			<div class="group overflow-hidden relative cursor-pointer font-josefin">
				<a href={item.lien} target="_blank">
					<div
						class="absolute h-full w-full bg-black opacity-80 hidden group-hover:flex justify-center items-center"
					>
						<span class="font-extralight text-white text-center text-ellipsis px-2"
							>{item.titre}</span
						>
					</div>
					<img
						src={imageFromAssets(item.image) + '&width=270'}
						class="object-cover h-full"
						alt="logo de '{item.titre}'"
					/>
				</a>
			</div>
		{/each}
	{/if}
</div>
