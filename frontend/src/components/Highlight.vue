<template>
  <div>
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
    <br/>
    <div class="highlight-text">
      <span>This site is in experimental use, </span>
      <br/>
      <span>so enjoy your time with tons of bugs :) </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'high-light'
}
</script>

<style scoped>
.icon-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 30% 0 30%;
}
.icon-btn {
  flex-grow: 1;
  font-size: 2em;
  color: black;
}
.highlight-text {
  font-size: 2em;
  font-weight: bold;
}
</style>
