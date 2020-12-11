import './NumberField'
import './TextField'
import './TextareaField'
import Vue from 'vue'
import SelectField from './SelectField.vue'
import ComboboxField from './ComboboxField.vue'

Vue.component('ComboboxField', ComboboxField)
Vue.component('SelectField', SelectField)

export default {
  'Text line (String)': {
    classification: 'text',
    component: 'TextField',
  },
  Text: {
    classification: 'text',
    component: 'TextareaField',
  },
  Date: {
    classification: 'text',
    component: 'VDatePicker',
  },
  Choice: {
    classification: 'select',
    component: 'SelectField',
  },
  Integer: {
    classification: 'text',
    component: 'NumberField',
  },
  Tuple: {
    classification: 'select',
    component: 'ComboboxField',
  },
  'Relation List': {
    classification: 'select',
    component: 'ComboboxField',
  },
}
