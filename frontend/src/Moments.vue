<template>
  <div class="container">
    <div class="box">
      <div class="message">
        <div class="message-avatar">
          <img style="border-radius:4px" width="40px" height="40px" src="/resource/avatar"/>
        </div>
        <div class="message-bubble">
          <div style="display: flex; flex-direction: column; width: 100%">
            <div class="message-header">
              Jason edited at 2017
            </div>
            <div class="message-content">
              alalalalalalasdfasdfasdfasdgasgdasfasddddddf asdfga gasgasgasdf agasdg asdg  alll
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="comments-panel" v-if="openCommit == true">
            <div class="comment">
              <div class="message-avatar">
                <img style="border-radius:4px" width="30px" height="30px" src="/resource/avatar"/>
              </div>
              <div class="comment-content">
                lalalalala
              </div>
            </div>
            <div class="new-comment">
              <input style="width:200px;" type="text" />
            </div>
        </div>
        <div class="comments-panel-btn">
          <span style="font-size: 12px" @click="openCommit = !openCommit">comments</span>
          <i v-if="openCommit == false" class="fa fa-angle-down"></i>
          <i v-else class="fa fa-angle-up"></i>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="date">
        2017-05-14
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'moments',
  data () {
    return {
      openCommit: false
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3em 2em 3em 2em;
}
.message {
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 4px;
}
.message-avatar {
  display: flex;
  flex-direction: column;
  padding: 5px 5px 5px 5px;
}
.message-bubble {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-self: stretch;
  margin-top: 5px;
}
.message-bubble:before {
  content:'';
  display: block;
  margin: 10px 0 10px 0;
  width: 10px;
  height: 10px;
  border-width: 10px 10px 10px 0;
  border-style: solid;
  border-color: transparent #E0F7FA transparent #E0F7FA;
}
.message-header {
  display: flex;
  flex-direction: row;
  background: #E0F7FA;
  padding: 10px 20px 10px 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-right-style: solid;
  border-color: #BBDEFB;
  border-width: 1px;
  font-size: 18x;
  color: #546E7A;
}
.message-content {
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: #BBDEFB;
  border-width: 1px;
  padding: 1em 1em 1em 1em;
  text-align: left;
  font-size: 16px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
.date {
  font-size: 14px;
  color: #90A4AE;
  text-align: left;
  margin: 5px 80px 5px 80px
}
.box:after {
  content: "";
  height: 1em;
  display: block;
  margin-top: 5px;
  margin-left: 100px;
  border-left-style: solid;
  border-width: 1px;
  border-color: #CFD8DC
}
.comments-panel {
  background: #FAFAFA;
  margin-left: 80px;
  border-color: #CFD8DC;
  border-width: 1px;
  border-bottom-style: solid;
}
.comments-panel-btn {
  float: right;
  border-width: 1px;
  padding: 0 5px 0 5px;
  border-color: #CFD8DC;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-radius: 2px;
  cursor: pointer;
}
.comments-panel-btn:active {
  border-style: inset;
}
.comment {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.comment-content {
  display: flex;
  flex-direction: column;
  padding: 1em 1em 1em 1em;
  font-size: 14px;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
.new-comment {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-width: 1px;
  border-top-style: solid;
  border-color: #CFD8DC;
  background: #E8EAF6;
  margin: 5px 20px 5px 20px;
  padding: 5px 5px 0 5px;
}
</style>
