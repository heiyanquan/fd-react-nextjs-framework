import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ConfigProvider, App } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import { StaticMethod, __DEV__ } from '@hs-admin/utils';

dayjs.locale('zh-cn');

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '默克生命科学产品和服务解决方案',
  description: '默克生命科学产品和服务解决方案',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ConfigProvider
          locale={zhCN}
          theme={{
            token: {
              colorPrimary: '#503191',
            },
            components: {
              Button: {
                colorLink: '#503191',
              },
              Tag: {
                colorText: '#503191',
              },
            },
          }}
        >
          <App>
            <StaticMethod />
            <Header></Header>
            <div>{children}</div>
            {__DEV__ && <Footer></Footer>}
          </App>
        </ConfigProvider>
      </body>
    </html>
  );
}
