<script>
  import anime from "animejs/lib/anime.es.js";
  import { onMount } from "svelte";
  let phone;
  let tl;

  onMount(() => {
    tl = anime.timeline({
      loop: true,
    });

    tl.add({
      targets: phone,
      rotate: "90deg",
      easing: "easeInOutCubic",
      duration: 500,
      scaleX: 1.5,
      delay: 3000,
    }).add({
      targets: phone,
      rotate: "0deg",
      easing: "easeInOutCubic",
      duration: 500,
      scaleX: 1,
      delay: 1500,
    });
  });
</script>

<svg
  width="19"
  height="30"
  viewBox="0 0 19 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  bind:this={phone}>
  <path
    d="M18.0682 0.839876V0.836777C17.5357 0.301472 16.8119 0.000309917 16.0568 0H2.84504C1.27585 0.00511364 0.00511364 1.27585 0 2.84504V27.1519C0.000309917 27.9069 0.301472 28.6307 0.836777 29.1632C1.36852 29.6978 2.09109 29.9988 2.84504 30H16.0599C16.8139 29.9988 17.5364 29.6978 18.0682 29.1632C18.6027 28.6315 18.9038 27.9089 18.905 27.155V2.84814C18.9038 2.09419 18.6027 1.37162 18.0682 0.839876ZM9.45248 28.0692C9.02797 28.0692 8.68388 27.7251 8.68388 27.3006C8.68388 26.8761 9.02797 26.532 9.45248 26.532C9.87699 26.532 10.2211 26.8761 10.2211 27.3006C10.2211 27.7251 9.87699 28.0692 9.45248 28.0692ZM16.6457 23.2438C16.6457 24.2708 15.8131 25.1033 14.7862 25.1033H4.1157C3.08871 25.1033 2.2562 24.2708 2.2562 23.2438V5.12913C2.2562 4.10214 3.08871 3.26963 4.1157 3.26963H14.7893C15.8162 3.26963 16.6488 4.10214 16.6488 5.12913L16.6457 23.2438Z"
    fill="#BB85FF" />
</svg>

<style>
  path {
    transform-origin: 50% 50%;
    transform-box: fill-box;
  }
</style>
