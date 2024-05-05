'use client';

import {
  Button,
  Divider,
  Dropdown,
  Flex,
  MenuProps,
  Popover,
  Space,
} from 'antd';
import './style.css';
import Image from 'next/image';
import { HsAdminInput, HsAdminSelect } from '@hs-admin/base-components';
import { DownOutlined } from '@ant-design/icons';
import { FC, SetStateAction, memo, useEffect, useState } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  const productItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link target='_self' rel='noopener noreferrer' href='/products'>
          分析化学
        </Link>
      ),
      children: [
        {
          key: '分析色谱',
          label: (
            <Link
              target='_self'
              rel='noopener noreferrer'
              href='/products/last-child?id=111'
            >
              分析色谱
            </Link>
          ),
        },
      ],
    },
    {
      key: '2',
      label: (
        <Link target='_self' rel='noopener noreferrer' href='/products'>
          细胞培养和分析
        </Link>
      ),
      children: [
        {
          key: '3D细胞培养',
          label: (
            <Link
              target='_self'
              rel='noopener noreferrer'
              href='/products/last-child?id=111'
            >
              3D细胞培养
            </Link>
          ),
        },
      ],
    },
    {
      key: '3',
      label: (
        <Link target='_self' rel='noopener noreferrer' href='/products'>
          化学与生化试剂
        </Link>
      ),
      children: [
        {
          key: '肽合成用氨基酸、树脂和试剂',
          label: (
            <Link
              target='_self'
              rel='noopener noreferrer'
              href='/products/last-child?id=111'
            >
              肽合成用氨基酸、树脂和试剂
            </Link>
          ),
        },
      ],
    },
  ];
  const serviceItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link target='_self' rel='noopener noreferrer' href='/services'>
          合同制造
        </Link>
      ),
      children: [
        {
          key: 'ADC和生物偶联',
          label: (
            <Link
              target='_self'
              rel='noopener noreferrer'
              href='/services/last-child?id=111'
            >
              ADC和生物偶联
            </Link>
          ),
        },
      ],
    },
    {
      key: '2',
      label: (
        <Link target='_self' rel='noopener noreferrer' href='/services'>
          定制产品
        </Link>
      ),
      children: [
        {
          key: '大包装和定制包装服务',
          label: (
            <Link
              target='_self'
              rel='noopener noreferrer'
              href='/services/last-child?id=111'
            >
              大包装和定制包装服务
            </Link>
          ),
        },
      ],
    },
  ];
  const [type, setType] = useState('产品');
  const [lang, setlang] = useState('中文 - ZH');

  return (
    <div className='common-header-wrapper '>
      <Flex align='center' gap={'middle'} className='px-10 py-6'>
        <Link href="/">
          <Image
            src='/img/logo.svg'
            alt=''
            width={150}
            height={48}
          />
        </Link>
        <HsAdminSelect
          value={type}
          options={[
            { label: '产品', value: '产品' },
            { label: '技术文档', value: '技术文档' },
          ]}
          onChange={(value: SetStateAction<string>) => setType(value)}
        />
        <HsAdminInput Search placeholder='请输入品名' enterButton />
        <Flex align='center' gap={'small'}>
          <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z'></path>
          </svg>
          <h3>CN</h3>
          <HsAdminSelect
            value={lang}
            options={[
              { label: '中文 - ZH', value: '中文 - ZH' },
              { label: 'English - EN', value: 'English - EN' },
            ]}
            onChange={(value: SetStateAction<string>) => setlang(value)}
          />
        </Flex>
      </Flex>
      <Flex
        align='center'
        justify='space-between'
        className='px-14 py-2 mt-4 common-nav-wrapper'
      >
        <Flex align='center' gap={'large'}>
          <Dropdown menu={{ items: productItems }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <b>产品</b>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items: productItems }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <b>应用</b>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items: serviceItems }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <b>服务</b>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Flex>
        <Flex align='center' gap={'small'}>
          <Popover
            trigger={'click'}
            content={
              <div>
                <Button type='primary' className='w-60'>
                  登录
                </Button>
                <Divider />
                <p>暂无账户？</p>
                <Button className='w-60'>注册</Button>
              </div>
            }
          >
            <p className='cursor-pointer'>账户</p>
          </Popover>
          <Divider
            type='vertical'
            style={{ borderInlineStart: '1px solid white' }}
          />
          <p className='cursor-pointer'>订单查询</p>
          <Divider type='vertical' />
          <p className='cursor-pointer'>快速订购</p>
        </Flex>
      </Flex>
    </div>
  );
};

export default memo(Header);
