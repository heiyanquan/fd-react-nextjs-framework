import { memo, FC } from 'react'
import HsAdminTable from './HsAdminTable'
import HsAdminPage from './HsAdminPage'

const HsAdminTablePage: FC<any> = (props: any) => {
  const { pagination, ...rest } = props
  const style = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 16
  }

  return (
    <>
      <HsAdminTable {...rest} pagination={false}></HsAdminTable>
      {pagination && (
        <div style={style}>
          <HsAdminPage {...pagination} />
        </div>
      )}
    </>
  )
}

export default memo(HsAdminTablePage)
