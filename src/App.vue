<template>
  <div id="app">
    <v-header></v-header>
    <tab></tab>
    <keep-alive><router-view/></keep-alive>
  </div>
</template>

<script>
import VHeader from 'components/header/header'
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  components: {
    VHeader,
    Tab
  }
}
</script>

<style>
</style>
