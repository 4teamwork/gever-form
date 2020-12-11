<template>
  <v-dialog v-model="show" v-bind="$attrs" scrollable persistent v-on="$listeners">
    <v-card>
      <v-card-title>
        <FormTabs />
      </v-card-title>
      <v-divider />
      <v-card-text>
        <FormFor :portal-type="portalType" />
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn @click="submit">Speichern</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { EventBus } from '../eventbus.js'
import generateFormMixin from './generate-form-mixin'

export default {
  mixins: [generateFormMixin],
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    submit() {
      EventBus.$emit('submit')
    },
  },
}
</script>
