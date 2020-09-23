<script>
  import ScrollingLogos from "../components/ScrollingLogos.svelte";
</script>

<div class="main">
  <div class="black-overlay" />
  <div class="container">
    <div class="left">
      <div class="title-container">
        <div class="subtitle">International presence</div>
        <div class="title">
          I have worked with clients across <span class="underlined">four
            continents.</span>
        </div>
      </div>
      <div class="companies-container">
        <div class="title">Trusted by</div>
        <div class="companies-wrapper">
          <div class="left-overlay" />
          <div class="right-overlay" />
          <ScrollingLogos />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="testimonial-text">
        <div class="quotes"><img alt="quotes" src="/images/quotes.svg" /></div>
        Zak is a dedicated, ambitious, result driven leader and thoughtful
        individual. If you ever need someone to deliver under pressure with the
        best results, Zak is the man for the job! <br /><br /> He is great in dealing
        with difficult situations and a fantastic problem solver.<br /> I enjoyed
        and still enjoy working with him.
      </div>
      <div class="person">
        <div class="image" />
        <div class="info">
          <div class="name">Ismail El Idrissi</div>
          <div class="title">Advertising Project Manager</div>
          <div class="company">Adevinta Morocco</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .main {
    position: relative;
    background-color: black;
    background-image: url(/images/bg-globe.jpg);
    background-position: center bottom;
    min-height: 1000px;
    z-index: 4;
    position: relative;
    background-repeat: no-repeat;
    color: white;
  }

  .black-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 350px;
    background: linear-gradient(to top, black, transparent);
  }
  .container {
    max-width: 1300px;
    padding: 0 100px;
    padding-top: 120px;
    margin: auto;
    display: flex;
    justify-content: center;
  }

  .left {
    margin-right: 230px;
  }

  .title-container .subtitle,
  .person .info .name {
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #63daff;
    margin-bottom: 8px;
  }

  .underlined {
    position: relative;
    display: inline-block;
  }

  .underlined:before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 14px;
    z-index: -1;
    opacity: 0.4;
    background: #63daff;
  }

  .person {
    font-size: 12px;
    line-height: 1.5;
    display: flex;
    align-items: center;
  }

  .person .info .company {
    font-weight: bold;
  }

  .title-container .title {
    font-weight: bold;
    font-size: 36px;
    line-height: 115%;
    max-width: 460px;
    margin-bottom: 150px;
  }

  .testimonial-text {
    font-style: italic;
    font-size: 13px;
    line-height: 180%;
    max-width: 340px;
    margin-bottom: 35px;
    position: relative;
    margin-top: 30px;
  }

  .companies-container .title {
    font-weight: 600;
    font-size: 12px;
    line-height: 116.3%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 35px;
  }

  .person .image {
    width: 75px;
    height: 75px;
    border-radius: 75px;
    background: lightgray;
    margin-right: 24px;
    background: url(/images/ismail.jpg);
    background-size: cover;
    background-position: center center;
  }

  .quotes {
    position: absolute;
    top: -20px;
    left: -25px;
  }

  .companies-wrapper {
    max-width: 450px;
    position: relative;
    overflow: hidden;
    height: 26px;
  }

  .left-overlay,
  .right-overlay {
    width: 50px;
    height: 100px;
    position: absolute;
    z-index: 2;
    top: 0;
    height: 100%;
    pointer-events: none;
  }

  .left-overlay {
    left: 0;
    background: linear-gradient(to right, black, transparent);
  }

  .right-overlay {
    right: 0;
    background: linear-gradient(to left, black, transparent);
  }

  @media screen and (max-width: 600px) {
    .container {
      display: block;
      padding: 0 32px;
      padding-top: 100px;
    }
    .left {
      margin-right: 0;
    }

    .title-container .title {
      font-size: 26px;
      margin-bottom: 450px;
    }

    .main {
      background-size: 1000px;
    }

    .black-overlay {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 130px;
      background: linear-gradient(to top, black, transparent);
    }

    .right {
      position: absolute;
      top: 270px;
      width: 100%;
      padding: 0 38px;
      left: 50%;
      transform: translateX(-50%);
    }

    .testimonial-text {
      font-size: 12px;
      margin-bottom: 25px;
    }

    .quotes {
      top: -30px;
      left: -15px;
    }

    .person .image {
      width: 65px;
      height: 65px;
      margin-right: 15px;
    }

    .person .info .name {
      margin-bottom: 3px;
    }
  }
</style>
