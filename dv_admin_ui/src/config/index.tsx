export default {
    axiosConfig: () => {
      return {
        baseURL: (window as any)._env_.REACT_APP_API_CLIENT,
        timeout: 20000,
        responseType: 'json',
        auth: {
            client_id: 'medlink',
            client_secret: 'kidsecret'
          }
      }
    },
    version: "1.0.0"
  }
  