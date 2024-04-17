import { FC, memo, useEffect, useState } from "react"
import type { TableProps } from "antd"
import { Table } from "antd"
import { __DEV__, hsHandleTableDate, hsHandleTableDateTime, hsHandleTableRender } from "@hs-admin/utils"
import "./style.css"
import type { ColumnsType } from "./use-table"

interface Props extends TableProps<ColumnsType> {
  columns: any[]
}

const HsAdminTable: FC<Props> = (props: Props) => {
  const { columns, ...rest } = props
  const [mergeColumns, setMergeColumns] = useState<any[]>([])

  useEffect(() => {
    if (columns?.length)
      setMergeColumns(
        columns.map((item: ColumnsType) => {
          if (!item.render) {
            if (item.type === "date") {
              item.render = (text: string) => <>{hsHandleTableDate(text)}</>
            } else if (item.type === "datetime") {
              item.render = (text: string) => <>{hsHandleTableDateTime(text)}</>
            } else {
              if (item.dataIndex?.includes(".")) {
                const nameList: string[] = item.dataIndex.split(".")
                item.render = (_text: string, record: any) => {
                  return <>{hsHandleTableRender(record[nameList[0]]?.[nameList[1]])}</>
                }
              } else {
                item.render = (text: string) => <>{hsHandleTableRender(text)}</>
              }
            }
          }
          return {
            ...item,
          }
        })
      )
  }, [columns])

  return <Table columns={mergeColumns} className="hs-admin-base-table" {...rest}></Table>
}

export default memo(HsAdminTable)
