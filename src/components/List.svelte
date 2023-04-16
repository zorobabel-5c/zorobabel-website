<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	type T = $$Generic;
	export let items: T[];
	export let getKey: (item: T) => string;

	onMount(() => {
		let active = $page.url.pathname.split('/')[3];
		let elem = document.querySelector(`li[data-list-item-key='${active}']`);
		console.log(elem);
		elem?.scrollIntoView();
	});
</script>

<ul>
	{#each items as item}
		<li data-list-item-key={getKey(item)}>
			<slot {item} />
		</li>
	{/each}
</ul>
