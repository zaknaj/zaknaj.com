<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let active = "home";
  let defaultActive = "home";
  let mounted = false;
  let barWidth = 0;
  let barLeft = 0;
  let showMobileMenu = false;

  onMount(() => {
    mounted = true;
  });

  $: {
    if (mounted) {
      barWidth = document
        .querySelector(`#${active}-link`)
        .getBoundingClientRect().width;
      barLeft = document
        .querySelector(`#${active}-link`)
        .getBoundingClientRect().x;
    }
  }

  export let scrolled = false;
</script>

<div class="main {scrolled ? 'scrolled' : ''}">
  <div class="container">
    <div class="logo">Hi, I'm Zak</div>
    <div
      class="mobile-menu-icon"
      on:click={() => {
        showMobileMenu = !showMobileMenu;
      }}>
      {#if !showMobileMenu}
        <img src="/images/menu.svg" alt="mobile menu" />
      {:else}
        <img in:fade src="/images/x.svg" alt="close mobile menu" />
      {/if}

    </div>
    <div class="links">
      <div
        on:mouseover={() => (active = 'home')}
        on:mouseleave={() => (active = defaultActive)}
        id="home-link"
        class="link {active === 'home' && 'active'}">
        Home
      </div>
      <div
        on:mouseover={() => (active = 'about')}
        on:mouseleave={() => (active = defaultActive)}
        id="about-link"
        class="link {active === 'about' && 'active'}">
        About
      </div>
      <div
        on:mouseover={() => (active = 'contact')}
        on:mouseleave={() => (active = defaultActive)}
        id="contact-link"
        class="link {active === 'contact' && 'active'}">
        Contact me
      </div>
      <!-- <div class="link color-mode">
        <div class="icon">
          <img src="/images/day.svg" alt="day icon" />
        </div>
        <div>Day mode</div>
      </div> -->
    </div>
  </div>
  <div
    class="sliding-bar"
    style="width: {barWidth}px; transform: translateX({barLeft}px); opacity: {scrolled ? '1' : '0'}" />
  {#if showMobileMenu}
    <div transition:fade class="mobile-menu">
      <div class="mobile-links">
        <div in:fly={{ x: -50, delay: 0, duration: 750 }} class="mobile-link">
          Home
        </div>
        <div in:fly={{ x: 50, delay: 100, duration: 750 }} class="mobile-link">
          About
        </div>
        <div in:fly={{ x: -50, delay: 200, duration: 750 }} class="mobile-link">
          Contact
        </div>

      </div>
    </div>
  {/if}
</div>

<style>
  .main {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 5;
    border-bottom: 1px solid transparent;
    transition: all 0.3s;
  }

  .main.scrolled {
    background: #1f1f1f88;
    border-bottom: 1px solid #ffffff2d;
  }

  .main.scrolled .container {
    padding: 0px 100px;
  }

  .container {
    max-width: 1300px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    padding: 15px 100px;
    color: white;
    transition: all 0.3s;
  }

  .mobile-menu-icon {
    display: none;
    position: relative;
    z-index: 7;
  }

  .links {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .link {
    margin-left: 60px;
    opacity: 0.5;
    height: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .link:hover {
    opacity: 1;
  }

  .link.active {
    opacity: 1;
  }

  /* .color-mode img {
    height: 20px;
    display: block;
    margin-right: 12px;
  } */

  .sliding-bar {
    position: absolute;
    bottom: -1px;
    left: 0%;
    transition: 0.3s all;
    height: 1px;
    background: white;
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 6;
    background: rgba(0, 0, 0, 0.85);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-links {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }

  .mobile-link {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 600px) {
    .container,
    .main.scrolled .container {
      padding: 24px 32px;
    }
    .links {
      display: none;
      align-items: center;
      font-size: 14px;
    }
    .mobile-menu-icon {
      display: flex;
      align-items: center;
      margin: -15px;
      padding: 15px;
    }
  }
</style>
