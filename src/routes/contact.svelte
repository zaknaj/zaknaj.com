<script>
  import Contact from "../sections/Contact.svelte";

  import { onMount } from "svelte";

  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<svelte:head>
  <title>Contact me - Zak's Portfolio</title>
</svelte:head>

<div class="base">
  <Contact />
</div>
