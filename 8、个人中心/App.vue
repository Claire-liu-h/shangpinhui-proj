<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    //派发一个action，获取商品分类的三级列表数据（从typeNav转移到这，categoryList只执行一次）
    this.$store.dispatch('home/categoryList')
  }
}
</script>

<style>
</style>
