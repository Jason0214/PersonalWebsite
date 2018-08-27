import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: '',
    headers: {
      'Accept': 'application/js',
      'Content-Type': 'application/js'
    }
  })
}
