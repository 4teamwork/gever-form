import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('schema', ['activeFieldset']),
    ...mapGetters('schema', ['fieldsets']),
    computedActiveFieldset: {
      get() {
        return this.activeFieldset
      },
      set(activeFieldset) {
        this.updateActiveFieldset(activeFieldset)
      },
    },
  },
  methods: {
    ...mapMutations('schema', ['updateActiveFieldset']),
  },
}
