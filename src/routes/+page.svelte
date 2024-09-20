<script>
	import Card from "./card.svelte";

    export let data;
    const {nobelPrizes} = data;
    console.log(nobelPrizes);
</script>
{#each nobelPrizes as nobelPrize}
<h1>{nobelPrize.categoryFullName.en}</h1>
{#each nobelPrize.laureates as laureate}
<h2>{laureate.fullName.en}</h2>
{/each}
{/each}