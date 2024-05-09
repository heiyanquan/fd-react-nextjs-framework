import { lazy, ReactElement, Suspense } from 'react'
import { createBrowserRouter, Navigate, useRouteError } from 'react-router-dom'
import { Flex, Spin } from 'antd'
import { __DEV__ } from '@hs-admin/utils'

const Layout = lazy(() => import('@/views/Layout'))
const Home = lazy(() => import('@/views/HomePage/index.tsx'))
const Demo = lazy(() => import('@/views/Demo/index.tsx'))
const Products = lazy(() => import('@/views/Products/index.tsx'))
const ProductLastChild = lazy(() => import('@/views/ProductLastChild/index.tsx'))
const Services = lazy(() => import('@/views/Services/index.tsx'))
const ServiceLastChild = lazy(() => import('@/views/ServiceLastChild/index.tsx'))

function withLoading(component: ReactElement) {
  return <Suspense fallback={<Spin />}>{component}</Suspense>
}

const ErrorBoundary = () => {
  const error = useRouteError() as {
    message?: string
    status?: number
  }
  let text = ''
  if (error.message?.includes('Failed to fetch dynamically imported module')) {
    text = '页面已发新版，请强刷页面或清空缓存'
  } else if (error.status === 404) {
    text = '页面不存在'
  } else if (error.status === 403) {
    text = '您没有该页面权限'
  } else {
    text = '未知错误'
    console.error(error)
  }
  return (
    <Flex align="center" justify="center" style={{ height: '100%' }}>
      <h1>{text}</h1>
    </Flex>
  )
}

const subRoutes: any[] = [
  {
    name: '首页',
    path: 'home',
    element: withLoading(<Home />)
  },
  {
    name: 'Products',
    path: 'products',
    element: withLoading(<Products />)
  },
  {
    name: 'Products',
    path: 'productLastChild',
    element: withLoading(<ProductLastChild />)
  },
  {
    name: 'Services',
    path: 'services',
    element: withLoading(<Services />)
  },
  {
    name: 'Services',
    path: 'serviceLastChild',
    element: withLoading(<ServiceLastChild />)
  }
]
if (__DEV__) {
  subRoutes.push({
    name: 'demo',
    path: 'demo',
    element: withLoading(<Demo />)
  })
}

const allRoutes = [
  ...subRoutes.reduce(
    (
      previousValue: Array<{
        name: string
        rawPath: string
        regPath: string
        belong: string
        parents: string[]
      }>,
      currentValue
    ) => {
      const item = {
        name: currentValue.name,
        rawPath: currentValue.path,
        regPath: currentValue.path.replace(/(:.*?)(\/|$)/g, '(w|-)*$2'),
        belong: currentValue.belong,
        parents: []
      }
      const theChildren =
        currentValue.children?.map((it: { name: any; path: any }) => ({
          name: it.name,
          rawPath: `${currentValue.path}/${it.path}`,
          regPath: `${currentValue.path}/${it.path}`.replace(/(:.*?)(\/|$)/g, '(w|-)*$2'),
          belong: currentValue.belong,
          parents: [item.rawPath]
        })) ?? []
      return previousValue.concat(item, ...theChildren)
    },
    []
  )
]

const getWhichBelong = (prefix: string) => (fullPath: string) => {
  const arr = allRoutes.map((it) => ({
    ...it,
    fullRegPath: new RegExp(`${prefix}${it.regPath}`)
  }))
  arr.reverse()

  const theOne = arr.find((it) => it.fullRegPath.test(fullPath))

  return {
    belong: theOne?.belong ?? '',
    name: theOne?.name ?? '',
    parents: theOne?.parents.map((it) => `${prefix}${it}`) ?? [],
    rawPath: theOne?.rawPath ?? '',
    regPath: theOne?.regPath ?? ''
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: withLoading(<Layout />),
    children: [
      {
        path: '',
        element: withLoading(<Navigate to="/home" replace />)
      },
      ...subRoutes.map((it) => ({
        ...it
      }))
    ],
    errorElement: <ErrorBoundary />
  }
])

export const topMenus = [
  ...subRoutes
    .filter((it) => it.isTopMenu)
    .map((it) => ({
      label: it.name,
      path: `/${it.path}`
    }))
]
export const getSubRoutesBelong = getWhichBelong('/')
export default router
