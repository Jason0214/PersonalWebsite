<template>
  <div
    class="theme-container no-sidebar"
    :class="{ 'sidebar-open': isSidebarOpen }"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar @toggle-sidebar="toggleSidebar" />
    <div class="sidebar-mask" @click="toggleSidebar(false)" />
    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar" />
    <Content class="photos-container" />
    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/2.0/">
      <img
        alt="Creative Commons License"
        style="border-width: 0"
        src="https://i.creativecommons.org/l/by-nc-sa/2.0/88x31.png" />
    </a>
    <br />This work is licensed under a
    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/2.0/">
      Creative Commons Attribution-NonCommercial-ShareAlike 2.0 Generic License
    </a>.
  </div>
</template>

<script>
import Navbar from "@theme/components/Navbar.vue";
import Sidebar from "@theme/components/Sidebar.vue";
export default {
  components: {
    Navbar,
    Sidebar
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
