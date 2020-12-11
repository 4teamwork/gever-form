<template>
  <div>
    <FormTabs />
    <FormFor :portal-type="portalType" :in-dialog="false" />
  </div>
</template>

<script>
import generateFormMixin from './generate-form-mixin'

export default {
  mixins: [generateFormMixin],
}
</script>
