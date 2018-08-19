const state = () => ({
  visits: []
})

const mutations = {
  ADD_VISIT (state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON()
    })
  }
}

export default {
  state,
  mutations
}