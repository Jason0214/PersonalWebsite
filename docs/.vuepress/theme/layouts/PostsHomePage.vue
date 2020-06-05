<template>
  <div
    class="theme-container no-sidebar"
    :class="{ 'sidebar-open': isSidebarOpen }"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap"
      rel="stylesheet"
    />

    <Navbar @toggle-sidebar="toggleSidebar" />
    <div class="sidebar-mask" @click="toggleSidebar(false)" />
    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar" />

    <div class="page">
      <div v-for="(page, page_idx) in getSortedPostsPages($site.pages)">
        <div v-if="page_idx > 0" class="sep"></div>
        <div class="item" @click="$router.push(page.path)">
          <div class="title">{{page.title}}</div>
          <div class="description">{{getPostPreview(page.excerpt)}}</div>
          <div class="footer">
            <TimeSvg />
            {{page.frontmatter.date.split("T")[0]}}
          </div>
          <div class="footer">
            <TagSvg />
            <span v-for="(tag, tag_idx) in page.frontmatter.tags">
              <span v-if="tag_idx > 0">,</span>
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
import TagSvg from "@theme/svg/Tag.vue";
import TimeSvg from "@theme/svg/Time.vue";
import { resolveSidebarItems } from "../util";
export default {
  name: "Home",
  components: {
    Navbar,
    Sidebar,
    TimeSvg,
    TagSvg
  },
  data() {
    return {
      isSidebarOpen: false
    };
  },
  mounted() {
    this.isSidebarOpen = false;
  },
  methods: {
    getPostPreview(excerpt) {
      if (!excerpt) {
        return "......";
      }
      return (
        excerpt.replace(/<\/?[^>]+(>|$)/g, "").replace(/[,.?!]\s*$/, "") +
        "......"
      );
    },
    getSortedPostsPages(pages) {
      return pages
        .filter(page => {
          return page.path.startsWith("/posts/");
        })
        .sort((a, b) => {
          if (Date.parse(a.frontmatter.date) > Date.parse(b.frontmatter.date)) {
            return -1;
          }
          return 1;
        });
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
    color: lighten($textColor, 20%);
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
