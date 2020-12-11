import Vue from 'vue'
import trimStart from 'lodash/trimStart'

Vue.mixin({
  methods: {
    createAPIPath(url) {
      const parsedURL = new URL(url)
      return trimStart(parsedURL.pathname, '/fd')
    },
  },
})
