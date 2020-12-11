<template>
  <v-tabs-items v-model="computedActiveFieldset">
    <v-tab-item v-for="fieldset in fieldsets" :key="`tab-${fieldset.id}`">
      <slot :name="fieldset.id" />
    </v-tab-item>
  </v-tabs-items>
</template>

<script>
import fieldsetMixin from './fieldset-mixin'

export default {
  mixins: [fieldsetMixin],
}
</script>
