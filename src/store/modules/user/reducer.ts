import { Reducer } from 'redux'
import producer from 'immer'

import { ActionTypes, User } from './types'

const INITIAL_STATE: User = {
  id: '',
  name: '',
  email: '',
  roles: [],
  token: ''
}

const user: Reducer<User> = (state = INITIAL_STATE, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case ActionTypes.addUserCredentials: {
        const { user } = action.payload

        draft.id = user.id
        draft.email = user.email
        draft.name = user.name
        draft.roles = user.roles
        draft.token = user.token

        break
      }
      default: {
        return draft
      }
    }
  })
}

export default user
