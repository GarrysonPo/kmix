import Vuex from 'vuex'
import CardModule from '~/store/modules/cards'

export function createStore () {
  return new Vuex.Store({
    modules: {
      CardModule
    }
  })
}
