<template>
  <Form title="Dossier bearbeiten" @submit="submit()">
    <template #common>
      <v-row>
        <v-col cols="12">
          <field name="title" label="Customtitle">
            <template #append>
              <v-btn>hallo</v-btn>
            </template>
          </field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="desc1" label="Beschreibung 1.Teil" />
          <v-text-field v-model="desc2" label="Beschreibung 2.Teil" />
        </v-col>
        <v-col cols="6">
          <field name="comments" />
        </v-col>
        <v-col cols="6">
          <field name="responsible" />
        </v-col>
        <v-col cols="6">
          <field name="start" />
        </v-col>
        <v-col cols="6">
          <field name="end" />
        </v-col>
        <v-col cols="6">
          <field name="keywords" />
        </v-col>
        <v-col cols="6">
          <field name="external_reference" />
        </v-col>
        <v-col cols="6">
          <field name="relatedDossier" />
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="alter" label="alter" />
        </v-col>
      </v-row>
    </template>
    <template #filing>
      <v-row>
        <v-col cols="12">
          <field name="filing_prefix" />
        </v-col>
        <v-col cols="12">
          <field name="container_type" />
        </v-col>
        <v-col cols="12">
          <field name="number_of_containers" />
        </v-col>
        <v-col cols="12">
          <field name="container_location" />
        </v-col>
      </v-row>
    </template>
    <template #classification>
      <v-row>
        <v-col cols="12">
          <field name="classification" />
        </v-col>
        <v-col cols="12">
          <field name="privacy_layer" />
        </v-col>
      </v-row>
    </template>
    <template #lifecycle>
      <v-row>
        <v-col cols="12">
          <field name="retention_period" />
        </v-col>
        <v-col cols="12">
          <field name="retention_period_annotation" />
        </v-col>
        <v-col cols="12">
          <field name="archival_value" />
        </v-col>
        <v-col cols="12">
          <field name="archival_value_annotation" />
        </v-col>
        <v-col cols="12">
          <field name="custody_period" />
        </v-col>
      </v-row>
    </template>
  </Form>
</template>
<script>
import formMixin, { mapValue } from '@/components/form/form-mixin'

export default {
  mixins: [formMixin],
  data() {
    return {
      desc1: 'gugus',
      desc2: 'velo',
    }
  },
  computed: {
    ...mapValue('alter'),
  },
  methods: {
    submit() {
      this.updateFieldValue({ field: 'title', value: 'hallo' })
      this.updateFieldValue({
        field: 'description',
        value: [this.desc1, this.desc2].join(''),
      })
      this.save()
    },
  },
}
</script>
