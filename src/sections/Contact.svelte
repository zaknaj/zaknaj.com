<script>
  import { onMount } from "svelte";

  let showNameInput = true;
  let showEmailInput = true;
  let name = "";
  let email = "";
  let message = "";

  let textAreaRef = null;
  let textAreaHeight = 2;
  let cloneRef = null;

  onMount(() => {});

  const handleNameBlur = (e) => {
    if (e.target.value.length > 0) {
      showNameInput = false;
    }
  };

  const handleEmailBlur = (e) => {
    if (e.target.value.length > 0) {
      showEmailInput = false;
    }
  };

  const handleNameClick = (e) => {
    showNameInput = true;
  };

  const handleEmailClick = (e) => {
    showEmailInput = true;
  };

  const init = (el) => {
    // el.focus();
    el.select();
  };

  const onMessageInput = () => {
    const lineheight = parseInt(
      window.getComputedStyle(cloneRef).lineHeight,
      10
    );
    const scrollHeight = cloneRef.scrollHeight;
    textAreaHeight = parseInt(scrollHeight / lineheight) + 1;
  };

  const onSubmit = () => {
    const newMessage = message
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/(?:\r\n|\r|\n)/g, "<br>");
    const data = {
      name,
      email,
      message: newMessage,
    };

    fetch("https://hook.integromat.com/s0slt684acfqt45qp1fqepy9jb94qahk", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
</script>

<div class="main">
  <div class="container">
    <div class="content">
      <div class="title">
        <div>Contact me</div>
        <div><img src="/images/paper-plane.svg" alt="paper plane icon" /></div>
      </div>
      <div class="online-form">
        <div class="form-box">
          <div class="name-input-container">
            Hello, my name is&nbsp
            {#if !showNameInput}
              <div class="name-container" on:click={handleNameClick}>
                {name}
              </div>
            {:else}
              <input
                on:blur={handleNameBlur}
                bind:value={name}
                placeholder="Your name here"
                use:init />
            {/if}.
          </div>
          <div class="email-input-container">
            You can reach me via email at&nbsp
            {#if !showEmailInput}
              <div class="email-container" on:click={handleEmailClick}>
                {email}
              </div>
            {:else}
              <input
                on:blur={handleEmailBlur}
                bind:value={email}
                placeholder="Your email here"
                use:init />
            {/if}.
          </div>
          <div class="message">
            <textarea
              bind:this={textAreaRef}
              bind:value={message}
              rows={textAreaHeight}
              on:input={onMessageInput}
              placeholder="Your message here" />
            <textarea
              class="textarea-clone"
              bind:this={cloneRef}
              bind:value={message}
              rows="6"
              placeholder="Your message here" />
          </div>
        </div>
        <div class="form-footer">
          <div class="error-msg">Please enter a valid email address.</div>
          <div>
            <button on:click={onSubmit}>Send <span>{'-->'}</span></button>
          </div>
        </div>
      </div>
      <div class="email-contact">
        <div class="icon"><img src="/images/email.svg" alt="email icon" /></div>
        <div class="text">or contact me by email directly at</div>
        <a href="mailto:hi@zaknaj.com"><div class="email">
            hi@zaknaj.com
          </div></a>
      </div>
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

  .container {
    max-width: 900px;
    padding: 0 100px;
    margin: auto;
    padding-bottom: 200px;
  }

  .title {
    font-weight: 600;
    font-size: 26px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title > div:first-child {
    margin-right: 16px;
  }

  .online-form .form-box {
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 2px;
    padding: 25px;
    min-height: 250px;
  }

  .form-box > div {
    margin-bottom: 35px;
    min-height: 35px;
  }

  .form-box > div:last-child {
    margin-bottom: 0px;
  }

  .form-box textarea {
    border: 0;
    width: 100%;
    max-width: 100%;
    padding: 0px;
    margin: 0px;
    font-family: inherit;
    font-size: inherit;
    color: white;
    background: transparent;
    outline: none;
    line-height: 24px;
    resize: none;
  }

  .textarea-clone {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  .form-box .message {
    position: relative;
  }

  .form-box textarea::placeholder {
    font-style: italic;
  }

  .form-footer {
    margin-top: 26px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 120px;
  }

  .email-contact {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .email-contact .text {
    font-style: italic;
  }

  .email-contact .email {
    letter-spacing: 0.1em;
    margin-left: 20px;
    position: relative;
    cursor: pointer;
  }

  .email-contact .email:before {
    height: 1px;
    background: white;
    content: "";
    position: absolute;
    bottom: -10px;
    width: 100%;
    left: 0;
    opacity: 0.3;
    transition: opacity 0.2s;
  }
  .email:hover:before {
    opacity: 0.6;
  }

  .email-contact .icon {
    display: flex;
    align-items: center;
    margin-right: 16px;
  }

  .form-footer button {
    background: transparent;
    font-family: inherit;
    font-size: 16px;
    outline: none;
    color: white;
    cursor: pointer;
    transition: 0.2s all;
    padding: 0px;
  }

  .form-footer button span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform;
  }

  .form-footer button:hover span {
    transform: translateX(5px);
  }

  .form-footer .error-msg {
    font-size: 14px;
    color: #ff3d3d;
  }

  .name-input-container,
  .email-input-container {
    line-height: 35px;
  }

  .email-container,
  .name-container {
    position: relative;
    cursor: pointer;
    display: inline-block;
  }

  .email-container:before,
  .name-container:before {
    height: 1px;
    background: white;
    content: "";
    position: absolute;
    bottom: 0px;
    width: 100%;
    left: 0;
    opacity: 0.5;
    transition: opacity 0.15s;
  }
  .email-container:hover:before,
  .name-container:hover:before {
    opacity: 1;
  }

  .name-input-container input,
  .email-input-container input {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    text-align: center;
    padding: 7px 10px;
    min-width: 0;
    width: 200px;
    display: inline-block;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    outline: none;
    transition: 0.25s all;
    background: transparent;
  }

  .name-input-container input:focus,
  .email-input-container input:focus {
    border-bottom: 1px solid white;
  }

  .name-input-container input::placeholder,
  .email-input-container input::placeholder {
    font-style: italic;
  }

  @media screen and (max-width: 600px) {
    .form-box textarea {
      line-height: 20px;
    }
    .container {
      padding: 0 32px;
      padding-bottom: 100px;
    }
    .content {
      display: block;
    }

    .email-contact {
      flex-direction: column;
    }

    .name-input-container,
    .email-input-container {
      line-height: unset;
    }

    .email-container:before,
    .name-container:before {
      bottom: -5px;
    }

    .form-box {
      font-size: 14px;
    }

    .form-footer {
      display: block;
      text-align: right;
    }

    .error-msg {
      margin-bottom: 8px;
      font-size: 12px;
    }

    .online-form .form-box {
      padding: 15px;
    }

    .email-contact .icon {
      margin-right: 0;
      margin-bottom: 16px;
    }
    .email-contact .email {
      margin-left: 0;
      margin-top: 16px;
    }
  }
</style>
