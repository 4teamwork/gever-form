<template>
  <SimpleForm portal-type="Dossier" />
</template>
<script>
import { mapActions } from 'vuex'

export default {
  fetch({ store }) {
    store.dispatch('schema/loadSchema', {
      path: 'ordnungssystem/fuehrung/kommunikation/allgemeines/dossier-1/@schema/opengever.dossier.businesscasedossier',
    })
    store.dispatch('schema/loadValues', { path: 'ordnungssystem/fuehrung/kommunikation/allgemeines/dossier-1' })
  },
  methods: {
    ...mapActions('schema', ['loadSchema', 'loadValues']),
  },
}
</script>
