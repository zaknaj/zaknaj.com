<script>
  import Navbar from "../components/Navbar.svelte";
  import { onMount } from "svelte";

  import { stores } from "@sapper/app";
  const { page } = stores();

  $: currentPage = $page.path;

  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<Navbar active={currentPage} />
<slot />
