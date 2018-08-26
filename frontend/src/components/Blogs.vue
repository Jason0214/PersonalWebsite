<template>
  <div class="blog-container">
    <div class="blog-card" v-for="(blog, index) in blogs" :key="index" @click="gotoBlogPage(index)">
      <img class="blog-avatar" :src="blog.cover" />
      <div style="flex-grow: 1;">
        <div class="blog-title">{{blog.title}}</div>
        <div class="blog-snippet">{{blog.abstract}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/api.js'
export default {
  name: 'blogs',
  data () {
    return {
      blogs: []
    }
  },
  mounted () {
    this.getBlogList()
      .then((blogList) => {
        this.blogs = blogList
      })
  },
  methods: {
    gotoBlogPage: function (blogIndex) {
      let blogId = this.blogs[blogIndex].id
      this.$router.push('/blog/' + blogId)
    },
    getBlogList: async function () {
      let response = await Api().get('/blog')
      return response['data']
    }
  }
}
</script>

<style scoped>
.blog-container {
  margin-top: 1em;
  width: 60%;
  min-width: 320px;
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
.blog-card {
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
.blog-card:hover {
  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);
  cursor: pointer;
}
.blog-avatar {
  max-height: inherit;
  max-width: 30%;
  width: auto;
  height: auto;
  border-radius: inherit;
}
.blog-title {
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
}
.blog-snippet {
  text-align: left;
  padding: 0 1em 0 1em;
}
@media only screen and (max-width: 1024px) {
  .blog-container {
    width: 80%;
  }
}
@media only screen and (max-width: 768px) {
  .blog-card {
    max-height: 100px;
  }
}
@media only screen and (max-width: 425px) {
  .blog-card {
    max-height: 80px;
  }
}
</style>
