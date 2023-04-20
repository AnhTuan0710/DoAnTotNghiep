import axios from "axios";
import config from "src/config";
import { store } from "src/app/store";
import { GRANT_TYPE } from "src/constants";
import login from "./authApi";
import { loginSuccess } from "src/redux/action/auth";

export const apiLogRequest = (apiName: any, axiosRequest: any) => {
  console.group && console.group(
    '%cAPI Request',
    'color:white;font-weight:bold;background:#0194ff;padding:2px 6px',
    apiName
  );
  console.log('HTTP Method\t\t', axiosRequest.method.toUpperCase());
  console.log('Endpoint\t\t', axiosRequest.url);
  axiosRequest.data && console.log('Request Body\t', axiosRequest.data);
  console.log('AXIOS Request\t', axiosRequest);
  console.groupEnd && console.groupEnd();
};

export const apiLogResponse = (apiName: any, axiosResponse: any) => {
  console.log(axiosResponse);
  console.group &&
    console.group(
      '%cAPI Response',
      'color:white;font-weight:bold;background:green;padding:2px 6px',
      apiName
    );
  console.log('HTTP Method\t\t', axiosResponse.config.method.toUpperCase());
  console.log('Endpoint\t\t', axiosResponse.config.url);
  axiosResponse.config.data && console.log('Request Body\t', axiosResponse.config.data);
  axiosResponse.data && console.log('Response Body\t', axiosResponse.data);
  console.log('AXIOS Response\t', axiosResponse);
  console.groupEnd && console.groupEnd();
};

export const apiLogError = (apiName: any, error: any) => {
  console.group &&
    console.group(
      '%cAPI Response',
      'color:white;font-weight:bold;background:red;padding:2px 6px',
      apiName
    );
  console.log('HTTP Method\t\t', error.config.method.toUpperCase());
  console.log('Endpoint\t\t', error.config.url);
  error && error.config.data && console.log('Request Body\t', error.config.data);
  error && error.data && console.log('Response Body\t', error.data);
  console.log('AXIOS Error\t', error);
  console.groupEnd && console.groupEnd();
};

export const client = axios.create({
  baseURL: config.axiosConfig().baseURL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  (request: any) => {
    const { access_token, token_type } = store.getState().auth
    if (request.headers && access_token && !request.setToken) request.headers.Authorization = token_type + ' ' + access_token;
    return request;
  }
);

client.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      if (error.response.config.url === `/oauth/token` && window.location.pathname !== '/') {
        localStorage.clear();
        window.location.replace(``)
      }
      if (error.response.config.url !== `/oauth/token` && error.response.config.url !== `/oauth/pharmacy/forgot-password`) {
        const auth = store.getState().auth;
        if (auth.refreshToken === null && auth.userInfo === null) return;
        new Promise((resolve, reject) => {
          refreshToken(client, error.config)
            .then((result) => {
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        });
      }
    }
    if (process.env.NODE_ENV === "development") {
      if (error.response) {
        const apiName = error.config.apiName || 'UNKNOWN';
        apiLogError(apiName, error.response);
      } else if (error.request) {
        const apiName = error.config.headers['X_HEADER_API_LOG'] || 'UNKNOWN';
        apiLogError(apiName, error.request);
      } else {
        console.log('API Error', error.message);
      }
    }
    throw error;
  }
)

const refreshToken = (axios: any, config: any) => {
  const auth = store.getState().auth;
  return new Promise((resolve, reject) => {
    const refreshTokenParam = {
      refresh_token: auth.refreshToken,
      grant_type: GRANT_TYPE.REFRESH_TOKEN
    }
    /** login by refresh token */
    login(refreshTokenParam)
      //success
      .then(async res => {
        store.dispatch(loginSuccess(res.data))
        const { access_token, token_type } = res.data
        config.headers.Authorization = token_type + " " + access_token;
        axios
          .request(config) // Repeat the initial request
          .then((result: any) => {
            return resolve(result);
          })
          .catch((err: any) => {
            console.log(err);
            return reject(err);
          });
      })
      // fail: login by userInfo
      .catch((err) => {
        const { userInfo } = auth
        if (userInfo === null) {
          localStorage.clear();
          window.location.replace(``)
          return;
        }
        const loginParams = {
          username: userInfo.username,
          password: userInfo.password,
          grant_type: GRANT_TYPE.PASSWORD
        }
        login(loginParams) // Endpoint to request new token
          .then(async (res) => {
            store.dispatch(loginSuccess(res.data))
            const { access_token, token_type } = res.data
            config.headers.Authorization = token_type + " " + access_token;
            axios
              .request(config) // Repeat the initial request
              .then((result: any) => {
                return resolve(result);
              })
              .catch((err: any) => {
                console.log(err);
                return reject(err);
              });
          })
      });
  });
};

if (process.env.NODE_ENV === 'development') {
  client.interceptors.request.use(
    request => {
      const apiName = 'UNKNOWN';
      apiLogRequest(apiName, request);
      return request;
    },
    error => {
      console.log('API Error', error);
      return error;
    }
  );

  client.interceptors.response.use(
    response => {
      apiLogResponse("UNKNOWN", response)
      return response;
    }
  );
}

export const clientCRM = axios.create({
  baseURL: config.axiosConfig().baseURL,
  timeout: 20000,
  responseType: 'json',
});

// enable request logging for dev
if (process.env.NODE_ENV === 'development') {
  clientCRM.interceptors.request.use(
    request => {
      const apiName = 'UNKNOWN';
      apiLogRequest(apiName, request);
      return request;
    },
    error => {
      console.log('API Error', error);
      return error;
    }
  );

  clientCRM.interceptors.response.use(
    response => {
      apiLogResponse("UNKNOWN", response)
      return response;
    },
    error => {
      if (error.response) {
        const apiName = error.config.apiName || 'UNKNOWN';
        apiLogError(apiName, error.response);
      } else if (error.request) {
        const apiName = error.config.headers['X_HEADER_API_LOG'] || 'UNKNOWN';
        apiLogError(apiName, error.request);
      } else {
        console.log('API Error', error.message);
      }
      throw error;
    }
  );
}