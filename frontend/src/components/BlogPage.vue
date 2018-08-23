<template>
  <div class="text-background">
    <div class="text-container">
      <vue-markdown style="width:inheirt;" :source=markdownText></vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Prism from 'prismjs'
import Api from '@/api.js'
export default {
  name: 'blogpage',
  data () {
    return {
      markdownText: ''
    }
  },
  mounted () {
    this.getMarkdownTxt(this.$route.params.id)
      .then(data => {
        this.markdownText = data
      })
      .then(() => {
        Prism.highlightAll()
      })
  },
  components: {
    VueMarkdown
  },
  methods: {
    getMarkdownTxt: async function (blogId) {
      let response = await Api().get('/blog/get?id=' + blogId)
      return response.data['text']
    }
  }
}
</script>

<style scoped>
.text-background {
  background: #e8e6e3;
  margin-top: 4px;
  height: 100%;
}
.text-container {
  text-align: left;
  width: 60%;
  min-width: 300px;
  max-width: 1000px;
  padding-left: 4em;
  padding-right: 4em;
  padding-bottom: 2em;
  margin-left: auto;
  margin-right: auto;
  overflow-y: scroll;
  font-family: "Merriweather", Georgia, serif;
  font-size: 0.9em;
  box-shadow: 0 0 30px rgba(71, 51, 31, 0.05);
  background: white;
}
p {
  background: black;
}
</style>

<style>
blockquote {
  background: #f9fafb;
  border: solid 1px #f3f5f7;
  border-bottom: solid 1px #dee8ed;
  border-radius: 3px;
  padding-left: 10px;
  font-style: italic;
  color: #73848c;
  font-weight: 400;
  line-height: 1.5em;
  margin-left: 10px;
  margin-right: 10px;
}
li {
  margin: 0.5em 0 0.5em 0;
}
a {
  color: #1481b8;
  outline: none;
  border-bottom: solid 1px rgba(209, 236, 250, 0);
  transition: color 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
}
h1 {
  font: "Source Sans Pro", Georgia, serif;
  font-weight: 200;
  font-size: 3em;
  padding: 2em 0 4px 0;
  border-bottom: solid 1px #eeeeee;
}
h2 {
  font: "Source Sans Pro", Georgia, serif;
  font-weight: 300;
  font-size: 1.75em;
  padding: 0 0 2px 30px;
  margin-top: 1.5em;
  border-left: solid 8px rgb(45, 55, 71);;
}
</style>
