<template>
    <div id="app">
      <!-- 路由部分 -->
      <router-view/>
      <!-- 导航部分 -->
      <!-- $route表示当前路由 -->
      <FootGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'

export default {
  components: {
    FootGuide
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
</style>
