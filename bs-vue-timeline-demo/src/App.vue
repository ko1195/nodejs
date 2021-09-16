<template>
  <div id="app">
    <Experience />
  </div>
</template>

<script>
import Experience from "./components/Experience";

export default {
  name: "App",
  components: {
    Experience
  }
};
</script>

<style>
 /* Updating this values will change the styles. Not updating them will fallback to defaults. */
 
  /* :root {
      --bvt-primary-color: #c00;
      --bvt-bg-secondary: #ddd;
      --bvt-timeline-color: #aaa;
      --bvt-timeline-text-color: #333;
      --bvt-border-color: var(--bvt-timeline-color);
      --bvt-duration-color: var(--bvt-primary-color);
      --bvt-box-shadow1: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)
    } */

  body {
    background-color: #f0f0f0;
  }
</style>
