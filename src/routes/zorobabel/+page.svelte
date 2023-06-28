<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	$: browser && goto(`/zorobabel/contact`);
</script>
