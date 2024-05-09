import { financialProductAxios } from '@/utils/request.ts'

export const getParkList = (data: {
  /**
   * 行政区划code
   */
  cantonCode?: string[]
  /**
   * 公司数量条件
   */
  companyCnt?: string
  /**
   * 火石产业分类一级CODE码
   */
  hsIndCode?: string[]
  /**
   * 关键词
   */
  keywords?: string
  /**
   * 当前页
   */
  pageNum?: number
  /**
   * 每页的数量
   */
  pageSize?: number
  /**
   * 园区级别
   */
  parkLevel?: string
  /**
   * 园区类型
   */
  parkType?: string[]
  [property: string]: any
}) => {
  return financialProductAxios(
    {
      url: '/be-cyzz-enterprise-figure/park/search/page',
      method: 'post',
      data
    },
    {
      extra_handle_response: true
    }
  )
}

export const getHsTree = () => {
  return financialProductAxios(
    {
      url: '/be-cyzz-enterprise-figure/stdsParameter/hsTreeList',
      method: 'get'
    },
    {
      extra_handle_response: true
    }
  )
}

export const getParkCompanyCount = (id: string) => {
  return financialProductAxios(
    {
      url: `/be-cyzz-enterprise-figure/park/search/${id}`,
      method: 'get'
    },
    {
      extra_handle_response: true
    }
  )
}

export const getCompanyFilterOptions = () => {
  return financialProductAxios(
    {
      url: '/be-cyzz-enterprise-figure/stdsParameter/treeList',
      method: 'post',
      data: {}
    },
    {
      extra_handle_response: true
    }
  )
}

export const getHsTagTree = () => {
  return financialProductAxios(
    {
      url: '/be-cyzz-enterprise-figure/stdsParameter/hsTreeList',
      method: 'get'
    },
    {
      extra_handle_response: true
    }
  )
}
export const getZxTagTree = () => {
  return financialProductAxios(
    {
      url: '/be-cyzz-enterprise-figure/stdsParameter/zxTreeList',
      method: 'get'
    },
    {
      extra_handle_response: true
    }
  )
}
export const getcantonTree = () => {
  return financialProductAxios(
    {
      url: '/be-cyzz-enterprise-figure/stdsParameter/cantonTreeList',
      method: 'get'
    },
    {
      extra_handle_response: true
    }
  )
}
export const getGmTagTree = () => {
  return financialProductAxios(
    {
      url: '/be-cyzz-enterprise-figure/stdsParameter/gmTreeList',
      method: 'get'
    },
    {
      extra_handle_response: true
    }
  )
}

export const getCompanyList = (data: {
  pageNum: number
  pageSize: number
  keyword?: string
  // orderField: ''
  // orderType: ''
  reportYear: string
  neaIndStr?: Array<string>
  strategicIndStr?: Array<string>
  hsIndStr?: Array<string>
  qualifiedListName?: Array<string>
  financingRound?: Array<string>
  tradePlate?: Array<string>
  primeBusProfitLevel?: Array<string>
  foundDate?: string
  parkCode: string
}) => {
  return financialProductAxios(
    {
      url: '/be-cyzz-enterprise-figure/companyInfo/fastSearch/pageList',
      method: 'post',
      data
    },
    {
      extra_handle_response: true
    }
  )
}
