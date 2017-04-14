import Vue from 'vue'
import axios from 'axios'
import aksdj4 from './aksdj4'
import router from './router'
import store from './store'
import api from './api'

Vue.config.devtools = process.env.NODE_ENV !== 'production'

Vue.prototype.$load = function(...urls) {
  const args = urls.map(url => axios({ method: 'get', url: api(url) }))

  this.$store.dispatch('setLoading', true)

  return axios.all(args)
  .then(
    axios.spread((...res) => {
      setTimeout(() => {
        this.$store.dispatch('setLoading', false)
      }, 1500)

      if (res.length == 1) {
        return res[0].data
      }
      return res.map(r => r.data)
    })
  )
  .catch((err) => {
    this.$store.dispatch('setMessage', 'Network Error | 404')
    return Promise.reject()
  })
}

Vue.filter('timeFormat', time => {
  if (!time) {
    return ''
  }

  return new Date(time)
  .toString()
  .split(' ')
  .filter((t, i) => i >= 1 && i <= 3)
  .map((t, i) => i == 1 ? `${t},` : t)
  .join(' ')
})

new Vue({
  router,
  store,
  render: h => h(aksdj4)
}).$mount('#aksdj4')