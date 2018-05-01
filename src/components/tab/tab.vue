<template>
  <div class='tab'>
    <router-link tag='div' class='tab-item' v-for='(item, i) in tabs' :key='i' :to='item.to'>
      <span class='tab-link'>{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          {to: '/recommend', text: '推荐'},
          {to: '/singer', text: '歌手'},
          {to: '/rank', text: '排行'},
          {to: '/search', text: '搜索'}
        ]
      }
    }
  }
</script>

<style scoped lang='stylus'>
  @import '~lib/stylus/variable'
    .tab
      display flex
      height 44px
      line-height 44px
      font-size $font-size-medium
      .tab-item
        flex 1
        text-align center
        .tab-link
          padding-bottom 5px
          color $color-text-l
        &.active
          .tab-link
            color $color-theme
            border-bottom 2px solid $color-theme  
</style>