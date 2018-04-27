<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background: #eaeaea;

  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}
*, *:before, *:after{
  box-sizing: border-box;
}
</style>
