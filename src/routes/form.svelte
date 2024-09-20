<script>
	import YearSelector from "./year-selector.svelte";
    import { GradientButton } from 'flowbite-svelte';
    import { enhance, applyAction } from '$app/forms';


</script>
<form class="flex flex-row" method="POST" use:enhance>
    <YearSelector/>
    <GradientButton color="pinkToOrange" type="submit">Submit</GradientButton>
</form>