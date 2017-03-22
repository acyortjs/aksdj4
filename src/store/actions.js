export default {
  setPosts({ commit }, posts) {
    commit('POSTS', posts)
  },
  setArchives({ commit }, archives) {
    commit('ARCHIVES', archives)
  },
  setCategories({ commit }, categories) {
    commit('CATEGORIES', categories)
  },
  setPost({ commit }, post) {
    commit('POST', post)
  },
  setConfig({ commit }, config) {
    commit('CONFIG', config)
  },
  setCurrent({ commit }, current) {
    commit('CURRENT', current)
  },
  setArchiveCurrent({ commit }, archive_current) {
    commit('ARCHIVECURRENT', archive_current)
  },
  setCategoryCurrent({ commit }, category_current) {
    commit('CATEGORYCURRENT', category_current)
  }
}