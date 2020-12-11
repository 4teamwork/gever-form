import Vue from 'vue'
import { VTextField } from 'vuetify/lib/components/VTextField'

Vue.component('NumberField', {
  name: 'NumberField',
  extends: VTextField,
  props: {
    type: {
      type: String,
      default: 'Number',
    },
  },
})
