<script lang="ts">
	import { truncate } from '../utils/string';

	import { compose } from '../utils/fn';

	import { page } from '$app/stores';
	import { imageFromAssets } from '../utils/assets';

	type T = $$Generic;

	export let item: T;
	export let getTitle: (item: T) => string;
	export let getLink: (item: T) => string = (it) => `./${encodeURI(getTitle(it))}`;
	export let getProcessedTitle: (item: T) => string = compose(getTitle, truncate);
	export let getLogoId: (item: T) => string | undefined;
	const logoSrc = imageFromAssets(getLogoId(item));
</script>

<a href={getLink(item)} class:text-red-500={$page.url.pathname.endsWith(getLink(item))}>
	<div class="flex gap-2 items-center px-2">
		{#if logoSrc}
			<img src={logoSrc} alt="logo" class="w-10" />
		{/if}
		<span>{getProcessedTitle(item)}</span>
	</div>
</a>
