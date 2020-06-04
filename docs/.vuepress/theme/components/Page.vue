<template>
  <main class="page">
    <slot name="top" />

    <h1 :id="titleToId(frontMatters.title)">
      <a :href="'\#' + titleToId(frontMatters.title)" class="header-anchor">#</a>
      {{ frontMatters.title }}
    </h1>

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems", "frontMatters"],
  methods: {
    titleToId: str => {
      return str
        .toLowerCase()
        .split(" ")
        .filter(item => {
          return item != "";
        })
        .join("-");
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>
