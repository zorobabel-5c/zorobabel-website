<script lang="ts">
	export let head = 'zorobabel';

	$: title = head == 'zorobabel' || head == '' ? head : `${head} | zorobabel`;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
