<script>
  const logos = [
    {
      fileName: "ramp",
      link: "www.ramp.com",
    },
    {
      fileName: "adevinta",
      link: "www.adevinta.com",
    },
    {
      fileName: "obytes",
      link: "www.obytes.com",
    },
    {
      fileName: "gemography",
      link: "www.gemography.com",
    },
    {
      fileName: "avito",
      link: "www.avito.ma",
    },
    {
      fileName: "monbanquet",
      link: "www.monbanquet.fr",
    },
    {
      fileName: "bookr",
      link: "www.bookr.co",
    },
  ];

  let hoveredLogo = "";

  let animationPaused = false;
</script>

<div
  class="companies"
  class:paused={animationPaused}
  on:mouseover={() => (animationPaused = true)}
  on:mouseout={() => (animationPaused = false)}>
  {#each ['', ''] as nothing}
    {#each logos as logo}
      <a
        target="__blank"
        href={'https://' + logo.link}
        on:mouseover={() => (hoveredLogo = logo.fileName)}
        on:mouseout={() => (hoveredLogo = '')}>
        <img
          src={'/images/' + logo.fileName + (hoveredLogo === logo.fileName ? '' : '-gray') + '.svg'}
          alt={logo.fileName + ' logo'} />
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

  @keyframes move-logos {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>
