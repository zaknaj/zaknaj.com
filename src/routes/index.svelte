<script>
  import Hero from "../sections/Hero.svelte";
  import Testimonial from "../sections/Testimonial.svelte";
  import Projects from "../sections/Projects.svelte";
  import Whatyouget from "../sections/WhatYouGet.svelte";
  import TechStack from "../sections/TechStack.svelte";
  import WhatIDo from "../sections/WhatIDo.svelte";
  import { onMount } from "svelte";
  import anime from "animejs/lib/anime.es";

  let fontsLoaded = false;
  let loaderRef;

  onMount(() => {
    document.fonts.ready.then(function () {
      fontsLoaded = true;
    });
  });

  $: {
    if (fontsLoaded) {
      const tl = anime.timeline({});
      tl.add({
        targets: loaderRef,
        translateY: "35%",
        duration: 2000,
        rotate: "5deg",
        easing: "easeInOutQuart",
        begin: () => {
          document.body.style.position = "fixed";
          document.body.style.overflowY = "scroll";
        },
      })
        .add({
          targets: loaderRef,
          opacity: [1, 0],
          duration: 50,
          begin: (anim) => {
            const ref = anim.animatables[0].target;
            ref.style.display = "none";
            document.body.style.position = "static";
            document.body.style.overflowY = "auto";
          },
        })
        .add({
          targets: "#hero-content",
          opacity: [0, 1],
          duration: 500,
          easing: "linear",
        })
        .add(
          {
            targets: "#hero-content .icon-block",
            translateX: [-40, 0],
            opacity: 1,
            easing: "easeInOutQuart",
            delay: anime.stagger(200),
          },
          "-=500"
        )
        .add(
          {
            targets: "#hero-content .moving-dots",
            opacity: 1,
            easing: "linear",
            duration: 500,
            complete: () => {
              anime({
                targets: "#animbg",
                rotate: [0, "360deg"],
                duration: 10000,
                easing: "linear",
                loop: true,
              });
            },
          },
          "-=700"
        );
    }
  }
</script>

<svelte:head>
  <title>Zak's Portfolio - Freelance Web Developer</title>
</svelte:head>

<div class="base">
  <div bind:this={loaderRef} class="loading-screen">hello</div>
  <Hero />
  <Testimonial />
  <Projects />
  <Whatyouget />
  <TechStack />
  <WhatIDo />
</div>

<style>
  .loading-screen {
    z-index: 9;
    position: fixed;
    height: 100vh;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform-origin: 0px 0px;
    will-change: transform, opacity;
  }

  :global(body) {
    position: fixed;
    overflow-y: scroll;
    width: 100%;
  }
</style>
