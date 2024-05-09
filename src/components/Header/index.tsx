import { Button, Divider, Dropdown, Flex, MenuProps, Popover, Space } from 'antd'
import './style.css'
import { HsAdminInput, HsAdminSelect } from '@hs-admin/base-components'
import { DownOutlined } from '@ant-design/icons'
import { FC, SetStateAction, memo, useState } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  const productItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link target="_self" rel="noopener noreferrer" to="/products">
          分析化学
        </Link>
      ),
      children: [
        {
          key: '分析色谱',
          label: (
            <Link target="_self" rel="noopener noreferrer" to="/products/last-child?id=111">
              分析色谱
            </Link>
          )
        }
      ]
    },
    {
      key: '2',
      label: (
        <Link target="_self" rel="noopener noreferrer" to="/products">
          细胞培养和分析
        </Link>
      ),
      children: [
        {
          key: '3D细胞培养',
          label: (
            <Link target="_self" rel="noopener noreferrer" to="/products/last-child?id=111">
              3D细胞培养
            </Link>
          )
        }
      ]
    },
    {
      key: '3',
      label: (
        <Link target="_self" rel="noopener noreferrer" to="/products">
          化学与生化试剂
        </Link>
      ),
      children: [
        {
          key: '肽合成用氨基酸、树脂和试剂',
          label: (
            <Link target="_self" rel="noopener noreferrer" to="/products/last-child?id=111">
              肽合成用氨基酸、树脂和试剂
            </Link>
          )
        }
      ]
    }
  ]
  const serviceItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link target="_self" rel="noopener noreferrer" to="/services">
          合同制造
        </Link>
      ),
      children: [
        {
          key: 'ADC和生物偶联',
          label: (
            <Link target="_self" rel="noopener noreferrer" to="/services/last-child?id=111">
              ADC和生物偶联
            </Link>
          )
        }
      ]
    },
    {
      key: '2',
      label: (
        <Link target="_self" rel="noopener noreferrer" to="/services">
          定制产品
        </Link>
      ),
      children: [
        {
          key: '大包装和定制包装服务',
          label: (
            <Link target="_self" rel="noopener noreferrer" to="/services/last-child?id=111">
              大包装和定制包装服务
            </Link>
          )
        }
      ]
    }
  ]
  const [type, setType] = useState('Products')
  const [lang, setlang] = useState('English - EN')

  return (
    <div className="common-header-wrapper">
      <Flex align="center" gap={'middle'} className="px-20 py-6">
        <Link to="/">
          <img src="/img/header/logo.png" alt="" width={150} height={48} />
        </Link>
        <Flex align="center" gap={0} className="search-box">
          <HsAdminSelect
            value={type}
            options={[
              { label: 'Products', value: 'Products' },
              { label: 'Technical', value: 'Technical' }
            ]}
            onChange={(value: SetStateAction<string>) => setType(value)}
            className="w-32"
          />
          <HsAdminInput Search placeholder="Type in Product Names, Product Numbers, or CAS Numbers to see suggestions." className="w-1/4" />
        </Flex>
        <Flex align="center" gap={'small'}>
          <h3>EN</h3>
          <HsAdminSelect
            value={lang}
            options={[
              { label: '中文 - ZH', value: '中文 - ZH' },
              { label: 'English - EN', value: 'English - EN' }
            ]}
            onChange={(value: SetStateAction<string>) => setlang(value)}
          />
        </Flex>
      </Flex>
      <Flex align="center" justify="space-between" className="px-14 py-2 mt-4 common-nav-wrapper">
        <Flex align="center" gap={'large'}>
          <Dropdown menu={{ items: productItems }}>
            <div>
              <Space>
                <b>Products</b>
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
          <Dropdown menu={{ items: productItems }}>
            <div>
              <Space>
                <b>Applications</b>
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
          <Dropdown menu={{ items: serviceItems }}>
            <div>
              <Space>
                <b>Services</b>
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
          <Dropdown menu={{ items: serviceItems }}>
            <div>
              <Space>
                <b>Documents</b>
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
          <Dropdown menu={{ items: serviceItems }}>
            <div>
              <Space>
                <b>Support</b>
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
        </Flex>
        <Flex align="center" gap={'small'}>
          <Popover
            trigger={'click'}
            content={
              <div>
                <Button type="primary" className="w-60">
                  Sign In
                </Button>
                <Divider />
                <p>Don't Have An Account?</p>
                <Button className="w-60">Register</Button>
              </div>
            }>
            <p className="cursor-pointer">Account</p>
          </Popover>
          <Divider type="vertical" style={{ borderInlineStart: '1px solid white' }} />
          <p className="cursor-pointer">Quick Order</p>
          <Divider type="vertical" />
          <p className="cursor-pointer">Cart</p>
        </Flex>
      </Flex>
    </div>
  )
}

export default memo(Header)
