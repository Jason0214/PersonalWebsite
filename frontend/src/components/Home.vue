<template>
  <div class="container">
    <div class="main-content">
      <div class="content-background" :style="{ backgroundImage: 'url('+require('../../assets/selfie.jpg')+')' }"></div>
      <div class="content-overlay">
        <div style="padding: 10em 3em 10em 3em; text-align: left; transform: rotate(-10deg);">
          <!-- <span class="content-title">About Me</span>
          <br/>
          <ul>8 years taylor swift fan</ul>
          <ul>love Francis Scott Key Fitzgerald, tender is the night✨</ul>
          <ul>Boston celtics, Jayson Tatum rocks!!</ul> -->
        </div>
      </div>
    </div>
    <div class="bottom-overlay">
      <div style="height: 50px; background-image: linear-gradient(-1deg, #b54251 49%, transparent 50%);"> </div>
      <div class="bottem-content">
        <high-light></high-light>
      </div>
      <div style="height: 100px; background-image: linear-gradient(1deg, transparent 50%, #b54251 49%);"> </div>
    </div>
    <div class="cards-container">
    </div>
  </div>
</template>

<script>
import highLight from '@/components/Highlight'
export default {
  name: 'home',
  components: {
    highLight
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
.main-content {
  flex-grow: 3;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: flex-start;
  height: 105vh;
}
.content-background {
  z-index: -2;
  max-width: 100%;
  height: auto;
  flex-grow: 0.55;
  background-position: right top;
}
.content-title {
  background: linear-gradient(to right, #59c173, #a17fe0, #5d26c1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2em;
}
@media only screen and (max-width: 768px) {
  .content-background {
    display: none;
  }
  .main-content {
    height: 60vh;
  }
}
.content-overlay {
  z-index: -1;
  background: white;
  margin: -100px;
  flex-grow: 0.45;
  transform: rotate(10deg);
}
.bottom-overlay {
  z-index: 0;
  margin-top: -15%;
  display: flex;
  flex-direction: column;
  height: 15%;
}
.bottem-content {
  flex-grow: 1;
  background: #b54251;
  overflow: hidden;
}
</style>
