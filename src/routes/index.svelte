<script>
  import Hero from "../sections/Hero.svelte";
  import Testimonial from "../sections/Testimonial.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Projects from "../sections/Projects.svelte";
  import Whatyouget from "../sections/WhatYouGet.svelte";
  import TechStack from "../sections/TechStack.svelte";
  import WhatIDo from "../sections/WhatIDo.svelte";
  import Contact from "../sections/Contact.svelte";

  let scrolled = false;
  const setScrolled = (val) => {
    scrolled = val;
  };
</script>

<svelte:head>
  <title>Zak's Portfolio - Freelance Web Developer</title>
</svelte:head>

<div class="base">
  <Navbar {scrolled} />
  <Hero {setScrolled} />
  <Testimonial />
  <Projects />
  <Whatyouget />
  <TechStack />
  <WhatIDo />
  <Contact />
</div>
