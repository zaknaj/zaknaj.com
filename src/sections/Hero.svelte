<script>
  import { onMount } from "svelte";

  export let setScrolled = () => {};

  onMount(() => {
    // Fonts loaded
    document.fonts.ready.then(function () {
      console.log("All fonts in use by visible text have loaded.");
    });

    // Scroll detection
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        setScrolled(!entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0.95,
    });

    observer.observe(document.querySelector("#hero-title"));

    // function step(timestamp) {
    //   console.log("hello");
    //   window.requestAnimationFrame(step);
    // }

    // window.requestAnimationFrame(step);
  });
</script>

<div class="hero">
  <div class="background">
    <div class="animated-background">
      <img src="/images/animbg.svg" alt="background" />
      <div class="background-overlay" />
    </div>
  </div>

  <div class="content">
    <img class="picture" src="/images/person.png" alt="Zakaria Najem" />
    <div class="title" id="hero-title">
      The Swiss Army <br /> knife for your <br /> technical projects.
    </div>
    <div class="cta-block">
      <button>Hire me</button>
      <div class="video-resume">
        <div>or watch my video resume</div>
        <div class="youtube-icon">
          <img src="/images/youtube.svg" alt="youtube icon" />
        </div>
      </div>
    </div>
    <div class="icons-block">
      <div class="moving-dots-container">
        <img
          class="moving-dots"
          src="/images/moving-dots.svg"
          alt="moving dots" />
      </div>
      <div class="icon-block">
        <div class="icon"><img src="/images/pen.svg" alt="pen" /></div>
        <div class="icon-title">UI/UX <br /> Design</div>
        <div class="icon-subtitle">
          Intuitive design, <br /> beautiful graphics
        </div>
      </div>
      <div class="icon-block">
        <div class="icon"><img src="/images/code.svg" alt="code" /></div>
        <div class="icon-title">Front End <br /> Development</div>
        <div class="icon-subtitle">
          Interfaces, interactions <br /> & animations
        </div>
      </div>
      <div class="icon-block">
        <div class="icon"><img src="/images/db.svg" alt="db" /></div>
        <div class="icon-title">Back End <br /> Development</div>
        <div class="icon-subtitle">
          Web servers, data <br /> storage & authentication
        </div>
      </div>
      <div class="icon-block">
        <div class="icon"><img src="/images/cloud.svg" alt="cloud" /></div>
        <div class="icon-title">Hosting & <br /> Deployment</div>
        <div class="icon-subtitle">
          Access your website <br /> anywhere, anytime
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* CONTENT */

  .hero {
    overflow-x: hidden;
    max-width: 100vw;
    position: relative;
    height: 100vh;
    box-shadow: inset 0px -1px 0px 0px #232323;
  }

  .content {
    max-width: 1300px;
    margin: 23vh auto 0;
    padding: 0 100px;
  }

  .picture {
    position: absolute;
    left: 65%;
    top: 10%;
    height: 90%;
    z-index: 3;
  }

  .title {
    color: white;
    font-weight: 700;
    font-size: 8vh;
    line-height: 116.3%;
  }
  .cta-block {
    margin-top: 4vh;
    display: flex;
    align-items: center;
  }

  .cta-block button {
    height: 7vh;
    font-size: 2.7vh;
    padding: 0 3.5vh;
    background: linear-gradient(180deg, #0091ff 0%, #250c14 150%);
    box-shadow: inset 0px -15px 20px rgb(0 0 0 / 0%),
      7px 7px 30px rgba(0, 0, 0, 1);
    border-radius: 5px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    transition: box-shadow 0.2s, transform 0.15s;
  }

  .cta-block button:hover {
    box-shadow: inset 0px -15px 20px rgb(0 0 0 / 18%),
      7px 7px 30px rgba(0, 0, 0, 1);
  }

  .cta-block button:active {
    transform: scale(0.98);
  }

  .video-resume {
    display: flex;
    align-items: center;
    color: #ffffff47;
    font-size: 2.1vh;
    margin-left: 4vh;
    cursor: pointer;
  }

  .video-resume:hover > div {
    text-decoration: underline;
  }

  .youtube-icon {
    display: flex;
    align-items: center;
    margin-left: 16px;
    margin-top: 2px;
  }

  .youtube-icon img {
    height: 20px;
  }

  .icons-block {
    position: relative;
    width: 68%;
    margin-top: 7vh;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    font-size: 14px;
  }

  .moving-dots {
    display: block;
    animation: moving-dots 0.5s linear infinite;
    width: 800px;
  }

  .moving-dots-container {
    left: 40px;
    position: absolute;
    top: 58px;
  }

  .icon-block {
    color: white;
  }

  .icon-block:last-child {
    background: #000;
    position: relative;
  }

  .icon img {
    height: 16px;
  }

  .icon-title {
    font-weight: 600;
    margin: 12px 0;
    line-height: 1.4;
    display: inline-block;
    background: #000;
    position: relative;
    margin-left: -10px;
    padding-left: 10px;
    box-shadow: 0px 0px 15px 15px #000;
    background: #000;
  }

  .icon-subtitle {
    opacity: 0.5;
    line-height: 1.4;
  }

  /* BACKGROUND */

  .background {
    background-color: #000;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    z-index: -1;
  }
  .animated-background img {
    position: absolute;
    left: -1400px;
    top: -800px;
    transform-origin: 60% 40%;
    animation: rotate-bg 15s linear infinite;
  }

  .animated-background {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .background-overlay {
    height: 100vh;
    background: black;
    position: absolute;
    top: 35vh;
    left: 0;
    width: 150%;
    transform: rotate(5deg);
    transform-origin: 0px 0px;
    box-shadow: 0px -86px 200px rgba(255, 0, 0, 0.26);
  }

  /* ANIMATIONS */

  @keyframes rotate-bg {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes moving-dots {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(12.5px);
    }
  }

  /* MEDIA QUERIES */

  @media screen and (max-width: 600px) {
    .animated-background img {
      left: -530px;
      top: -250px;
      height: 1000px;
    }
    .background-overlay {
      top: 155px;
    }
    .background {
      z-index: 1;
    }

    .hero {
      height: unset;
      min-height: 100vh;

      background-color: #000;
    }
    .content {
      padding: 0px 32px;
      margin-top: 110px;
      position: relative;
      z-index: 2;
    }

    .title {
      font-size: 28px;
      margin-bottom: 26px;
    }

    .video-resume {
      font-size: 12px;
      margin-left: 0px;
      margin-top: 16px;
    }

    .video-resume img {
      height: 12px;
    }

    .youtube-icon {
      margin-left: 8px;
    }

    .icons-block {
      display: block;
    }

    .icon-block {
      margin-bottom: 60px;
      position: relative;
      background: #000;
      box-shadow: 0px 0px 15px 14px #000;
      transform: scale(0.9);
    }
    .icon-block:last-child {
      background: #000;
    }

    .cta-block {
      display: block;
    }

    .cta-block button {
      height: 45px;
      font-size: 16px;
      padding: 13px 19px;
    }

    .moving-dots-container {
      transform: rotate(90deg);
      transform-origin: 0px 0px;
      left: 63px;
    }

    .picture {
      left: unset;
      height: 110vw;
      top: unset;
      bottom: 0;
      position: fixed;
      right: -70px;
    }
  }
</style>
