import { getItem, setItem, TOKEN, newAxiosRequest } from '@hs-admin/utils'
import { message } from '@hs-admin/utils'
import type { AxiosResponse } from 'axios'

const { mainAxios: dataQueryAxios } = newAxiosRequest({
  loginUrl: '/api/data-query/v1/auth/oauth/hs/login',
  refreshTokenUrl: {
    axiosConfig: {
      url: `${import.meta.env.VITE_DATA_QUERY_URL}/api/data-query/v1/auth/refresh-token`,
      method: 'post'
    },
    setToken: (res: { access_token: string; token_type: string }) => setItem(TOKEN, res.access_token)
  },
  getToken: () => getItem(TOKEN),
  handleMessage: message,
  loadingFunction: null,
  baseUrl: `${import.meta.env.VITE_DATA_QUERY_URL}`
})
const { mainAxios: financialProductAxios } = newAxiosRequest({
  loginUrl: 'never_use_login_url',
  refreshTokenUrl: {
    axiosConfig: {
      url: `${import.meta.env.VITE_DATA_QUERY_URL}/api/data-query/v1/auth/refresh-token`,
      method: 'post'
    },
    setToken: (res: { access_token: string; token_type: string }) => setItem(TOKEN, res.access_token)
  },
  getToken: () => getItem(TOKEN),
  handleMessage: message,
  loadingFunction: null,
  extraSuccessResponseHandle: (response: AxiosResponse<any, any>) => {
    if (response.data?.code && response.data.code !== 200) {
      message.error(response.data.message)
      return Promise.reject(response.data)
    } else {
      return response.data.data
    }
  },
  baseUrl: `${import.meta.env.VITE_FINANCIAL_PRODUCT}`
})

export { dataQueryAxios, financialProductAxios }
