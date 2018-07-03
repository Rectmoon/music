<template>
  <transition name='slider'>
    <music-list :title='title' :bg-image='bgImage'></music-list>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import MusicList from 'components/music-list/music-list'
import { getSongList } from 'api/recommend'
export default {
  created() {
    this._getSongList()
  },
  components: {
    MusicList
  },
  computed: {
    title() {
      return this.disc.dissname
    },
    bgImage() {
      return this.disc.imgurl
    },
    ...mapGetters(['disc'])
  },
  methods: {
    _getSongList() {
      if (!this.disc.dissid) return this.$router.push('/recommend')
      getSongList(this.disc.dissid).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
 
<style scoped lang='stylus'>
.slider-enter-active, .slider-leave-active
  transition all 0.3s
.slider-enter, .slider-leave-to
  transform translate3d(100%, 0, 0)
</style>