export default {
  axiosConfig: () => {
    return {
      baseURL: (window as any)._env_.REACT_APP_API,
    }
  },
}