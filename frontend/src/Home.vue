<template>
  <div id="container">
    <div style="grid-area:col1;">
      <div class="side-bar">

      </div>
    </div>
    <div style="grid-area:col2; margin-left: 3em;">
      <div style="height:3em"></div>
      <div class="content">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style scoped>
#container {
  margin: 0 2em 0 2em;
  display: grid;
  grid-template-areas: "col1 col2";
  grid-template-columns: 300px auto;
  height: 100%;
}
.side-bar {
  background: white;
  margin-top: 1em;
  height: 95%;
}
.content {
  background: black;
}
</style>
