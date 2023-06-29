<script lang="ts">
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ CarreQuery } = data);
	$: ({ carre_des_auteurs } = $CarreQuery.data! ?? {});
</script>

{#if !$CarreQuery.fetching}
	<div class="overflow-y-scroll max-h-[85vh]">{@html carre_des_auteurs?.contenu ?? ''}</div>
{/if}
