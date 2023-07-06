<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	$: browser && goto(`/films/liens/liens`);
</script>
