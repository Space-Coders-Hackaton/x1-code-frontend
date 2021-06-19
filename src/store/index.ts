import { createStore } from 'redux'

import { User } from './modules/user/types'

import rootReducer from './modules/rootReducer'

export interface Store {
  user: User
}

const store = createStore(rootReducer)

export default store
