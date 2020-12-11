export default async function({ $axios }) {
  const {
    data: { token },
  } = await $axios.post('@login', {
    login: 'philippe.gross',
    password: 'demo10',
  })
  $axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
  })
}
