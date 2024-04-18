"use client"

import { EMPTYTEXT } from "./constant"
import { useState, useEffect } from "react"
import dayjs from "dayjs"
import { isDate } from "./tools"

export function hsHandleTableRender(text: string) {
  return typeof text === "number" ? text : text || EMPTYTEXT
}
export function hsHandleDateYear(timestamp: number | string) {
  let date = EMPTYTEXT
  if (timestamp) {
    date = dayjs(timestamp).format("YYYY")
  }
  return date
}
export function hsHandleTableDate(timestamp?: number | string) {
  let date = EMPTYTEXT
  if (timestamp) {
    date = dayjs(timestamp).format("YYYY-MM-DD")
  }
  return date
}
export function hsHandleTableDateTime(timestamp?: number | string) {
  let date = EMPTYTEXT
  if (timestamp) {
    date = dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss")
  }
  return date
}
// 处理表格中返回数据为日期格式的字符串
export function handleTableShowDate(item: any, key: string) {
  if (isDate(item[key]) && isNaN(item[key]) && item[key].length !== 10 && item[key].includes("-")) {
    item[key] = hsHandleTableDateTime(item[key])
  }
}

export interface SetStatePage {
  current: number
  pageSize: number
  showSizeChanger: boolean
  showQuickJumper: boolean
  pageSizeOptions: number[]
  showTotal: (total: number) => string
}
export interface UsePageProps extends SetStatePage {
  total: number
  onChange: (page: number, pageSize: number) => string
}
export interface AllPageProps extends UsePageProps {
  setTotal: (total: number) => number
  setPagination: (params: SetStatePage) => any
  resetPage: () => any
  initPage: () => any
}

export const usePage: any = (doRequest?: () => Promise<any>, initOptions?: SetStatePage) => {
  const [pagination, setPagination] = useState<SetStatePage>({
    current: 1,
    pageSize: 10,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total: number) => `共 ${total} 条数据`,
    pageSizeOptions: [10, 20, 30, 40],
    ...initOptions,
  })
  const [total, setTotal] = useState(0)

  function onChange(page: number, pageSize: number) {
    if (pageSize !== pagination.pageSize) {
      setPagination((prevPagi) => {
        prevPagi.current = 1
        prevPagi.pageSize = pageSize
        return { ...prevPagi }
      })
    } else {
      setPagination((prevPagi) => {
        prevPagi.current = page
        return { ...prevPagi }
      })
    }
  }

  const resetPage = () => {
    setPagination((prevPagi) => {
      prevPagi.current = 1
      prevPagi.pageSize = 10
      return { ...prevPagi }
    })
  }
  const initPage = () => {
    setPagination((prevPagi) => {
      prevPagi.current = 1
      return { ...prevPagi }
    })
  }

  useEffect(() => {
    doRequest?.().then((res) => {
      if (typeof res === "object") {
        setTotal(res.total)
      }
    })
  }, [pagination])

  return {
    pagination: {
      ...pagination,
      total,
      onChange,
    },
    total,
    setPagination,
    setTotal,
    onChange,
    resetPage,
    initPage,
  }
}

export const useNewPage: any = (doRequest?: () => Promise<any>, searchParams?: any, initOptions?: SetStatePage) => {
  const [pagination, setPagination] = useState<SetStatePage>({
    current: 1,
    pageSize: 10,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total: number) => `共 ${total} 条数据`,
    pageSizeOptions: [10, 20, 30, 40],
    ...initOptions,
  })
  const [total, setTotal] = useState(0)

  function onChange(page: number, pageSize: number) {
    setPagination((prevState) => {
      if (pageSize !== prevState.pageSize) {
        prevState.current = 1
        prevState.pageSize = pageSize
      } else {
        prevState.current = page
      }
      return { ...prevState }
    })
  }

  const resetPage = () => {
    setPagination((prevPagi) => {
      prevPagi.current = 1
      prevPagi.pageSize = 10
      return { ...prevPagi }
    })
  }
  const initPage = () => {
    setPagination((prevPagi) => {
      prevPagi.current = 1
      return { ...prevPagi }
    })
  }

  useEffect(() => {
    if (searchParams) {
      if (searchParams.hasInit) {
        doRequest?.().then((res) => {
          if (typeof res === "object") {
            setTotal(res.total)
          }
        })
      }
    } else {
      doRequest?.().then((res) => {
        if (typeof res === "object") {
          setTotal(res.total)
        }
      })
    }
  }, [pagination, searchParams])

  return {
    pagination: {
      ...pagination,
      total,
      onChange,
    },
    total,
    setPagination,
    setTotal,
    onChange,
    resetPage,
    initPage,
  }
}
