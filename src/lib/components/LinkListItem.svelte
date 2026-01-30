<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import { getTitle, truncate, getSlug } from '$lib/utils';

	import { compose } from '$lib/utils';

	import { page } from '$app/state';
	import { imageFromAssets } from '$lib/utils';
	import type { Sluggified, Titled } from '$lib/utils';

	type T = $$Generic<Sluggified & Titled>;

	interface Props {
		item: T;
		className?: string;
		getLink?: (item: T) => string;
		getProcessedTitle?: (item: T) => string;
		getLogoId?: (item: T) => string | undefined;
	}

	let {
		item,
		className = '',
		getLink = (it) => `./${getSlug(it)}`,
		getProcessedTitle = compose(getTitle, truncate),
		getLogoId = () => ''
	}: Props = $props();
	const logoSrc = imageFromAssets(getLogoId(item));
</script>

<a
	href={getLink(item)}
	onclick={bubble('click')}
	class={className}
	class:text-red-500={page.url.pathname.endsWith(getLink(item).replace(/^[.]+/, ''))}
>
	<div class="flex gap-2 items-center px-2">
		{#if logoSrc}
			<img src={logoSrc + '&width=32'} alt="logo du film '{getProcessedTitle(item)}'" class="w-8" />
		{/if}
		<span>{getProcessedTitle(item)}</span>
	</div>
</a>
