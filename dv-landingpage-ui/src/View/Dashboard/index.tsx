import './dashboard.scss'
import 'swiper/css';
import { Col, FloatButton, Row } from "antd";
import ListCategory from "./ListCategory";
import SildeDashboard from './Silde';
import ListProduct from './ListProduct';
import ListBranch from './ListBranch';
export default function Dashboard() {
  const _renderContenSlide = () => {
    return (
      <Row gutter={6} className='mt-1'>
        <Col xs={24} md={4}>
          <ListCategory />
        </Col>
        <Col xs={24} md={20}>
          <SildeDashboard />
        </Col>
      </Row>
    )
  }
  const _renderListProduct = () => {
    return <div className='landingpage-content'>
      <h5>SẢN PHẨM</h5>
      <ListProduct />
    </div>
  }
  const _renderListBranch = () => {
    return <div className='landingpage-content'>
      <h5>NHÃN HÀNG</h5>
      <ListBranch />
    </div>
  }
  return (
    <div className="dashboard-container">
      {_renderContenSlide()}
      {_renderListProduct()}
      {_renderListBranch()}
      <FloatButton.BackTop />
    </div>
  )
}
