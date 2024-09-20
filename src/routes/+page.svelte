<script>
	import Card from "./card.svelte";

    export let data;
    const {nobelPrizes} = data;
    console.log(nobelPrizes);
</script>
{#each nobelPrizes as nobelPrize}
<h1>{nobelPrize.categoryFullName.en}</h1>
<div class="flex flex-row">
    {#each nobelPrize.laureates as laureate}
<Card heading="{laureate.fullName.en}" text="{laureate.motivation.en}"/>
{/each}
</div>
{/each}