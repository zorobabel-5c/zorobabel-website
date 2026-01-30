<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	type T = $$Generic;
	interface Props {
		items: T[];
		getKey: (item: T) => string | undefined | null;
		shouldScrollIntoView?: boolean;
		pathIndex?: number;
		classes?: string;
		children?: import('svelte').Snippet<[any]>;
	}

	let {
		items,
		getKey,
		shouldScrollIntoView = true,
		pathIndex = 3,
		classes = '',
		children
	}: Props = $props();

	onMount(() => {
		if (shouldScrollIntoView) {
			let active = decodeURI(page.url.pathname).split('/')[pathIndex];
			let elem = document.querySelector(`li[data-list-item-key="${active}"]`);
			elem?.scrollIntoView();
		}
	});
</script>

<ul class={classes}>
	{#each items as item}
		<li data-list-item-key={getKey(item)}>
			{@render children?.({ item, })}
		</li>
	{/each}
</ul>
