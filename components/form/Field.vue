<template>
  <v-component
    :is="component"
    :rules="rules"
    v-bind="Object.assign({ label, hint, value }, $attrs, source)"
    outlined
    persistent-hint
    v-on="$listeners"
    @input="input"
  >
    <slot v-for="(_, slotName) in $slots" :slot="slotName" :name="slotName" />
    <template v-for="(_, scopedSlotName) in $scopedSlots" :slot="scopedSlotName" slot-scope="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </v-component>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import fields from '../fields'

function required(value) {
  return !!value || 'Erforderliche Eingabe fehlt'
}

export default {
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState('schema', ['schema', 'values']),
    ...mapGetters('schema', [
      'isEditMode',
      'valueForField',
      'factoryForField',
      'labelForField',
      'isFieldRequired',
      'sourceForField',
      'hintForField',
    ]),
    value() {
      return this.valueForField(this.name)
    },
    factory() {
      return this.factoryForField(this.name)
    },
    classification() {
      return fields[this.factory].classification
    },
    component() {
      return fields[this.factory].component
    },
    label() {
      return this.labelForField(this.name)
    },
    required() {
      return this.isFieldRequired(this.name)
    },
    rules() {
      return [...(this.required ? [required] : [])]
    },
    source() {
      return this.sourceForField(this.name)
    },
    hint() {
      return this.hintForField(this.name)
    },
  },
  methods: {
    ...mapMutations('schema', ['updateFieldValue']),
    input(value) {
      this.updateFieldValue({ field: this.name, value })
    },
  },
}
</script>
