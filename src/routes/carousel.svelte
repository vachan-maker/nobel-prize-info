<script>
    import { Carousel } from 'flowbite-svelte';
    const images = [
      
    ]
  </script>
  
  <div class="max-w-4xl">
    <Carousel {images} let:Controls>
      <Controls />
    </Carousel>
  </div>
  
  