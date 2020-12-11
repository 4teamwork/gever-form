import { mapActions, mapState, mapMutations } from 'vuex'

export function mapValue(name) {
  return {
    [name]: {
      get() {
        return this.values[name]
      },
      set(value) {
        this.updateFieldValue({ field: name, value })
      },
    },
  }
}

export default {
  inheritAttrs: false,
  methods: {
    ...mapActions('schema', ['save']),
    ...mapMutations('schema', ['updateFieldValue']),
  },
  computed: {
    ...mapState('schema', ['values']),
  },
}
