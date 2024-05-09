import { Divider, List, Tabs, TabsProps } from 'antd'
import { FC, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Page: FC = (props: any) => {
  const [productsList, setproductsList] = useState(
    new Array(5).fill({
      img: '/img/products/product1.avif',
      title: '技术领导力',
      desc: '我们以深厚的专长和广泛的产品组合而闻名，通过标准体系创新和模板化开发来推动行业向前发展。'
    })
  )
  const navigate = useNavigate()
  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: 'ADC和生物偶联',
      children: (
        <>
          <h1 className="font-black text-xl mb-4">ADC和生物偶联</h1>
          <p className="mb-8 text-base">
            抗体偶联药物(ADC)需要将精准的药物设计和专业知识结合在一起—快速交付至关重要。凭借15年以上的合同研发和生产经验，我们以药物连接子与单克隆抗体(mAb)偶联方面领先的专长而闻名海内外，拥有各类加工高效能化合物的专业设施。
          </p>
        </>
      )
    },
    {
      key: '2',
      label: '单克隆抗体和重组蛋白',
      children: (
        <>
          <h1 className="font-black text-xl mb-4">mAb & r-Protein</h1>
          <p className="mb-8 text-base">
            无论生物分子是单克隆抗体、双特异性抗体、ADC
            还是融合蛋白，我们均可帮助构建一个稳健、可扩展的工艺流程，为当今和未来的成功保驾护航。凭借大规模的GMP设施和260多种生物制剂以及经验丰富的研发人员，我们在分子放大成功率方面有口皆碑。
          </p>
        </>
      )
    },
    {
      key: '3',
      label: 'mRNA生产和LNP制剂',
      children: (
        <>
          <h1 className="font-black text-xl mb-4">mRNA生产和LNP制剂</h1>
          <p className="mb-8 text-base">
            随着mRNA的版图日新月异，客户亟需最新的技术和疗法，使分子理论得到实际应用。我们拥有市场上最全面的mRNA价值链和完整服务，能够成功地为客户提供从mRNA到脂质再到LNP制剂的全程支持。
          </p>
        </>
      )
    }
  ]

  return (
    <div className="services-page-wrapper">
      <div className="banner-box">
        <img src={'/img/services/banner.webp'} alt="" width={1440} height={300} />
      </div>
      <h1 className="font-black text-2xl mb-4">合同制造</h1>
      <p className="mb-8 text-base">
        通过Millipore® CTDMO服务,
        我们提供一站式高效服务来减轻在整个药物生命周期中管理多个厂商、供应链需求以及复杂优先级的负担。作为经验丰富的合作伙伴，我们结合我们在研发、生产、合同测试方面的专长和技术，从临床前到商业化生产全程助力客户快速达成里程碑和突破。
        我们利用在药物开发、材料科学和工艺技术方面30多年的全球成功经验，结合我们的供应网络来加快客户项目进展。 我们是行业经验之选 — 专为服务打造。
      </p>
      <h2 className="font-black text-xl mb-4">体验完整检测服务的优势</h2>
      <p className="mb-8 text-base">
        我们的CTDMO服务为客户提供覆盖整条价值链的统一和简化体验，一路伴随客户完成药物开发的整个过程。我们将合同检测服务整合到制药模式化服务中以进一步缩短研发路径。我们的专长、速度和敏捷性是客户取得突破性创新的制胜法宝。
      </p>
      <Divider />
      <h1 className="font-black text-xl mb-4">我们提供的价值</h1>
      <List
        grid={{ gutter: 24, column: 4 }}
        dataSource={productsList}
        renderItem={(item) => (
          <List.Item>
            <div className="products-list-item" onClick={() => navigate(`/products/last-child?id=111`)}>
              <Image src={item.img} alt="" width={290} height={174} />
              <h3 className="mt-4 text-base green">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </List.Item>
        )}
      />
      <Divider />
      <h1 className="font-black text-xl mb-4">跨模式的核心领先地位</h1>
      <Tabs defaultActiveKey="1" items={tabItems} />
    </div>
  )
}

export default Page
