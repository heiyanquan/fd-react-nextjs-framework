'use client';

import { List } from 'antd';
import Image from 'next/image';
import { FC, useState } from 'react';
import './style.css';
import { useRouter } from 'next/navigation';

const Page: FC = (props: any) => {
  const [productsList, setproductsList] = useState(
    new Array(5).fill({
      img: '/img/products/product1.avif',
      title: '分析色谱',
      desc: '我们提供从标准到优质级的Hamilton®、SGE和VICI® Precision Sampling 分析气体和液体进样针。我们的一系列品牌让您可以根据提供的产品、与应用的相关性、仪器相容性和个人喜好进行选择。',
    })
  );
  const router = useRouter();

  return (
    <div className='products-page-wrapper'>
      <h1 className='font-black text-2xl mb-4'>分析化学</h1>
      <p className='mb-8 text-base'>
        我们种类齐全的高品质产品线可确保各类分析应用获得准确、清晰的结果，包括HPLC、GC、卡尔费休滴定、微量元素分析、经典分析、空气监测、食品饮料分析以及能力测试。此外，我们还提供种类齐全的安全装备。{' '}
      </p>
      <List
        grid={{ gutter: 24, column: 4 }}
        dataSource={productsList}
        renderItem={(item) => (
          <List.Item>
            <div
              className='products-list-item'
              onClick={() => router.push(`/products/last-child?id=111`)}
            >
              <Image src={item.img} alt='' width={290} height={174} />
              <h3 className='mt-4 text-base green'>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Page;
