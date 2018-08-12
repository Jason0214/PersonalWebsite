<template>
  <div class="header">
    <div class="dropdown-btn" @click="routersDropdown = !routersDropdown">
      <i class="fa fa-bars"></i>
    </div>
    <div v-show="routersDropdown" class="routers-dropdown">
      <router-link id="home-link" class="button" to="/" exact>Home</router-link>
      <router-link id="blog-link" class="button" to="/blog">Blog</router-link>
      <router-link id="photo-link" class="button" to="/photo">Photo</router-link>
      <router-link id="moment-link" class="button" to="/moment">Moment</router-link>
    </div>
    <div class="logo"></div>
    <div class="routers-bar">
      <router-link id="home-link" class="button" to="/" exact>Home</router-link>
      <router-link id="blog-link" class="button" to="/blog">Blog</router-link>
      <router-link id="photo-link" class="button" to="/photo">Photo</router-link>
      <router-link id="moment-link" class="button" to="/moment">Moment</router-link>
    </div>
    <div class="routers-dropdown"></div>
  </div>
</template>

<script>
export default {
  name: 'navigator',
  data () {
    return {
      routersDropdown: false
    }
  }
}
</script>

<style scoped>
.header {
  background: #212326;
  height: 50px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0,0,0,.5);
}
.dropdown-btn {
  display: none;
  position: fixed;
  font-size: 30px;
  color: #efefef;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 5px 5px 5px 5px;
}
.dropdown-btn:active {
  background-color: #3a3a3a;
}
.routers-dropdown {
  position: fixed;
  top: 50px;
  display: flex;
  flex-direction: column;
  background: #3a3a3a;
}
.logo {
  left: 2%;
  position: absolute;
  margin-top: 2px;
}
.routers-bar {
  position: absolute;
  left: 50%;
  display: flex;
  flex-direction: row;
  height: inherit;
}
.button {
  font-size: 1.2em;
  font-weight: 500;
  padding: 10px 20px 0 20px;
  width: 6em;
  cursor: pointer;
  color: #9e9e9e;
}
.button:hover {
  color: #efefef;
}
#home-link.router-link-active {
  background: linear-gradient(-15deg, limegreen, yellow);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#blog-link.router-link-active {
  background: linear-gradient(-15deg, cyan, violet);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#photo-link.router-link-active {
  background: linear-gradient(-15deg, #f16581, orange);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#moment-link.router-link-active {
  background: linear-gradient(-15deg, limegreen, yellow);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@media only screen and (max-width: 768px) {
  .routers-bar {
    display: none;
  }
  .dropdown-btn {
    display: block;
  }
}
</style>
