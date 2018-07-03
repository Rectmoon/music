<template>
  <div class="recommend" ref='recommend'>
    <scroll ref='scroll' class='recommend-content'>
      <div>
        <div v-if='recommends.length' class='slide-wrapper' ref='sliderWrapper'>
          <slider>
            <div v-for='item in recommends'>
              <a :href="item.linkUrl"><img :src="item.picUrl" class='needsclick' @load='loadImage'></a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class='list-title'>热门歌单推荐</h1>
          <ul v-if='discList.length'>
            <li v-for='item in discList' :key='item.dissid' class='item' @click='selectItem(item)'>
              <div class="icon"><img width='60' height='60' v-lazy='item.imgurl'></div>
              <div class="text">
                <h2 class='name' v-html='item.creator.name'></h2>
                <p class="desc" v-html='item.dissname'></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show='!discList.length'>11</div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Scroll from 'common/scroll/scroll'
import Slider from 'common/slider/slider'
import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'

export default {
  name: 'Recommend',
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  data() {
    return {
      recommends: [],
      discList: []
    }
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) this.recommends = res.data.slider
      })
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) this.discList = res.data.list
      })
    },
    loadImage() {
      if (!this.checkLoaded) {
        this.checkLoaded = true
        this.$refs.scroll.refresh()
      }
    },
    selectItem(item) {
      this.$router.push({
        path: `/recommend/${item.dissid}`
      })
      this.setDisc(item)
    },
    ...mapMutations({
      setDisc: 'SET_DISC'
    })
  },
  components: {
    Scroll,
    Slider
  }
}
</script>

<style scoped lang='stylus'>
@import '~lib/stylus/variable'
@import '~lib/stylus/mixin'
.recommend
  position fixed
  width 100%
  top 88px
  bottom 0
  .recommend-content
    height 100%
    overflow hidden
    .slider-wrapper
      position relative
      width 100%
      overflow hidden
    .recommend-list
      .list-title
        height 65px
        line-height 65px
        text-align center
        font-size $font-size-medium
        color $color-theme
      .item
        display flex
        box-sizing border-box
        align-items center
        padding 0 20px 20px 20px
        .icon
          flex 0 0 60px
          width 6px
          padding-right 20px
        .text
          display flex
          flex-direction column
          justify-content center
          flex 1
          line-height 20px
          font-size $font-size-medium
          .name
            margin-bottom 10px
            color $color-text
          .desc
            color $color-text-d
            no-wrap()
  .loading-container
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
</style>
