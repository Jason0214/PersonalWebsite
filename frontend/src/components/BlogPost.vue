<template>
  <div>
    <vue-markdown :source=markdownText></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Api from '@/api.js'
export default {
  name: 'blogpage',
  data () {
    return {
      markdownText: ''
    }
  },
  mounted () {
    // let blogId = this.$route.params.id
    this.getMarkdownTxt('testcase0.md')
      .then(data => {
        this.markdownText = data
      })
  },
  components: {
    VueMarkdown
  },
  methods: {
    getMarkdownTxt: async function (postName) {
      let response = await Api().get('/blog/get?name=' + postName)
      return response.data['text']
    }
  }
}
</script>

<style scoped>
</style>
