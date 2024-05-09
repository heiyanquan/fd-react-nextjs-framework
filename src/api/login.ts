import { dataQueryAxios } from '@/utils/request.ts'

export const loginByCode = (data: { code: string }) => {
  return dataQueryAxios({
    url: '/api/data-query/v1/auth/oauth/hs/login',
    method: 'post',
    data
  })
}

export const getUserInfo = (): Promise<any> => {
  return dataQueryAxios({
    url: '/api/data-query/v1/users/me',
    method: 'get'
  })
}

export const refreshToken = (): Promise<any> => {
  return dataQueryAxios({
    url: `/api/data-query/v1/auth/refresh-token`,
    method: 'post'
  })
}

export const changePwd = (data: any): Promise<any> => {
  return dataQueryAxios({
    url: `/api/data-query/v1/users/me:change-password`,
    method: 'post',
    data
  })
}
