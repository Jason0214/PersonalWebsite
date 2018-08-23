<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
    <navigator></navigator>
    <router-view/>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator.vue'
export default {
  name: 'app',
  components: {
    Navigator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  height: 100vh;
}
body {
  margin: 0 0 0 0;
  background: white;
}
a {
  text-decoration: none;
}
*, *:before, *:after{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 768px) {
  #app {
    font-size: 2vw;
  }
}
</style>
