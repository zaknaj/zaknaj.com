<div class="main">
  <div class="container">
    <div class="left">What I have worked on</div>
    <div class="right">
      <div class="section">
        <div class="section-title">Personal projects</div>
        <div class="links">
          <div class="link">
            <div class="link-title">Graid</div>
            <div class="description">
              Software to help teachers create and automatically grade their
              exams.
            </div>
          </div>
          <div class="link">
            <div class="link-title">NanoCMS</div>
            <div class="description">
              Simple to use content management system.
            </div>
          </div>
          <div class="link">
            <div class="link-title">Spencer</div>
            <div class="description">
              Expense tracking progressive web app with offline support.
            </div>
          </div>
          <div class="link">
            <div class="link-title">JobBox</div>
            <div class="description">
              SAAS with a chrome extension that helps gather, organize and track
              the job offers you are interested in.
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">Client work</div>
        <div class="links">
          <div class="link">
            <div class="link-title">YTS Architectes</div>
            <div class="description">
              Showcase website for an architecture firm based in Casablanca,
              Morocco.
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">Open source</div>
        <div class="links">
          <div class="link">
            <div class="link-title">svelte-nav</div>
            <div class="description">
              Single page application router for svelte with a minimalist API.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .main {
    padding-top: 300px;
    min-height: 100vh;
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
    display: flex;
    padding-bottom: 200px;
    align-items: flex-start;
    position: relative;
    justify-content: space-between;
  }

  .left {
    width: 220px;
    font-size: 60px;
    font-weight: 700;
    color: #ffffff;
    opacity: 0.1;
    margin-right: 170px;
    position: sticky;
    top: 100px;
  }

  .right {
    flex: 1;
    max-width: 700px;
  }

  .section {
    display: flex;
    align-items: flex-start;
    padding: 50px 0 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .section:first-child {
    padding-top: 0;
  }

  .section:last-child {
    border-bottom: 0;
  }

  .section-title {
    flex: 1;
    font-size: 26px;
    font-weight: 700;
    position: relative;
  }

  .section-title:before {
    content: "";
    display: block;
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 50px;
    height: 5px;
    background: #ffa800;
    border-radius: 5px;
  }

  .links {
    flex: 1;
  }

  .link {
    line-height: 1.8;
    margin-bottom: 20px;
    display: block;
    position: relative;
    cursor: pointer;
  }

  .link:hover .link-title {
    text-decoration: underline;
  }

  .link:before {
    content: "";
    display: block;
    position: absolute;
    top: 11px;
    left: -25px;
    width: 5px;
    height: 5px;
    background: #ffa800;
    border-radius: 5px;
  }

  .link-title {
    font-size: 16px;
    font-weight: 700;
  }

  .description {
    font-size: 14px;
  }

  .section:nth-child(2) .link:before,
  .section:nth-child(2) .section-title:before {
    background: #4de235;
  }
  .section:nth-child(3) .link:before,
  .section:nth-child(3) .section-title:before {
    background: #ff69d5;
  }

  @media screen and (max-width: 600px) {
    .main {
      padding-top: 200px;
    }

    .container {
      display: block;
      padding: 0 32px;
      padding-bottom: 70px;
    }

    .left {
      width: 170px;
      font-size: 28px;
      opacity: 0.15;
      margin-right: 0px;
      position: static;
      top: unset;
      margin-bottom: 50px;
    }

    .section {
      display: block;
    }

    .section-title {
      font-size: 18px;
      margin-bottom: 40px;
    }

    .section-title:before {
      bottom: -10px;
      width: 30px;
      height: 3px;
      border-radius: 3px;
    }

    .links {
      margin-left: 25px;
    }

    .link-title {
      font-size: 14px;
      font-weight: 700;
    }

    .description {
      font-size: 12px;
    }

    .section {
      padding: 40px 0 20px;
    }
  }
</style>
