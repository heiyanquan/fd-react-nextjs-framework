import './layout.css'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const LayoutWrapper = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-body">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default LayoutWrapper
