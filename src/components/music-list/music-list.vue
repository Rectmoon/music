<template>
  <div class='music-list'>
    <div class="back" @click='$router.back()'>
      <i class="icon-back"></i>
    </div>
    <h1 class='title' v-html='title'></h1>
    <div class="bg-image" ref='bgImage'>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    bgImage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang='stylus'>
@import '~lib/stylus/variable'
@import '~lib/stylus/mixin'
.music-list
  position fixed
  z-index 100
  top 0
  left 0
  right 0
  bottom 0
  background $color-background
  .back
    position absolute
    top 0
    left 6px
    z-index 50
    .icon-back
      display block
      padding 10px
      font-size $font-size-large
      color $color-theme
</style>