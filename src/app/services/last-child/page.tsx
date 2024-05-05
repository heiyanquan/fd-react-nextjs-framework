"use client"

import { Checkbox, Collapse, CollapseProps, Divider, Flex, List } from "antd"
import Image from "next/image"
import { FC, useState } from "react"
import "./style.css"
import { HsAdminInput, HsAdminSelect, HsAdminTable } from "@hs-admin/base-components"
import useESPage from "@/components/ESPage"

const Page: FC = () => {
  const [productsList, setproductsList] = useState(
    new Array(4).fill({
      title: '原料检验',
      desc: '我们的原材料检验服务有助于确保生物制剂生产所用材料的质量和纯度。',
    })
  );
  const [applicationList, setapplicationList] = useState(
    new Array(5).fill({
      title: "大分子HPLC_生物分子反相HPLC_高效液相色谱法-默克生命科学",
      desc: "高效液相色谱(HPLC)可用于分离和鉴定样品中的蛋白和多肽等生物大分子。此技术借助高压，将溶剂（流动相）中的样高效液相色谱(HPLC)可用于分离和鉴定样品中的蛋白和多肽等生物大分子。此技术借助高压，将溶剂（流动相）中的样",
    })
  )
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `
  const CollapseItems: CollapseProps["items"] = [
    {
      key: "1",
      label: "产品分类",
      children: (
        <>
          <Checkbox defaultChecked>syringes (209)</Checkbox>
          <br />
          <Checkbox>needles (21)</Checkbox>
          <br />
          <Checkbox>valves (4)</Checkbox>
        </>
      ),
    },
    {
      key: "2",
      label: "制造商",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "体积(µL)",
      children: <p>{text}</p>,
    },
  ]
  const [sortOptions, setsortOptions] = useState([
    { label: "按相关性排序", value: "按相关性排序" },
    { label: "按名称排序（升序）", value: "按名称排序（升序）" },
    { label: "按名称排序（降序）", value: "按名称排序（降序）" },
  ])
  const [sortValue, setsortValue] = useState("按相关性排序")
  const { ESPage } = useESPage({ total: 234 })
  const parentColumns = [
    { title: "货号", dataIndex: "articleNumber" },
    { title: "产品名称", dataIndex: "name" },
    { title: "产品描述", dataIndex: "desc" },
  ]
  const [dataSource, setdataSource] = useState<any[]>([
    {
      articleNumber: 20734,
      name: "1 ea",
      desc: "1001TLL, PTFE Luer lock, volume 1 mL, needle size (not included)",
      price: "展开",
    },
    {
      articleNumber: 20997,
      name: "Hamilton®注射器，1000系列，PTFE Luer锁",
      desc: "701N, volume 10 μL, needle size 26s ga (bevel tip), needle L 51 mm (2 in.)",
      price: "展开",
    },
    {
      articleNumber: 20736,
      name: "Hamilton® 注射器，700系列，固定针头",
      desc: "701N, volume 10 μL, needle size 26s ga (bevel tip), needle L 51 mm (2 in.)",
      price: "展开",
    },
  ])
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows)
    },
  }
  const expandedRowRender = () => {
    const columns: any[] = [
      { title: "Date", dataIndex: "date" },
      { title: "Name", dataIndex: "name" },
      {
        title: "Status",
        dataIndex: "state",
      },
      { title: "Upgrade Status", dataIndex: "upgradeNum" },
      {
        title: "Action",
        dataIndex: "operation",
      },
    ]

    const data: any[] = []
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56",
      })
    }
    return <HsAdminTable columns={columns} dataSource={data} pagination={false} />
  }

  return (
    <div className='services-last-child-page-wrapper'>
      <h1 className='font-black text-2xl mb-4'>ADC产品表征</h1>
      <Flex align='center' gap={'middle'}>
        <Image
          src={'/img/services/product-last-child1.avif'}
          alt=''
          width={290}
          height={180}
        />
        <div className='text-base'>
          连接单克隆抗体且可递送高效活性药物成分（HPAPI）的抗体药物偶联物（ADC）本质上非常复杂，因此需要通过对生物疗法进行表征来探究其结构、结合性、纯度和效能。作为您的表征服务合作伙伴，我们可在ADC“裸”药和其药物偶联物中的生物成分方面提供专家指导，通过更安全、可靠和快速的测试，帮助您在关键阶段加快产品的质量决策。
        </div>
      </Flex>
      <Divider />
      <h2 className='font-black text-xl mb-4'>相关产品资源</h2>
      <div>
        <a href='' className='block green text-base'>
          /CN/zh/technical-documents/protocol/analytical-chemistry/gas-chromatography/general-syringe-care
        </a>
        <a href='' className='block green text-base'>
          活页：Hamilton® 药物分析工具
        </a>
        <p className='text-base'>
          准确的药物分析需要许多耗材。 详细了解 Hamilton®
          耗材如何支持制药行业。
        </p>
      </div>
      <Divider />
      <h2 className='font-black text-xl mb-4'>产品</h2>
      <Flex gap={'middle'}>
        <Collapse
          className='w-72'
          items={CollapseItems}
          defaultActiveKey={['1']}
          onChange={(key: string | string[]) => {
            console.log(key);
          }}
        />
        <div className='Collapse-right-content'>
          <Flex
            align='center'
            gap={'middle'}
            justify='space-between'
            className='mb-2'
          >
            <Flex align='center' gap={'small'}>
              <HsAdminInput
                Search
                placeholder='按关键词筛选'
                className='w-72'
              />
              <HsAdminSelect
                value={sortValue}
                options={sortOptions}
                allowClear={false}
                className='mr-8'
              />
            </Flex>
            {ESPage}
          </Flex>
          <HsAdminTable
            columns={parentColumns}
            dataSource={dataSource}
            rowKey={(record: any) => record.articleNumber}
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            pagination={false}
            expandable={{
              expandedRowRender,
              defaultExpandedRowKeys: ['0'],
              columnTitle: <span>展开</span>,
              columnWidth: 60,
            }}
          />
        </div>
      </Flex>
      <Divider />
      <h2 className='font-black text-xl mb-4'>相关应用</h2>
      <List
        grid={{ gutter: 24, column: 4 }}
        dataSource={applicationList}
        renderItem={(item) => (
          <List.Item>
            <div className='products-list-item'>
              <h3 className='mt-4 text-base green'>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </List.Item>
        )}
      />
      <Divider />
      <h2 className='font-black text-xl mb-4'>相关服务</h2>
      <List
        grid={{ gutter: 24, column: 4 }}
        dataSource={productsList}
        renderItem={(item) => (
          <List.Item>
            <div className='products-list-item'>
              <h3 className='mt-4 text-base green'>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Page
