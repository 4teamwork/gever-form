<template>
  <v-form @submit.prevent.stop="submit">
    <FormFieldsets>
      <template v-for="(_, name) in $scopedSlots" :slot="name">
        <slot :name="name" />
      </template>
    </FormFieldsets>
    <v-btn v-if="!inDialog" type="submit">Speichern</v-btn>
  </v-form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { EventBus } from '../eventbus'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState('schema', ['inDialog']),
  },
  created() {
    EventBus.$on('submit', this.submit)
  },
  destroyed() {
    EventBus.$off('submit', this.submit)
  },
  methods: {
    ...mapActions('schema', ['save']),
    submit() {
      if (Object.keys(this.$listeners).includes('submit')) {
        this.$emit('submit')
      } else {
        this.save()
      }
    },
  },
}
</script>
