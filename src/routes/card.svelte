<script>
    import { Card, Button, Toggle } from 'flowbite-svelte';
    let vCard = false;
    export let heading;
    export let text;
    export let href;
  </script>
  
  <div  class="space-y-4">
    <Card img="{href}">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{text}</p>
      <Button>
        Read more 
      </Button>
    </Card>
  </div>