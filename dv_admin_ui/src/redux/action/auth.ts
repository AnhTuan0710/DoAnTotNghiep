import { LoginRequest } from "src/models/auth"
import { UserLogin } from "../reducers/auth"
import { LOGIN, LOGIN_REQUEST, LOG_OUT } from "../type"

export const abc = 'bac'

export type RequestLoginParam = {
  user: LoginRequest
}
export type ResponseLoginParam = {
  access_token: string,
  token_type: string,
  refresh_token: string,
  login_id: string,
  account_id: number,
  user_name: string,
  expires_in: number,
  userInfo: UserLogin | null
}

export const loginSuccess = (payload: ResponseLoginParam) => ({
  type: LOGIN,
  payload
})

export const requestLogin = (params: RequestLoginParam) => {
  return {
    type: LOGIN_REQUEST,
    payload: params
  }
}

export const logOut = () => ({
  type: LOG_OUT
})