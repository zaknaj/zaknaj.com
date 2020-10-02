<div class="main">
  <div class="container">
    <div class="main-title">What I do</div>
    <div class="content">
      <div class="boxes">
        <div class="box">
          <div class="title">Landing pages</div>
          <div class="image">
            <img src="/images/landingpage.svg" alt="landing page" />
          </div>
          <div class="text">
            As the entry point to your website, your landing page is probably
            <strong>the first thing</strong>
            your potential customer sees. As such, these types of projects
            require the highest
            <strong>attention to details</strong>, and extensive
            <strong>A/B testing</strong>
            in order to produce the page with the most
            <strong>optimal conversion rate</strong>.
            <br /><br />Any small visual change, any amount of time saved in the
            conversion process is
            <strong>compounded</strong>
            across thousands or even millions of users and generates
            <strong>disproportionate results</strong>.
          </div>
        </div>
        <div class="box">
          <div class="title">Creative websites / portfolios</div>
          <div class="image">
            <img src="/images/creativewebsite.svg" alt="creative website" />
          </div>
          <div class="text">
            Are you an architect, photographer, designer, filmmaker or any other
            profession requiring
            <strong>creativity and displaying a distinct personal brand</strong>
            ? Or perhaps your company recently released a new line of products
            that requires its own advertising page ?
            <br /><br />Creative websites are usually
            <strong>highly technical and creative</strong>
            in nature. The goal is to generate a
            <strong>“wow-factor”</strong>
            and make the browsing experience
            <strong>memorable</strong>, which turns to
            <strong>more leads</strong>
            down the road.
          </div>
        </div>
        <div class="box">
          <div class="title">Internal tools</div>
          <div class="image">
            <img src="/images/internaltools.svg" alt="internal tools" />
          </div>
          <div class="text">
            Definitely my favorite type or projects to work on as a software
            engineer. Internal tools (especially when applied to businesses that
            are non technical in nature) unlock superpowers for your business in
            terms of
            <strong>operating efficiency and organization</strong>.
            <br /><br />Internal tools are also easy to
            <strong>optimize</strong>
            and perfect, as the
            <strong>end users are limited</strong>
            in number (usually employees / management).
          </div>
        </div>
        <div class="box">
          <div class="title">Technical MVPs</div>
          <div class="image">
            <img src="/images/technicalmvps.svg" alt="technical mvps" />
          </div>
          <div class="text">
            When building a startup, it is often advised to produce a
            <strong>minimum viable product</strong>
            and start doing
            <strong>market validation</strong>
            as soon as possible.
            <br /><br />This type of projects are not very complex technically,
            and usually have a
            <strong>few features</strong>. The goal is to quickly produce
            software that brings some kind of value to the users and
            <strong>iterate</strong>
            from there.
          </div>
        </div>
      </div>
      <div class="cta">
        <div>Your project doesn’t fit into any of these ?</div>
        <div>
          <a href="/contact"><button>
              Let’s talk about it
              <span>{'-->'}</span></button></a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }

  .cta button {
    height: 42px;
    padding: 0px 25px;
    background: transparent;
    font-family: inherit;
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    margin-left: 25px;
    cursor: pointer;
    transition: 0.2s all;
  }

  .cta button span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform;
  }

  .cta button:hover span {
    transform: translateX(8px);
  }

  .cta button:active {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  .main {
    padding-top: 100px;
    background: black;
    color: white;
    z-index: 4;
    position: relative;
    box-shadow: inset 0px -1px 0px 0px #232323;
    overflow: hidden;
  }

  .container {
    max-width: 1300px;
    padding: 0 100px;
    margin: auto;
    padding-bottom: 70px;
  }

  .boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .main-title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 60px;
  }

  .image img {
    width: 100%;
    margin-bottom: 15px;
  }
  .box {
    width: 45%;
    margin-bottom: 100px;
  }

  .box .text {
    font-size: 14px;
    line-height: 1.8;
    opacity: 0.8;
  }

  .box .title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    .container {
      padding: 0 32px;
      padding-bottom: 70px;
    }
    .boxes {
      display: block;
    }
    .box {
      width: 100%;
      margin-bottom: 70px;
    }

    .cta {
      display: block;
      text-align: center;
      margin: 0 auto;
    }

    .cta button {
      margin: 0;
    }

    .cta > div:first-child {
      margin-bottom: 25px;
      margin-top: 50px;
    }

    .box:nth-child(1) .title {
      color: #ffdc61;
    }

    .box:nth-child(2) .title {
      color: #5ccf3f;
    }

    .box:nth-child(3) .title {
      color: #00c2ff;
    }

    .box:nth-child(4) .title {
      color: #ff9be9;
    }
  }
</style>
