import { LOGIN, LOG_OUT } from "../type";

export interface UserLogin {
  username: string;
  password: string;
}
export interface InitStateAuth {
  access_token: string,
  token_type: string,
  refreshToken?: string,
  login_id: string,
  account_id: number,
  user_name: string,
  expires_in: number,
  userInfo: UserLogin | null
}


const initialState: InitStateAuth = {
  access_token: '',
  token_type: '',
  refreshToken: '',
  login_id: '',
  account_id: 0,
  user_name: '',
  expires_in: 0,
  userInfo: {
    username: '',
    password: '',
  }
};

export default function auth(state = initialState, action: any) {
  const { type, payload } = action
  switch (type) {
    case LOGIN:
      return {
        ...state,
        access_token: payload.access_token,
        refreshToken: payload.refresh_token,
        token_type: payload.token_type,
        login_id: payload.login_id,
        account_id: payload.account_id,
        user_name: payload.user_name,
        expires_in: Date.now() + (payload.expires_in - 60) * 1000
      };
    case LOG_OUT:
      return {
        ...state,
        access_token: null,
        refreshToken: null,
        token_type: null,
        login_id: null,
        account_id: null,
        user_name: null,
        expires_in: null
      };
    default:
      return state;
  }
}
