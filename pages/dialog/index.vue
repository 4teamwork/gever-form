<template>
  <div>
    <DialogForm v-model="open" portal-type="Dossier" />
    <v-btn @click="open = true">öffnen</v-btn>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  fetch({ store }) {
    store.dispatch('schema/loadSchema', {
      path: 'ordnungssystem/fuehrung/kommunikation/allgemeines/dossier-1/@schema/opengever.dossier.businesscasedossier',
    })
    store.dispatch('schema/loadValues', {
      path: 'ordnungssystem/fuehrung/kommunikation/allgemeines/dossier-1',
    })
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    ...mapActions('schema', ['loadSchema', 'loadValues']),
  },
}
</script>

<style></style>
