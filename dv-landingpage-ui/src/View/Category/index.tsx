import { Badge, Col, Input, Pagination, Row, notification } from 'antd'
import { BANNER_MAY1 } from '../../assets'
import './category.scss'
import { useEffect, useState } from 'react'
import api from '../../api'
import { ProductResponse } from '../../dataType/product'
import ProductCard from '../../components/ProductCard'
import { CartRequest } from '../../dataType/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducer'
import { updateCart } from '../../redux/action/cart'
import { SearchOutlined } from '@ant-design/icons'

export default function Category() {
  const [listProduct, setListProduct] = useState<ProductResponse[]>([])
  const cart: CartRequest = useSelector((state: RootState) => state.cart)
  const userInfo = useSelector((state: RootState) => state.auth)
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(12)
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch()
  const [productName, setProductName] = useState('')

  const _renderContent = () => {
    return (
      <Row>
        <Col xs={24}></Col>
      </Row>
    )
  }

  useEffect(() => {
    getAllProduct()
  }, [page, size])

  useEffect(() => {
    function handleKeyDown(event: any) {
      if (event.keyCode === 13) {
        getAllProduct()
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [productName]);

  const getAllProduct = async () => {
    try {
      const res = await api.product.getAllProduct(page, size)
      const listProduct = res.data.data.filter((item: ProductResponse) => item.name.toLowerCase().includes(productName.toLowerCase()))
      setListProduct(listProduct.reverse())
      setTotal(res.data.total)
    } catch (err) {
      notification.error({
        message: 'Không lấy được danh sách sản phẩm',
      })
    }
  }

  const addProductToCart = (productAdd: ProductResponse) => {
    const product = cart.productIds.find(item => item.product.id === productAdd.id)
    if (product) {
      notification.warning({
        message: 'Thông báo',
        description: 'Sản phẩm đã được thêm vào giỏ hàng!'
      })
    }
    else {
      const cartNew: CartRequest = {
        userId: userInfo.id,
        totalAmount: cart.totalAmount + productAdd.price,
        orderNumber: 0,
        productIds: [...cart.productIds, { product: productAdd, quantity: 1 }]
      }
      dispatch(updateCart(cartNew))
      notification.success({
        message: 'Thông báo',
        description: 'Thêm vào giỏ hàng thành công!'
      })
    }
  }

  const onchangeNameSearch = (e: any) => {
    setProductName(e.target.value)
  }

  const onChange = (pageNumber: number, pageSize: number) => {
    setPage(pageNumber)
    setSize(pageSize)
  }

  return (
    <>
      <div className='category-container'>
        <div className='header-category'>
          <img src={BANNER_MAY1} className='image-banner'></img>
          <div className='center'>
            <h4>SẢN PHẨM</h4>
          </div>
        </div>
        <div style={{ textAlign: 'right', margin: '10px' }}>
          <Input
            className="header-search"
            placeholder="Nhập tên sản phẩm..."
            value={productName}
            onChange={onchangeNameSearch}
            prefix={<SearchOutlined />}
            style={{ width: '300px' }}
          />
        </div>
        <Row gutter={24}>
          {listProduct.map((item: ProductResponse) => {
            return <Col xs={12} md={8} lg={6} xl={4}>
              {item.status ?
                <ProductCard
                  productInfo={item}
                  addProductToCart={addProductToCart}
                />
                :
                <Badge.Ribbon text="Ngừng kinh doanh" color='red'>
                  <ProductCard
                    productInfo={item}
                    addProductToCart={addProductToCart}
                  />
                </Badge.Ribbon>
              }
            </Col>
          })}
        </Row>
        <Pagination
          defaultPageSize={size}
          size={'default'}
          defaultCurrent={1}
          total={total}
          onChange={onChange}
          showSizeChanger
          className='my-5'
          style={{ textAlign: 'center', fontSize: '18px', fontWeight: 600 }}
          showTotal={(total) => `Tổng số ${total} sản phẩm`}
        />;
      </div>
    </>
  )
}
