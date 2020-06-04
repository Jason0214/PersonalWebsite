<template>
  <div class="theme-container no-sidebar"
      :class="{ 'sidebar-open': isSidebarOpen }"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd">
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap"
      rel="stylesheet"
    />

    <Navbar @toggle-sidebar="toggleSidebar" />
    <div class="sidebar-mask" @click="toggleSidebar(false)" />
    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar"/>

    <div class="page">
      <div v-for="(page, page_idx) in getSortedPages($site.pages)">
        <div v-if="page_idx > 0" class="sep"></div>
        <div class="item"  @click="$router.push(page.path)">
          <div class="title">{{page.title}}</div>
          <div class="description">{{getPostPreview(page.excerpt)}}</div>
          <div class="footer">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock" > <circle cx="12" cy="12" r="10" /> <polyline points="12 6 12 12 16 14" /> </svg>
            {{page.frontmatter.date.split("T")[0]}}
          </div>
          <div class="footer">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag" > <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /> <line x1="7" y1="7" x2="7" y2="7" /> </svg>
            <span v-for="(tag, tag_idx) in page.frontmatter.tags">
              <span v-if="tag_idx > 0">, </span>
              {{tag}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@theme/components/Navbar.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util";
export default {
  name: "Home",
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {
      isSidebarOpen: false
    }
  },
  mounted () {
    this.isSidebarOpen = false
  },
  methods: {
    getPostPreview(excerpt) {
      return (
        excerpt.replace(/<\/?[^>]+(>|$)/g, "").replace(/[,.?!]\s*$/, "") +
        "......"
      );
    },
    getSortedPages(pages) {
      return pages.sort((a, b) => {
        if(Date.parse(a.frontmatter.date) > Date.parse(b.frontmatter.date)) {
          return -1;
        }
        return 1;
      })
    },
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
    },
    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@require '../styles/wrapper.styl';

add(a, b) {
  a + b;
}

.page {
  @extend $wrapper;
  display: flex;
  flex-direction: column;
  padding-top: $navbarHeight + 1rem;
}

.sep {
  width: 100%;
  height: 1px;
  background: $borderColor;
  margin: 1rem;
}

.item {
  padding: 0.5rem;
  overflow: hidden;

  .title {
    color: $textColor;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2em;
  }

  &:hover .title {
    color: $accentColor;
  }

  .description {
    margin-top: 1em;
    margin-bottom: 1em;
    font-family: 'Roboto', sans-serif;
    color: add($textColor, 0x 10101);
  }

  .footer svg {
    width: 0.6rem;
    height: 0.6rem;
  }

  .footer {
    display: inline;
    margin-right: 3em;
    font-size: 0.8em;
  }
}

@media (max-width: $MQMobile) {
  .item .footer {
    display: block;
  }
}

</style>
