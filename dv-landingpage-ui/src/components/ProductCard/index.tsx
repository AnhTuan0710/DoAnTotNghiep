import { ProductResponse } from "../../dataType/product";
import "./index.scss";
import { Button, Card } from "antd";

type Props = {
  productInfo: ProductResponse
  addProductToCart: (id: ProductResponse) => void
}

export default function ProductCard(props: Props) {
  const { productInfo, addProductToCart } = props
  return (
    <div className="product-card">
      <Card
        hoverable
        cover={
          <div className='image-container'>
            <img src={productInfo.image} alt="product-card" />
          </div>
        }
      >
        <div className="product-card-content">
          <div className="product-card-content-name">
            <h4>{productInfo.name}</h4>
          </div>
          <div className="product-card-content-supplier-name">{productInfo.description}</div>
          <div className="product-card-content-price">
            <span>{productInfo.price}</span>
            {"/"}
            <span>{productInfo.unit}</span>
          </div>
          <div className="add-to-cart" onClick={(e: any) => { e.stopPropagation() }}>
            <Button className="button" onClick={() => addProductToCart(productInfo)}>Thêm vào giỏ hàng</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}