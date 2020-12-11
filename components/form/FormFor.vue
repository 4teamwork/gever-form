<template>
  <component :is="portalType" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
import { mapMutations } from 'vuex'
import generateFormMixin from './generate-form-mixin'

export default {
  mixins: [generateFormMixin],
  inheritAttrs: false,
  created() {
    this.updateInDialog(this.inDialog)
  },
  methods: {
    ...mapMutations('schema', ['updateInDialog']),
  },
}
</script>
