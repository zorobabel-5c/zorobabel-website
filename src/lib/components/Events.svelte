<script lang="ts">
	import { imageFromAssets } from '$lib/utils';
	import { formatDate } from '$lib/utils/date';

	type Event = {
		titre: string;
		slug?: string | null;
		type_d_atelier?: string;
		date_de_peremption: string;
		description: string;
		affiche: { id: string } | null;
	};

	export let events: Event[];
	export let noEventMessage: string = `Il n'y a pas d'événement programmé.`;
</script>

<div>
	{#if events.length > 0}
		{#each events as item}
			<div class="border-b border-black mb-5">
				<img
					src={imageFromAssets(item.affiche) + '?width=654&quality=30'}
					alt="todo"
					class="w-full object-cover"
				/>
				<div class="my-4">
					<h1>
						{item.titre} <span class="font-josefin">- {formatDate(item.date_de_peremption)}</span>
					</h1>
				</div>
				{@html item.description}
			</div>
		{/each}
	{:else}
		<p>{noEventMessage}</p>
	{/if}
</div>
