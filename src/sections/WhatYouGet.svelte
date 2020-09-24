<div class="main">
  <div class="container">
    <div class="title-part">
      <div class="title">What you get</div>
      <div class="subtitle">when you work with me</div>
    </div>
    <div class="content">
      <div class="line first-line">
        <div class="block">
          <div class="block-top">
            <div class="icon">
              <img
                class="block-icon"
                src="/images/globe.svg"
                alt="globe icon" />
            </div>
            <div class="block-title">Excellent<br /> Communication</div>
          </div>
          <div class="block-message">
            Fluent in English, French, Arabic and Javascript.
          </div>
        </div>
        <div class="block">
          <div class="block-top">
            <div class="icon">
              <img
                class="block-icon"
                src="/images/rocket.svg"
                alt="rocket icon" />
            </div>
            <div class="block-title">Performance <br /> & Security</div>
          </div>
          <div class="block-message">
            53% of website visitors will leave if a webpage doesn’t load within
            three seconds. I’ll make sure they wont.
          </div>
        </div>
        <div class="block">
          <div class="block-top">
            <div class="icon">
              <img
                class="block-icon"
                src="/images/people.svg"
                alt="people icon" />
            </div>
            <div class="block-title">User Experience <br /> First</div>
          </div>
          <div class="block-message">
            Who cares about the technology if the end product is unusable ?
          </div>
        </div>
        <div class="block">
          <div class="block-top">
            <div class="icon">
              <img
                class="block-icon"
                src="/images/heart.svg"
                alt="heart icon" />
            </div>
            <div class="block-title">Delightful <br /> Apps</div>
          </div>
          <div class="block-message">
            Because a happy user is a returning user.
          </div>
        </div>
      </div>
      <div class="line second-line">
        <div class="block">
          <div class="block-top">
            <div class="icon">
              <img
                class="block-icon"
                src="/images/clock.svg"
                alt="clock icon" />
            </div>
            <div class="block-title">Timely <br /> Deliveries</div>
          </div>
          <div class="block-message">
            The word of tech moves fast,<br /> but I’m faster!
          </div>
        </div>
        <div class="block">
          <div class="block-top">
            <div class="icon">
              <img
                class="block-icon"
                src="/images/target.svg"
                alt="target icon" />
            </div>
            <div class="block-title">Pixel <br /> Perfection</div>
          </div>
          <div class="block-message">
            My attention to details borders on obsession.
          </div>
        </div>
        <div class="block">
          <div class="block-top">
            <div class="icon">
              <img
                class="block-icon"
                src="/images/phone.svg"
                alt="phone icon" />
            </div>
            <div class="block-title">Responsive <br /> Websites</div>
          </div>
          <div class="block-message">
            More than half of the web is now on mobile. A non-responsive website
            is a crime.
          </div>
        </div>
        <div class="block" />
      </div>
    </div>
  </div>
</div>

<style>
  .main {
    padding-top: 100px;
    background: black;
    color: white;
    z-index: 4;
    position: relative;
    box-shadow: inset 0px -1px 0px 0px #232323;
  }

  .container {
    max-width: 1300px;
    padding: 0 100px;
    margin: auto;
    padding-bottom: 100px;
    position: relative;
  }

  .title-part .title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 5px;
  }

  .title-part .subtitle {
    font-size: 20px;
    opacity: 0.35;
    font-style: italic;
  }

  .content {
    margin-top: 80px;
  }

  .line {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .block {
    width: 220px;
    margin-right: 40px;
    margin-bottom: 70px;
  }

  .block-top {
    display: flex;
    align-items: center;
  }

  .block-top .icon {
    height: 40px;
    margin-right: 15px;
  }

  .block-top .block-title {
    font-weight: bold;
    font-size: 16px;
    line-height: 1.25;
  }

  .block-message {
    font-style: italic;
    font-size: 14px;
    line-height: 160%;
    opacity: 0.7;
    margin-top: 14px;
  }

  .icon img {
    height: 100%;
  }

  .first-line .block:nth-child(1) .block-title {
    color: #45b1ff;
  }

  .first-line .block:nth-child(2) .block-title {
    color: #ff5353;
  }

  .first-line .block:nth-child(3) .block-title {
    color: #88e179;
  }

  .first-line .block:nth-child(4) .block-title {
    color: #ff6abb;
  }

  .second-line .block:nth-child(2) .block-title {
    color: #ffd600;
  }

  .second-line .block:nth-child(3) .block-title {
    color: #bb85ff;
  }

  .block:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 600px) {
    .container {
      padding: 0 32px;
      padding-bottom: 70px;
    }
    .title-part {
      text-align: center;
    }
    .line {
      display: block;
    }
    .block {
      text-align: center;
      margin: 60px auto;
    }
    .block-top {
      display: block;
    }
    .block-top .icon {
      margin: 0;
      margin-bottom: 12px;
    }

    .block:last-child {
      margin: 60px auto;
    }
  }
</style>
