import "./index.scss";
import { Button, Card, Tag } from "antd";


export default function ProductCard() {
  return (
    <div className="product-card">
      <Card
        hoverable
        cover={
          <div className='image-container'>
            <img src='' alt="product-card" />
          </div>
        }
      >
        <Tag className='product-type-tag'>Điểm</Tag>
        <div className="product-card-content">
          <div className="product-card-content-name">
            <h4>Tên sản phẩm</h4>
          </div>
          <div className='product-card-content-supplier-name'>Tên hãng</div>
          <div className="product-card-content-price">
            <span>20000</span>
            {"/"}
            <span>Sản phẩm</span>
          </div>
          <div className="add-to-cart" onClick={(e: any) => { e.stopPropagation() }}>
            <Button className="button">Thêm vào giỏ hàng</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}