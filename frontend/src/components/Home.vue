<template>
  <div class="container">
    <div class="main-content">
      <img class="content-background" :src="require('../../assets/selfie.jpg')"/>
      <div class="content-overlay">
        <div style="padding: 5em 3em 5em 3em; text-align: left; transform: rotate(-10deg);">
          <span class="content-title">About Me</span>
          <br/>
          <ul class="content-text">
            <li>Believer of Florence + The Machine🤖 </li>
            <li>WarThunder player, poilet of Spitfire🇬🇧</li>
            <li>Fan of Boston Celtics🏀 (Jayson Tatum rocks!!</li>
            <li>Mostly live in the night, <span style="font-style:italic">Tender Is The Night✨</span></li>
            <li>While at the end, I am a programmer and a <span style="font-weight: bold">True Detective</span> (of 🐛</li>
          </ul>
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
  min-height: calc(100vh - 200px);
}
.main-content {
  flex-grow: 3;
  display: block;
  overflow: hidden;
  height: 105vh;
  min-height: 400px;
  max-width: 100%;
}
.content-background {
  z-index: -2;
  max-width: 100%;
  height: auto;
  right: 40%;
  position: absolute;
  background-position: right top;
}
.content-title {
  background: linear-gradient(to right, #59c173, #a17fe0, #5d26c1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2em;
}
.content-text {
  font-size: 1em;
  font-family: Georgia, serif;
}
.content-overlay {
  z-index: -1;
  background: white;
  flex-grow: 0.45;
  transform: rotate(10deg);
  position: absolute;
  left: 50%;
  height: 100%;
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
li {
  margin: 2px 0 2px 0;
}
@media only screen and (max-width: 768px) {
  .content-background {
    display: none;
  }
  .main-content {
    height: 40vh;
  }
  .content-overlay {
    left: 0;
  }
}
</style>
