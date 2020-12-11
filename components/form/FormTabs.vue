<template>
  <v-tabs v-model="computedActiveFieldset">
    <v-tab v-for="fieldset in fieldsets" :key="`tab-${fieldset.id}`">
      {{ fieldset.title }}
    </v-tab>
  </v-tabs>
</template>

<script>
import fieldsetMixin from './fieldset-mixin'

export default {
  mixins: [fieldsetMixin],
}
</script>
