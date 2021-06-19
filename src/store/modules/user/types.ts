export enum ActionTypes {
  addUserCredentials = 'ADD_USER_CREDENTIALS'
}

export interface User {
  id: string
  name: string
  email: string
  roles: string[]
  token: string
}
