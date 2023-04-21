<script lang="ts">
	import { decodeTitle, encodeTitle } from '../utils/string';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	type T = $$Generic;
	export let items: T[];
	export let getKey: (item: T) => string | undefined | null;
	export let shouldScrollIntoView = true;
	export let pathIndex = 3;
	export let classes = '';

	onMount(() => {
		if (shouldScrollIntoView) {
			let active = decodeURI($page.url.pathname).split('/')[pathIndex];
			let elem = document.querySelector(`li[data-list-item-key="${active}"]`);
			elem?.scrollIntoView();
		}
	});
</script>

<ul class={classes}>
	{#each items as item}
		<li data-list-item-key={encodeTitle(getKey(item))}>
			<slot {item} />
		</li>
	{/each}
</ul>
