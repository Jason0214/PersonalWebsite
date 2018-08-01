<template>
  <div class="container">
    <div class="main-page">
      <div class="main-content">
        <div class="content-background" :style="{ backgroundImage: 'url('+require('../../assets/selfie.jpg')+')' }"></div>
        <div class="content-overlay">
        </div>
      </div>
      <div class="bottom-overlay">
        <div style="height: 50px; background-image: linear-gradient(-1deg, #b54251 49%, transparent 50%);"> </div>
        <div style="flex-grow: 1; background: #b54251;">
          lalal
        </div>
        <div style="height: 100px; background-image: linear-gradient(1deg, transparent 50%, #b54251 49%);"> </div>
      </div>
    </div>
    <div class="cards-container">
      aaaa
      bbbb
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  date () {
    return {
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: scroll;
}
.main-page {
  width: 100%;
  height: calc(100vw * 0.7);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex-grow: 0.8;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.content-background {
  z-index: -2;
  max-width: 100%;
  height: auto;
  flex-grow: 0.5;
  background-position: right top;
}
.content-overlay {
  z-index: -1;
  background: white;
  margin: -100px;
  flex-grow: 0.5;
  transform: rotate(10deg);
}
.bottom-overlay {
  z-index: 0;
  flex-grow: 0.2;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
}

</style>
