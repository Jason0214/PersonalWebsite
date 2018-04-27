<template>
  <div id="container">
    <div class="side-bar">

    </div>
    <div class="content">
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
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.side-bar {
  flex-grow: 2;

  display: flex;
  flex-direction: column;

  background: white;
  margin-top: 1em;
  margin-bottom: 1em;
  top: 0;
  min-height: 100px;
  max-height: 90%;
  overflow: scroll;
}
.content{
  flex-grow: 5;

  display: flex;
  flex-direction: column;
  margin-left: 3em;
  margin-top: 3em;

  min-height: 100px;
  max-height: 90%;
  overflow: scroll;
}
</style>
