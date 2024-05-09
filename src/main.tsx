import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App, ConfigProvider, Skeleton } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { StaticMethod } from '@hs-admin/utils'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import router from './router'
import 'virtual:uno.css'

dayjs.locale('zh-cn')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#503191'
        },
        components: {
          Button: {
            colorLink: '#503191'
          },
          Tag: {
            colorText: '#503191'
          }
        }
      }}>
      <App>
        <StaticMethod />
        <RouterProvider router={router} fallbackElement={<Skeleton active />} />
      </App>
    </ConfigProvider>
  </React.StrictMode>
)
