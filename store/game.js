export const state = () => ({
  gamePoints: null,
})

export const mutations = {
  setPoints(state, payload) {
    state.gamePoints = payload
  },
  resetPoints(state) {
    state.gamePoints = null
  },
  // currentPost(state, payload) {
  //   // state.feeds.map((post) => {
  //   //   if (post.id === payload.id) {
  //   //     return payload.likes
  //   //   }
  //   // })
  // },
}
