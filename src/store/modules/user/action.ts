import { ActionTypes, User } from './types'

export function addUserCredentials(user: User) {
  return {
    type: ActionTypes.addUserCredentials,
    payload: {
      user
    }
  }
}
