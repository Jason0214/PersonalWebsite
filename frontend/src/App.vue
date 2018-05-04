<template>
  <div id="app">
    <div class="side-bar">
      <div class="cover">
        <span style="margin-top: 4em">tender is the night ✨</span>
      </div>
      <div class="avatar">
        <img style="margin-top: 5px; border-radius: 150px" width="100px" height="100px" src="/resource/avatar"/>
      </div>
      <div style="margin-top: 80px;">
        <div ref="moments" class="router-btn button" @click="goto('/moments')">Moments</div>
        <div ref="photos" class="router-btn button" @click="goto('/photos')">Photos</div>
        <div ref="blogs" class="router-btn button" @click="goto('/blogs')">Blogs</div>
        <div ref="todos" class="router-btn button" @click="goto('/todos')">Crazy Thoughts</div>
      </div>
      <div class="icon-bar">
        <a class="icon-btn" href="https://github.com/Jason0214" target="_blanket">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
        <a class="icon-btn" href="mailto:lujc.me@gmail.com" target="_blanket">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </a>
        <a class="icon-btn" href="https://telegram.me/lu_jc" target="_blanket">
          <i class="fa fa-telegram" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goto: function (path) {
      this.$router.push(path)
    }
  },
  // mounted: function () {
  //   this.$refs.moments.style.textDecoration = 'underline';
  // },
  computed: {

  }
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
  padding: 0 2em 0 2em;

  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
  background: #eaeaea;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
*, *:before, *:after{
  box-sizing: border-box;
}
a {
    color: inherit;
    text-decoration: inherit;
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
.content {
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
.router-btn {
  margin: 1em 4em 1em 4em;
  cursor: pointer;
}
.icon-bar {
  margin: 4em 1em 2em 1em;
  padding: 0 1em 0 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-color: lightgrey;
  border-bottom-style: solid;
  border-width: 1px;
}
.icon-btn {
  flex-grow: 1;
  font-size: 1.5em;
}
.button:hover {
  color: coral;
}
</style>
