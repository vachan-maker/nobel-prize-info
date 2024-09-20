<script>
	import Card from "./card.svelte";

  import { Heading } from 'flowbite-svelte';


    export let data;
    const {nobelPrizes} = data;
    console.log(nobelPrizes);
</script>
{#each nobelPrizes as nobelPrize}
<Heading tag= "h2">{nobelPrize.categoryFullName.en}</Heading>
<div class="flex flex-row gap-x-6">
    {#each nobelPrize.laureates as laureate}
<Card heading="{laureate.fullName.en}" text="{laureate.motivation.en}"/>
{/each}
</div>
{/each}