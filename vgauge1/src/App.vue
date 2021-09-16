<template>
  <div id="app">
    <h3>Will not stop at 100</h3>
    <v-gauge :value="x" top :width="width"/>
    <hr>
    <h3>Will stop at 100</h3>
    <v-gauge :value="y" unit="%" :width="width"/>
    <hr>
    <h3>Donut</h3>
    <v-gauge :value="z" :options="options" :donut="true"/>
  </div>
</template>

<script>
import VGauge from "vgauge";

export default {
  name: "App",
  components: {
    VGauge
  },
  data() {
    return {
      x: 0,
      y: 0,
      z: 0,
      width: "400px",
      options: {
        angle: 1,
        lineWidth: 0.1,
        radiusScale: 1,
        pointer: {
          length: 0.6,
          strokeWidth: 0.035,
          color: "#000000"
        },
        limitMax: false,
        limitMin: false,
        colorStart: "#6FADCF",
        colorStop: "#8FC0DA",
        strokeColor: "#E0E0E0",
        generateGradient: true,
        highDpiSupport: true
      }
    };
  },
  mounted() {
    setInterval(() => {
      this.x += 4;
    }, 1000);
    setInterval(() => {
      if (this.y < 100) this.y += 5;
    }, 1000);
    setInterval(() => {
      if (this.z < 100 && this.z + 3 <= 100) this.z += 3;
      else this.z += 100 - this.z;
    }, 1000);
  }
};
</script>

<style scoped>
>>> span {
  text-align: center;
  font-weight: bold;
  display: block;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
