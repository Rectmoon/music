<template>
  <page :title="('examples.picker')" :desc="('pickerPage.desc')">
    <div slot="content">
      <picker-render></picker-render>
    </div>
  </page>
</template>

<script type="text/ecmascript-6">
import Page from '@/common/page/page.vue'
import PickerRender from '@/common/page-render/picker-render.vue'

export default {
  components: {
    Page,
    PickerRender
  }
}
</script>
