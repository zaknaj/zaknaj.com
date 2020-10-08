<script>
  import anime from "animejs/lib/anime.es";

  import { onMount } from "svelte";

  onMount(() => {
    anime({
      targets: "#about-bg",
      scale: [1.5, 1],
      easing: "easeInOutQuad",
      duration: 2000,
    });
    anime({
      targets: "#about-content",
      scale: [1.1, 1],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 700,
    });
  });
</script>

<div class="main">
  <img
    class="bg"
    id="about-bg"
    src="/images/bg-about.jpg"
    alt="blurry background" />
  <div class="container" id="about-content">
    <div class="title">About me</div>
    <div class="content">
      Hi, I’m Zak. I’m a web developer / software engineer / whatever title that
      means making useable stuff on the web. I’m also a UI/UX designer.
      <br /><br />
      I have over 3 years of formal experience as a developer and around 7 years
      informally.
      <br /><br />
      I’m currently living with my wife in the wonderful little city of Ifrane,
      Morocco. Next destination would probably be Turkey or somewhere in SE
      Asia.
      <br /><br />
      Other than design and development, I enjoy learning about
      entrepreneurship, personal finance, fitness & nutrition and evolutionary
      psychology. Also currently learning about 3D and how that can be used in
      the web.
      <br /><br />
      Whether you want to talk business or just have a friendly discussion,
      don’t hesitate to send me an email at hi@zaknaj.com
      <br /><br />
      <span class="open-for-hire">I’m currently open for contract / full time
        opportunities (remote).
      </span>
    </div>
  </div>
</div>

<style>
  .main {
    padding-top: 170px;
    min-height: 101vh;
    background: black;
    color: white;
    z-index: 4;
    position: relative;
    box-shadow: inset 0px -1px 0px 0px #232323;
    overflow: hidden;
  }

  .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    height: 115%;
    filter: blur(60px);
    opacity: 0.8;
    z-index: -1;
  }

  .container {
    max-width: 700px;
    padding: 0 50px;
    margin: auto;
    padding-bottom: 200px;
  }

  .content {
    font-size: 16px;
    line-height: 1.8;
  }

  .title {
    font-weight: 600;
    margin-bottom: 40px;
    font-size: 66px;
    color: #ffffff;
    opacity: 0.3;
  }

  .open-for-hire {
    font-weight: bold;
    font-size: 14px;
    font-style: italic;
  }
</style>
