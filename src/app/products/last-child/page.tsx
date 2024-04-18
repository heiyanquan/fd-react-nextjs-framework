"use client"

import { Divider, Flex } from "antd"
import Image from "next/image"
import { FC } from "react"
import "./style.css"

const Page: FC = () => {
  return (
    <div className="products-last-child-page-wrapper">
      <h1 className="font-black text-2xl mb-4">分析进样针</h1>
      <Flex align="center" gap={"middle"}>
        <Image src={"/img/products/product-last-child1.avif"} alt="" width={290} height={180} />
        <div className="text-base">
          选择合适的进样针是确保进样口密封严密、仪器操作正常、进样量准确和长使用寿命的关键。我们的产品品牌根据与应用的相关性、仪器相容性和个人偏好提供进样针。从标准优质
          <a className="green">Hamilton、S</a>GE和VICI® Precision Sampling
          分析气体和液体进样针中进行选择。我们还可提供针对独特应用设计的进样针配件和特种进样针。
        </div>
      </Flex>
      <Divider />
      <h2 className="font-black text-xl mb-4">相关产品资源</h2>
      <div>
        <a href="" className="block green text-base">
          /CN/zh/technical-documents/protocol/analytical-chemistry/gas-chromatography/general-syringe-care
        </a>
        <a href="" className="block green text-base">
          活页：Hamilton® 药物分析工具
        </a>
        <p className="text-base">准确的药物分析需要许多耗材。 详细了解 Hamilton® 耗材如何支持制药行业。</p>
      </div>
      <Divider />
      <h2 className="font-black text-xl mb-4">产品</h2>
    </div>
  )
}

export default Page
