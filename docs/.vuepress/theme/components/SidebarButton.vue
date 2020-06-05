<template>
  <div class="sidebar-button" @click="$emit('toggle-sidebar')">
    <BurgerSvg />
  </div>
</template>

<script>
import BurgerSvg from "../svg/Burger.vue";
export default {
  components: {
    BurgerSvg
  }
};
</script>

<style lang="stylus">
.sidebar-button {
  cursor: pointer;
  display: none;
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  padding: 0.6rem;
  top: 0.6rem;
  left: 1rem;

  .icon {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
  }
}

@media (max-width: $MQMobile) {
  .sidebar-button {
    display: block;
  }
}
</style>
