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
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'common/scroll/scroll'
  import Slider from 'common/slider/slider'
  import { getRecommend } from 'api/recommend'
  import { ERR_OK } from 'api/config'

  export default {
    name: 'Recommend',
    created() {
      this._getRecommend()
    },
    data() {
      return {
        recommends: []
      }
    },
    methods: {
      _getRecommend() {
        getRecommend().then(res => {
          if (res.code === ERR_OK) this.recommends = res.data.slider
        })
      },
      loadImage() {
        if (!this.checkLoaded) {
          this.checkLoaded = true
          this.$refs.scroll.refresh()
        }
      }
    },
    components: {
      Scroll,
      Slider
    }
  }
</script>

<style scoped lang='stylus'>
  @import '~lib/stylus/variable'
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
</style>
