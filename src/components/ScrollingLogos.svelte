<script>
  const logos = [
    {
      fileName: "ramp",
      link: "www.ramp.com",
      opacity: 0.3,
    },
    {
      fileName: "adevinta",
      link: "www.adevinta.com",
      opacity: 1,
    },
    {
      fileName: "obytes",
      link: "www.obytes.com",
      opacity: 0.3,
    },
    {
      fileName: "gemography",
      link: "www.gemography.com",
      opacity: 0.7,
    },
    {
      fileName: "avito",
      link: "www.avito.ma",
      opacity: 0.3,
    },
    {
      fileName: "monbanquet",
      link: "www.monbanquet.fr",
      opacity: 0.3,
    },
    {
      fileName: "bookr",
      link: "www.bookr.co",
      opacity: 0.3,
    },
  ];

  let animationPaused = false;
</script>

<div
  class="companies"
  class:paused={animationPaused}
  on:mouseover={() => (animationPaused = true)}
  on:mouseout={() => (animationPaused = false)}>
  {#each ['', ''] as nothing}
    {#each logos as logo}
      <a target="__blank" href={'https://' + logo.link}>
        <img
          src={'/images/' + logo.fileName + '.svg'}
          alt={logo.fileName + ' logo'}
          style={`opacity: ${logo.opacity};`} />
      </a>
    {/each}
  {/each}
</div>

<style>
  .companies {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    animation: move-logos 15s linear infinite;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    will-change: transform;
  }
  .companies a {
    display: block;
    margin-right: 25px;
  }

  .paused {
    animation-play-state: paused;
  }

  img {
    filter: grayscale(100%);
    transition: all 0.2s;
  }

  img:hover {
    filter: grayscale(0%);
    opacity: 1 !important;
  }

  @keyframes move-logos {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>
