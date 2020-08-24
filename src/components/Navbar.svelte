<script>
  export let scrolled = false;
</script>

<div class="main {scrolled ? 'scrolled' : ''}">
  <div class="container">
    <div class="logo">Hi, I'm Zak</div>
    <div class="links">
      <div class="link active">Home</div>
      <div class="link">About</div>
      <div class="link">Contact</div>
      <div class="link color-mode">
        <div class="icon">
          <img src="/images/day.svg" alt="day icon" />
        </div>
        <div>Day mode</div>
      </div>
    </div>
  </div>
</div>

<style>
  .main {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 4;
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

  .color-mode img {
    height: 20px;
    display: block;
    margin-right: 12px;
  }

  /* @media screen and (max-width: 1600px) {
    .container {
      font-size: 16px;
    }

    .links {
      font-size: 14px;
    }
  } */
</style>
