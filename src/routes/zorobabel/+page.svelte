<script lang="ts">
	import { run } from 'svelte/legacy';

	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	run(() => {
		browser && goto(`/zorobabel/contact`);
	});
</script>
