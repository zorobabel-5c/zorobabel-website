<script lang="ts">
	import { getTitle, truncate, getSlug } from '$lib/utils';

	import { compose } from '$lib/utils';

	import { page } from '$app/stores';
	import { imageFromAssets } from '$lib/utils';
	import type { Sluggified, Titled } from '$lib/utils';

	type T = $$Generic<Sluggified & Titled>;

	export let item: T;
	export let getLink: (item: T) => string = (it) => `./${getSlug(it)}`;
	export let getProcessedTitle: (item: T) => string = compose(getTitle, truncate);
	export let getLogoId: (item: T) => string | undefined = () => '';
	const logoSrc = imageFromAssets(getLogoId(item));
</script>

<a
	href={getLink(item)}
	class:text-red-500={$page.url.pathname.endsWith(getLink(item).replace(/^[.]+/, ''))}
>
	<div class="flex gap-2 items-center px-2">
		{#if logoSrc}
			<img src={logoSrc + '?width=32'} alt="logo" class="w-8" />
		{/if}
		<span>{getProcessedTitle(item)}</span>
	</div>
</a>
