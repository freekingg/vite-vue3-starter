import * as types from './mutation-type'
import { removeToken } from '../utils/token'

export default {
  setUserAndState({ commit }: any, user: any) {
    // 如果登陆成功，设置logined标志位
    commit(types.SET_LOGINED, true)
    // 设置全局用户状态
    commit(types.SET_USER, user)
  },

  loginOut({ commit }: any) {
    removeToken()
    commit(types.REMOVE_LOGINED, false)
  },
}
