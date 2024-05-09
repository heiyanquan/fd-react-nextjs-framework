'use client';

import { Carousel, Divider, List } from 'antd';
import './style.css';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [productList, setproductList] = useState([
    {
      title: 'Monoclonal Antibodies',
      desc: 'Products and services for mAb research, development, manufacturing, formulation, and quality control.',
    },
    {
      title: 'Quick Order',
      desc: 'An easy way to quickly purchase products used often',
    },
    {
      title: 'Documents',
      desc: 'Search for safety data sheets (SDS) and certificates (COA/COO) by product number',
    },
    {
      title: 'Exclusive Savings',
      desc: 'Shop the handpicked selection of premium products at unbeatable prices.',
    },
    {
      title: 'Contact Us',
      desc: 'Customer Service',
    },
  ]);
  const router = useRouter();

  return (
    <div className='home-page-wrapper'>
      <Carousel effect='fade' autoplay={false}>
        <div className='carousel-item carousel-item1'>
          <Image
            src='/img/home/banner1.png'
            alt=''
            width={815}
            height={465}
          />
          <div className='text-box'>
            <h1>Empower Your DNA Digestion</h1>
            <p className='desc'>
              With our NEW Benzonase Salt Tolerant endonuclease
            </p>
            <div className='btn'>
              <div className='dot'>
                <i></i>
              </div>
              <p>Learn More</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className='carousel-item-img'
            src='/img/home/banner2.jpg'
            alt=''
            width={1440}
            height={288}
          />
        </div>
        <div>
          <Image
            className='carousel-item-img'
            src='/img/home/banner3.jpg'
            alt=''
            width={1440}
            height={288}
          />
        </div>
      </Carousel>
      <div className='center-box'>
        <h1 className='text-3xl font-bold'>MilliporeSigma</h1>
        <p className='my-8'>
          Together, we impact life and health with science. We offer one of the
          broadest portfolios in the industry for scientists, best-in-class
          products for pharmaceutical development and manufacturing, and a fully
          integrated service organization to support CDMO and contract testing
          across traditional and novel modalities. Our vision is a world where
          our innovative products, services, and digital offerings help create
          solutions for people globally and a sustainable future for generations
          to come.
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
        <div className='future-insight'>
          <h1>Curious2024 – Future Insight™ </h1>
          <h1>Conference</h1>
          <p>
            One of the world's leading gatherings on the future of science &
            technology. Abstracts due March 31st, 2024
          </p>
          <div className='submit-btn'>
            <div>
              <b></b>
            </div>
            Submit Today
          </div>
        </div>
      </div>
    </div>
  );
}
