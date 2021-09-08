import { createStore } from 'vuex'
import mutations from './mutation'
import state from './state'
import * as getters from './getter'
import actions from './action'

export default createStore({
  state,
  getters,
  mutations,
  actions,
})
