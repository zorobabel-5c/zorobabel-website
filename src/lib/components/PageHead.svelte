<script lang="ts">
	interface Props {
		head?: string;
	}

	let { head = 'zorobabel' }: Props = $props();

	let title = $derived(head == 'zorobabel' || head == '' ? head : `${head} | zorobabel`);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
