'use client';

import { Carousel, Divider, List } from 'antd';
import './style.css';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [productList, setproductList] = useState(
    new Array(12).fill({
      title: '单克隆抗体',
      desc: '用于 mAb 研究、开发、制造、配方和质量控制的产品和服务。',
    })
  );
  const [brandList, setbrandList] = useState(
    new Array(6).fill({
      title: 'Millipore®',
      desc: '制备、分离、过滤和监测产品及 CTDMO 服务',
    })
  );
  const router = useRouter();

  return (
    <div className='home-page-wrapper'>
      <Carousel effect='fade' autoplay>
        <div>
          <Image
            className='carousel-item-img'
            src='/img/home/banner1.jpg'
            alt=''
            width={1440}
            height={288}
          />
        </div>
        <div>
          <Image
            className='carousel-item-img'
            src='/img/home/banner1.jpg'
            alt=''
            width={1440}
            height={288}
          />
        </div>
        <div>
          <Image
            className='carousel-item-img'
            src='/img/home/banner1.jpg'
            alt=''
            width={1440}
            height={288}
          />
        </div>
      </Carousel>
      <div className='center-box'>
        <h1 className='text-3xl font-bold'>Merck</h1>
        <p className='my-8'>
          携手同行，以科学引领生命健康之道。我们拥有业内广泛的科研产品组合、先进的药物研发和制造能力，以及为传统和新型制药提供CDMO及合同测试服务的完全一体化服务平台。我们致力于以创新产品、高质量服务和数字化方案造福全球、为下一代开创可持续发展的未来。{' '}
        </p>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={productList}
          renderItem={(item) => (
            <List.Item>
              <div
                className='product-list-item'
                onClick={() => router.push('/products')}
              >
                <Image
                  className=''
                  src='/img/home/list-img1.webp'
                  alt=''
                  width={290}
                  height={180}
                />
                <h3 className='mt-4 text-base'>{item.title}</h3>
                <p className='text-base'>{item.desc}</p>
              </div>
            </List.Item>
          )}
        />
        <Divider />
        <h1 className='text-3xl font-bold mb-8'>探索我们的品牌</h1>
        <List
          grid={{ gutter: 16, column: 6 }}
          dataSource={brandList}
          renderItem={(item) => (
            <List.Item>
              <div className='product-list-item brand-list-item'>
                <Image
                  className=''
                  src='/img/home/brand1.avif'
                  alt=''
                  width={180}
                  height={180}
                />
                <h3 className='mt-4 text-base'>{item.title}</h3>
                <p className='text-base'>{item.desc}</p>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
