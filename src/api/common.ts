import { dataQueryAxios } from '@/utils/request'

//设置用户邮箱

export const change_email = (data: any) => {
  return dataQueryAxios({
    url: '/api/data-query/v1/users/me:change-email',
    method: 'post',
    data
  })
}
