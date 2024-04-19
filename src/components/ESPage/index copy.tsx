import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { Button, Flex } from "antd"
import { useState } from "react"

interface Props {
  total: number
  initPageSize?: number
}
const useESPage = (props: Props) => {
  const { total, initPageSize } = props
  const [pagination, setPagination] = useState({ current: 1, pageSize: initPageSize || 50 })

  const resetPage = () => {
    setPagination((prev) => {
      prev.current = 1
      prev.pageSize = initPageSize || 50
      return { ...prev }
    })
  }

  return {
    ESPage: (
      <Flex align="center" gap={"middle"}>
        <p className="mr-6">
          显示{`${(pagination.current - 1) * pagination.pageSize + 1}-${pagination.current * pagination.pageSize}`}来自{total}
        </p>
        <Flex align="center">
          <p className="mr-4">
            {pagination.current}/{Math.ceil(total / pagination.pageSize)}
          </p>
          <Button
            size="small"
            type="link"
            disabled={pagination.current === 1}
            onClick={() => {
              setPagination((prev) => {
                prev.current--
                return { ...prev }
              })
            }}
            style={{ border: "#949494 1px solid", "border-top-right-radius": 0, "border-bottom-right-radius": 0 }}
          >
            <LeftOutlined />
          </Button>
          <Button
            size="small"
            type="link"
            disabled={pagination.current * pagination.pageSize >= total}
            onClick={() => {
              if (pagination?.current * pagination.pageSize < total) {
                setPagination((prev) => {
                  prev.current++
                  return { ...prev }
                })
              }
            }}
          >
            <RightOutlined />
          </Button>
        </Flex>
      </Flex>
    ),
    pagination,
    resetPage,
  }
}

export default useESPage
