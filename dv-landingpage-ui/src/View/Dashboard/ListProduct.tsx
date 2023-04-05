import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
export default function ListProduct() {
  return (
    <div className="product-container">
      <div className="header">
        <p className="name-category">Tên danh mục</p>
        <Link to=''><p className="fst-italic">Xem tất cả</p></Link>
      </div>
      <Row gutter={12}>
        <Col xs={12} md={8} lg={6} xl={4}><ProductCard /> </Col>
        <Col xs={12} md={8} lg={6} xl={4}><ProductCard /> </Col>
        <Col xs={12} md={8} lg={6} xl={4}><ProductCard /> </Col>
        <Col xs={12} md={8} lg={6} xl={4}><ProductCard /> </Col>
        <Col xs={12} md={8} lg={6} xl={4}><ProductCard /> </Col>
        <Col xs={12} md={8} lg={6} xl={4}><ProductCard /> </Col>
        <Col xs={12} md={8} lg={6} xl={4}><ProductCard /> </Col>
        <Col xs={12} md={8} lg={6} xl={4}><ProductCard /> </Col>
        <Col xs={12} md={8} lg={6} xl={4}><ProductCard /> </Col>
        <Col xs={12} md={8} lg={6} xl={4}><ProductCard /> </Col>
        <Col xs={12} md={8} lg={6} xl={4}><ProductCard /> </Col>
        <Col xs={12} md={8} lg={6} xl={4}><ProductCard /> </Col>
      </Row>
    </div>
  )
}
