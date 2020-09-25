<div class="main">
  <div class="react-image">
    <img src="/images/react.svg" alt="react logo" />
  </div>
  <div class="container">
    <div class="title-part">
      <div class="title">Tech stack</div>
      <div class="subtitle">What’s in the toolbelt</div>
    </div>
    <div class="content">
      <div class="block">
        <div class="block-title">Design</div>
        <div class="block-content">
          <div class="block-content-item">Figma</div>
        </div>
      </div>
      <div class="block">
        <div class="block-title">Front end development</div>
        <div class="block-content">
          <div class="block-content-item">React</div>
          <div class="block-content-item">Typescript</div>
          <div class="block-content-item">GraphQL</div>
          <div class="block-content-item">Sass</div>
        </div>
      </div>
      <div class="block">
        <div class="block-title">Backend development</div>
        <div class="block-content">
          <div class="block-content-item">NodeJS</div>
          <div class="block-content-item">Express</div>
          <div class="block-content-item">MongoDB</div>
        </div>
      </div>
      <div class="block">
        <div class="block-title">hosting & deployment</div>
        <div class="block-content">
          <div class="block-content-item">AWS</div>
          <div class="block-content-item">Netlify</div>
          <div class="block-content-item">Firebase</div>
          <div class="block-content-item">Vercel</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .main {
    padding-top: 50px;
    background: black;
    color: white;
    z-index: 4;
    position: relative;
    box-shadow: inset 0px -1px 0px 0px #232323;
    overflow: hidden;
  }

  .react-image {
    position: absolute;
    right: 0;
    top: -40px;
    transform: translateX(20%);
    animation: rotate 25s linear infinite;
    will-change: transform;
  }

  .container {
    max-width: 1300px;
    padding: 0 100px;
    margin: auto;
    padding-bottom: 70px;
    position: relative;
  }

  .title-part .title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 5px;
  }

  .title-part .subtitle {
    font-size: 20px;
    color: #53c1de;
    font-style: italic;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
  }

  .block-content {
    display: flex;
    font-weight: bold;
    font-size: 15px;
    padding-top: 10px;
  }

  .block-content-item {
    margin-right: 20px;
  }

  .block-title {
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #575757;
  }

  @keyframes rotate {
    from {
      transform: translateX(20%) rotate(0deg);
    }
    to {
      transform: translateX(20%) rotate(360deg);
    }
  }

  @keyframes rotate-mobile {
    from {
      transform: translateX(20%) rotate(0deg);
    }
    to {
      transform: translateX(20%) rotate(360deg);
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      padding: 0 32px;
      padding-bottom: 40px;
    }
    .content {
      display: block;
    }

    .block {
      margin-bottom: 40px;
    }

    .block-content {
      padding-top: 5px;
      font-size: 14px;
    }

    .react-image {
      position: absolute;
      right: -70px;
      top: -120px;
      transform: translateX(20%);
      animation: rotate 25s linear infinite;
      will-change: transform;
    }
  }
</style>
