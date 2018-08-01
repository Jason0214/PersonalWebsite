<template>
  <div id="app">
    <div class="header">
      <div class="logo"> </div>
      <div class="routers">
        <div class="button" v-for="(item, index) in routers" :key=index @click="goto(index)" :class="routerActive == index? item['color-class'] : null">
          <span v-html="item['name']"></span>
        </div>
      </div>
    </div>
   <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      routerActive: 0,
      routers: [
        {
          'name': 'Home',
          'url': '/',
          'color-class': 'orange-gradient'
        },
        {
          'name': 'Blog',
          'url': '/blog',
          'color-class': 'green-gradient'
        },
        {
          'name': 'Photo',
          'url': '/photo',
          'color-class': 'blue-gradient'
        },
        {
          'name': 'Moment',
          'url': '/moment',
          'color-class': 'orange-gradient'
        }
      ]
    }
  },
  methods: {
    goto: function (routerIndex) {
      this.routerActive = routerIndex
      this.$router.push(this.routers[routerIndex]['url'])
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: calc(100vh - 200px);
  font-size: 16px;
}
.header {
  background: #212326;
  height: 60px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0,0,0,.5);
}
.routers {
  position: absolute;
  left: 50%;
  display: flex;
  height: inherit;
}
.button {
  font-size: 1.2em;
  padding: 10px 20px 0 20px;
  width: 5em;
  cursor: pointer;
  color: #9e9e9e;
}
.green-gradient {
  background: linear-gradient(-15deg, limegreen, yellow);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.blue-gradient {
  background: linear-gradient(-15deg, cyan, violet);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.orange-gradient {
  background: linear-gradient(-15deg, #f16581, orange);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
*, *:before, *:after{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-repeat: no-repeat;
}
body {
  margin: 0 0 0 0;
  background: white;
}
@media only screen and (max-width: 768px) {
  #app {
    font-size: 2vw;
  }
}
</style>
