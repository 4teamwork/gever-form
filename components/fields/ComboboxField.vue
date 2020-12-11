<template>
  <v-combobox
    v-bind="$attrs"
    :items="computedItems"
    :search-input.sync="searchTerm"
    item-text="title"
    item-value="token"
    no-filter
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'ComboboxField',
  props: {
    vocabularyURL: {
      type: String,
      default: () => null,
    },
    querysourceURL: {
      type: String,
      default: () => null,
    },
    items: {
      type: Array,
      default: () => null,
    },
  },
  data() {
    return {
      computedItems: [],
      searchTerm: null,
    }
  },
  watch: {
    searchTerm: {
      async handler(searchTerm) {
        if (Array.isArray(searchTerm)) {
          this.searchTerm = null
        }
        if (this.querysourceURL && this.searchTerm) {
          const {
            data: { items },
          } = await this.$axios.get(this.createAPIPath(this.querysourceURL), { params: { query: this.searchTerm } })
          this.computedItems = items
        }
      },
      immediate: true,
    },
  },
  mounted() {
    if (this.items) {
      this.computedItems = this.items
    } else if (this.vocabularyURL) {
      const { data: items } = this.$axios.get(this.createAPIPath(this.vocabularyURL))
      this.computedItems = items
    }
  },
}
</script>
