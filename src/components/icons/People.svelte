<script>
  import anime from "animejs/lib/anime.es.js";
  import { onMount } from "svelte";
  let people, head, body, smallHead1, smallHead2, smallBody1, smallBody2, smile;
  let tl;

  onMount(() => {
    tl = anime.timeline({
      easing: "linear",
      loop: true,
    });

    tl.add({
      targets: [smallHead1, smallBody1, smallHead2, smallBody2],
      opacity: 0,
      duration: 750,
      delay: 3000,
    })
      .add(
        {
          targets: [body, head, smile],
          scale: 1.7,
          duration: 750,
        },
        "-=400"
      )
      .add({
        targets: smile,
        opacity: 1,
        duration: 500,
      })
      .add({
        targets: [body, head, smile],
        scale: 1,
        duration: 750,
        delay: 750,
      })
      .add({
        targets: smile,
        opacity: 0,
        duration: 500,
      })
      .add(
        {
          targets: [smallHead1, smallBody1, smallHead2, smallBody2],
          opacity: 1,
          duration: 750,
        },
        "-=400"
      );
  });
</script>

<svg
  width="36"
  height="30"
  viewBox="0 0 36 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  bind:this={people}>
  <path
    d="M30.2606 16.1964H27.5255C27.8043 16.9597 27.9566 17.7834 27.9566 18.6419V28.9788C27.9566 29.3368 27.8943 29.6803 27.7809 29.9999H32.3026C33.9916 29.9999 35.3657 28.6257 35.3657 26.9367V21.3016C35.3658 18.4866 33.0756 16.1964 30.2606 16.1964Z"
    fill="#88E179"
    bind:this={smallBody2} />
  <path
    d="M7.40921 18.642C7.40921 17.7834 7.56151 16.9598 7.8403 16.1965H5.10525C2.29021 16.1965 0 18.4867 0 21.3017V26.9369C0 28.6258 1.37409 30 3.06315 30H7.58486C7.47151 29.6803 7.40921 29.3368 7.40921 28.9789V18.642Z"
    fill="#88E179"
    bind:this={smallBody1} />
  <path
    d="M20.8092 13.5368H14.5565C11.7415 13.5368 9.45128 15.827 9.45128 18.642V28.9789C9.45128 29.5427 9.90841 30 10.4723 30H24.8934C25.4573 30 25.9145 29.5428 25.9145 28.9789V18.642C25.9145 15.827 23.6243 13.5368 20.8092 13.5368Z"
    fill="#88E179"
    bind:this={body} />
  <path
    d="M17.6829 0C14.2975 0 11.5432 2.75425 11.5432 6.13977C11.5432 8.43613 12.8107 10.4417 14.6824 11.4946C15.5702 11.9941 16.5938 12.2795 17.6829 12.2795C18.7721 12.2795 19.7956 11.9941 20.6834 11.4946C22.5553 10.4417 23.8226 8.43606 23.8226 6.13977C23.8226 2.75432 21.0684 0 17.6829 0Z"
    fill="#88E179"
    bind:this={head} />
  <path
    d="M6.90168 5.72271C4.36978 5.72271 2.31 7.78249 2.31 10.3144C2.31 12.8463 4.36978 14.9061 6.90168 14.9061C7.54393 14.9061 8.15551 14.773 8.71107 14.5339C9.67161 14.1204 10.4636 13.3883 10.9537 12.4714C11.2977 11.8278 11.4934 11.0936 11.4934 10.3144C11.4934 7.78256 9.43359 5.72271 6.90168 5.72271Z"
    fill="#88E179"
    bind:this={smallHead1} />
  <path
    d="M28.4641 5.72271C25.9322 5.72271 23.8724 7.78249 23.8724 10.3144C23.8724 11.0937 24.0681 11.8279 24.4121 12.4714C24.9022 13.3884 25.6942 14.1204 26.6547 14.5339C27.2103 14.773 27.8219 14.9061 28.4641 14.9061C30.996 14.9061 33.0558 12.8463 33.0558 10.3144C33.0558 7.78249 30.996 5.72271 28.4641 5.72271Z"
    fill="#88E179"
    bind:this={smallHead2} />
  <path
    d="M20.1606 7.62283H15.0176C15.0176 7.62283 15.4385 9.63314 17.5891 9.63314C19.7397 9.63314 20.1606 7.62283 20.1606 7.62283Z"
    fill="white"
    style="opacity: 0;"
    bind:this={smile} />
</svg>

<style>
  path {
    transform-origin: 50% 0%;
    /* transform-box: fill-box; */
  }
</style>
