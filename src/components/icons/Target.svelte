<script>
  import anime from "animejs/lib/anime.es.js";
  import { onMount } from "svelte";
  let target, circle;
  let tl;

  onMount(() => {
    tl = anime.timeline({
      loop: true,
    });

    tl.add({
      targets: circle,
      scale: 1.7,
      easing: "easeInCubic",
      duration: 500,
      delay: 3000,
    })
      .add({
        targets: target,
        rotate: "90deg",
        easing: "easeInCubic",
        duration: 500,
        delay: 250,
      })
      .add({
        targets: circle,
        scale: 1,
        easing: "easeInCubic",
        duration: 500,
        delay: 250,
      });
  });
</script>

<svg
  width="30"
  height="30"
  viewBox="0 0 30 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  bind:this={target}>
  <path
    d="M29.0625 14.0625H26.2031C25.7494 8.60627 21.3937 4.25064 15.9375 3.79689V0.937515C15.9375 0.420015 15.5175 1.52588e-05 15 1.52588e-05C14.4825 1.52588e-05 14.0625 0.420015 14.0625 0.937515V3.79689C8.60625 4.25064 4.25063 8.60627 3.79688 14.0625H0.9375C0.42 14.0625 0 14.4825 0 15C0 15.5175 0.42 15.9375 0.9375 15.9375H3.795C4.24875 21.3919 8.60625 25.7494 14.0625 26.2031V29.0625C14.0625 29.58 14.4825 30 15 30C15.5175 30 15.9375 29.58 15.9375 29.0625V26.2031C21.3937 25.7494 25.7512 21.3938 26.205 15.9375H29.0625C29.58 15.9375 30 15.5175 30 15C30 14.4825 29.58 14.0625 29.0625 14.0625ZM15 18.75C12.9281 18.75 11.25 17.0719 11.25 15C11.25 12.9281 12.9281 11.25 15 11.25C17.0719 11.25 18.75 12.9281 18.75 15C18.75 17.07 17.0719 18.75 15 18.75Z"
    fill="#FFD600" />
  <circle
    bind:this={circle}
    cx="14.9864"
    cy="14.9924"
    r="3.84187"
    fill="black" />
</svg>

<style>
  circle {
    transform-origin: 50% 50%;
    transform-box: fill-box;
  }
</style>
