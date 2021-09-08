import * as types from './mutation-type'

export default {
  [types.SET_LOGINED](state: any) {
    state.logined = true
  },

  [types.REMOVE_LOGINED](state: any) {
    state.logined = false
    state.user = null
  },

  [types.SET_USER](state: any, payload: any) {
    state.user = payload
  },
}
