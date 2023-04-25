import { Col, Row, notification } from "antd";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import { CategoryWithProduct } from "../../dataType/category";
import api from "../../api";
import { ProductResponse } from "../../dataType/product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducer";
import { CartRequest } from "../../dataType/cart";
import { updateCart } from "../../redux/action/cart";
export default function ListProduct() {
  const [listCategory, setListCategory] = useState<CategoryWithProduct[]>([])
  const cart: CartRequest = useSelector((state: RootState) => state.cart)
  const userInfo = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    getAllCategoryWithProduct()
  }, [])

  const getAllCategoryWithProduct = async () => {
    try {
      const res = await api.category.getAllCategoryProduct()
      setListCategory(res.data)
    } catch (err) {
      notification.error({
        message: 'Thông báo',
        description: "Không thể lấy danh sách danh mục",
      })
    }
  }

  const addProductToCart = (productAdd: ProductResponse) => {
    const product = cart.productIds.find(item => item.product.id === productAdd.id)
    if(product) {
      notification.warning({
        message: 'Thông báo',
        description:'Sản phẩm đã được thêm vào giỏ hàng!'
      })
    }
    else {
      const cartNew: CartRequest = {
        userId: userInfo.id,
        totalAmount: cart.totalAmount + productAdd.price,
        orderNumber: 0,
        productIds: [...cart.productIds, {product: productAdd, quantity: 1}]
      }
      dispatch(updateCart(cartNew))
    }
  }
  return (
    <div className="product-container">
      {listCategory.map((item: CategoryWithProduct) => {
        return <>
          <div className="header">
            <p className="name-category">{item.name}</p>
            <Link to=''><p className="fst-italic">Xem tất cả</p></Link>
          </div>
          <Row gutter={24}>
            {item.products.map((item: ProductResponse, index: number) => {
              if (index < 6) return <Col xs={12} md={8} lg={6} xl={4}>
                <ProductCard
                productInfo={item} 
                addProductToCart= {addProductToCart}
                /> 
                </Col>
            })}
          </Row>
        </>
      })}
    </div>
  )
}

