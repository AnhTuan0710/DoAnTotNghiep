import config from "src/config";
import { GRANT_TYPE } from "src/constants";
import { LoginRequest } from "src/models/auth";
import { client } from "./apiConfig";

export default function login(params: LoginRequest) {
  const url = `/oauth/token`;
  const paramsForm = new FormData()
  if (params.refresh_token) {
    paramsForm.append('refresh_token', params.refresh_token)
    paramsForm.append('grant_type', GRANT_TYPE.REFRESH_TOKEN)
  } else {
    paramsForm.append('username', params.username ? params.username : '')
    paramsForm.append('password', params.password ? params.password : '')
    paramsForm.append('grant_type', GRANT_TYPE.PASSWORD)
  }

  return client.post(url, paramsForm, {
    auth: {
      username: config.axiosConfig().auth.client_id,
      password: config.axiosConfig().auth.client_secret
    },
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}