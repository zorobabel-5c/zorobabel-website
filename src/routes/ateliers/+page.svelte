<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	$: browser && goto(`/ateliers/cours-du-soir`);
</script>
