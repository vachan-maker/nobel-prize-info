<script>
	import YearSelector from "./year-selector.svelte";
    import { GradientButton } from 'flowbite-svelte';


</script>
<form class="flex flex-row">
    <YearSelector/>
    <GradientButton color="pinkToOrange" type="submit">Submit</GradientButton>
</form>