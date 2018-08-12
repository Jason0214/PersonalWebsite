<template>
  <div class="post-container">
    <div class="post-card" @click="gotoPost()">
      <img class="post-avatar" src="/static/disorder.jpg" />
      <div style="flex-grow: 1;">
        <div class="post-title">lalalalalalalala</div>
        <div class="post-snippet">lalalalalalalaalalaal</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogs',
  methods: {
    gotoPost () {
      this.$router.push('blogpost/testcase0.md')
    }
  }
}
</script>

<style scoped>
.post-container {
  margin-top: 1em;
  width: 60%;
  min-width: 350px;
  max-width: 850px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px 20px 20px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-self: center;
  overflow: scroll;
}
.post-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-top-color: #efefef;
  border-top-style: solid;
  border-width: 1px;
  transition: 0.3s;
  border-radius: 5px;
  flex-grow: 1;
  max-height: 160px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px 0 10px 0;
}
.post-card:hover {
  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);
}
.post-avatar {
  max-height: inherit;
  width: auto;
  height: auto;
  border-radius: inherit;
}
.post-title {
  font-size: 2em;
  font-weight: bold;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
}
.post-snippet {
  text-align: left;
  padding: 0 1em 0 1em;
}
@media only screen and (max-width: 1024px) {
  .post-container {
    width: 80%;
  }
}
@media only screen and (max-width: 768px) {
  .post-card {
    max-height: 100px;
  }
}
@media only screen and (max-width: 425px) {
  .post-card {
    max-height: 80px;
  }
}
</style>
