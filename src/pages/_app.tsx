import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { AppProps } from "next/app"
import "./globals.css"
import { ConfigProvider, App } from "antd"
import zhCN from "antd/locale/zh_CN"
import dayjs from "dayjs"
import { StaticMethod } from "@hs-admin/utils"

dayjs.locale("zh-cn")

export default function RootApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: "#503191",
        },
        components: {
          Button: {
            colorLink: "#503191",
          },
          Tag: {
            colorText: "#503191",
          },
        },
      }}
    >
      <App>
        <StaticMethod />
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </App>
    </ConfigProvider>
  )
}
