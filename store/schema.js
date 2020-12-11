import get from 'lodash/get'
import isNull from 'lodash/isNull'
import pick from 'lodash/pick'
import trimStart from 'lodash/trimStart'

export const state = () => ({
  schema: {},
  values: {},
  activeFieldset: null,
  path: null,
  inDialog: true,
})

export const mutations = {
  updateSchema(state, { schema }) {
    state.schema = schema
  },
  updateValues(state, { values }) {
    state.values = pick(values, Object.keys(get(state.schema, 'properties', {})))
    const parsedURL = new URL(values['@id'])
    state.path = trimStart(parsedURL.pathname, '/fd')
  },
  updateFieldValue(state, { field, value }) {
    Object.assign(state.values, { [field]: value })
  },
  updateActiveFieldset(state, activeFieldset) {
    state.activeFieldset = activeFieldset
  },
  updateInDialog(state, inDialog) {
    state.inDialog = inDialog
  },
}

export const actions = {
  async loadSchema({ commit }, { path }) {
    const { data: schema } = await this.$axios.get(path)
    commit('updateSchema', { schema })
  },
  async loadValues({ commit }, { path }) {
    const { data: values } = await this.$axios.get(path)
    commit('updateValues', { values })
  },
  save({ state, getters: { isEditMode } }, { path, portalType } = {}) {
    const savePath = path || state.path
    if (isEditMode) {
      this.$axios.patch(savePath, state.values)
    } else if (!portalType) {
      throw new Error('The portal type is required in order to add new content')
    } else {
      this.$axios.post(savePath, Object.assign(state.values, { '@type': portalType }))
    }
  },
}

export const getters = {
  fieldExists: (state) => (field) => {
    return field in state.values
  },
  isEditMode(state) {
    return !isNull(state.values)
  },
  fieldsets(state) {
    return get(state, 'schema.fieldsets')
  },
  valueForField: (state, { isEditMode }) => (field) => {
    if (!isEditMode) {
      return state.schema.properties[field].default || null
    }
    return state.values[field]
  },
  factoryForField: (state) => (field) => {
    return state.schema.properties[field].factory
  },
  isFieldRequired: (state) => (field) => {
    return state.schema.required.includes(field)
  },
  labelForField: (state, { isFieldRequired }) => (field) => {
    const label = state.schema.properties[field].title
    if (isFieldRequired(field)) {
      return `${label} *`
    }
    return label
  },
  sourceForField: (state) => (fieldName) => {
    const field = state.schema.properties[fieldName]
    const choices = get(field, 'choices')
    const vocabulary = get(field, 'items.vocabulary.@id') || get(field, 'vocabulary.@id')
    const querysource = get(field, 'items.querysource.@id') || get(field, 'querysource.@id')

    return {
      ...(choices ? { items: choices } : {}),
      ...(vocabulary ? { vocabularyURL: vocabulary } : {}),
      ...(querysource ? { querysourceURL: querysource } : {}),
    }
  },
  hintForField: (state) => (field) => {
    return state.schema.properties[field].description
  },
}
