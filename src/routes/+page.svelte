<script>
	import Card from "./card.svelte";

  import { Heading, P } from 'flowbite-svelte';
	import Container from "./container.svelte";
	import Form from "./form.svelte";



    export let data;
    const {nobelPrizes} = data;
    console.log(nobelPrizes);
</script>
<Form/>
{#each nobelPrizes as nobelPrize}
<Heading tag= "h3">{nobelPrize.category.en}</Heading>
<P>Date Awarded: {nobelPrize.dateAwarded}</P>
<div class="flex flex-row gap-x-6 p-5">
    {#each nobelPrize.laureates as laureate}
        <Card heading="{laureate.fullName.en}" text="{laureate.motivation.en}"/>
    {/each}
</div>
{/each}

