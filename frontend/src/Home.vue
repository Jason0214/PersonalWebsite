<template>
  <div id="container">
    <div class="side-bar">
      <div class="cover">
        <span style="margin-top: 4em">tender is the night ✨</span>
      </div>
      <div class="avatar">
        <img style="margin-top: 5px; border-radius: 150px" width="100px" height="100px" src="/resource/avatar"/>
      </div>
      <div style="margin-top: 100px;">
        Jason 🍺
      </div>
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
  width: 300px;

  display: flex;
  flex-direction: column;

  background: white;
  margin-top: 1em;
  margin-bottom: 1em;
  top: 0;
  min-height: 100px;
  max-height: 90%;
  overflow: scroll;
  padding-bottom: 2em;
}
.cover {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  background: teal;
  height: 200px;
  color: white;
  z-index: 1;
}
.avatar {
  position: absolute;
  align-self: center;
  background: white;
  margin-top: 145px;
  height: 110px;
  width: 110px;
  border-radius: 160px;
  z-index: 5;
}
.content{
  flex-grow: 1;
  width: auto;
  background: white;

  display: flex;
  flex-direction: column;
  margin-left: 3em;
  margin-top: 3em;

  min-height: 100px;
  max-height: 90%;
  overflow: scroll;
}
</style>
