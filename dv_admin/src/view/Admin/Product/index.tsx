import { DeleteOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Input, Pagination, notification } from 'antd'
import { CategoryResponse, CategoryType } from '../../../dataType/category';
import { ProductResponse } from '../../../dataType/product';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableListProduct from '../../../components/TableListProduct';
import ModalProductDetail from './ModalAddProduct';
import api from '../../../api';
import './product.scss'
import { LIMIT, PAGE_DEFAULT } from '../../../constants';

export default function Customer() {
  const navigate = useNavigate()
  const [productName, setProductName] = useState('')
  const [showModalAddProduct, setShowModalAddProduct] = useState(false)
  const [loading, setLoading] = useState(false)
  const [listProduct, setListProduct] = useState<ProductResponse[]>([])
  const [listCategory, setListCategory] = useState<CategoryResponse[]>([])
  const [page, setPage] = useState(PAGE_DEFAULT)
  const [size, setSize] = useState(LIMIT)
  const [total, setTotal] = useState(0)

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

  useEffect(() => {
    getAllProduct()
  }, [page, size])

  useEffect(() => {
    getAllCategory()
  }, [])

  const getAllProduct = async () => {
    setLoading(true)
    try {
      const res = await api.product.getAllProduct(page, size)
      const listProduct = res.data.data.filter((item: ProductResponse) => item.name.toLowerCase().includes(productName.toLowerCase()))
      setListProduct(listProduct.reverse())
      setTotal(res.data.total)
    } catch (err) {
      notification.error({
        message: "Thông báo",
        description: "Không thể lấy danh sách sản phẩm"
      })
    }
    finally {
      setLoading(false)
    }
  }

  const getAllCategory = async () => {
    try {
      const res = await api.category.getAllCategory()
      setListCategory(res.data)
    } catch (err) { }
  }

  const onchangeNameSearch = (e: any) => {
    setProductName(e.target.value)
  }

  const _renderHeaderProduct = () => {
    return (
      <div className='header-category'>
        <div className='title-category'>
          <h4>Sản phẩm</h4>
          <Button className='button' onClick={() => setShowModalAddProduct(true)}>
            <PlusCircleOutlined />
            Thêm mới
          </Button>
        </div>
        <Input
          className="header-search"
          placeholder="Nhập tên sản phẩm..."
          value={productName}
          onChange={onchangeNameSearch}
          prefix={<SearchOutlined />}
          style={{ width: '300px' }}
        />
      </div>
    )
  }

  const onChange = (pageNumber: number, pageSize: number) => {
    setPage(pageNumber)
    setSize(pageSize)
  }

  const _renderTableProduct = () => {
    return (
      <div className='list-category-container'>
        <TableListProduct
          listProduct={listProduct}
          loadingTable={loading}
          getListProduct={getAllProduct}
        />
        <Pagination
          defaultPageSize={size}
          size={'default'}
          defaultCurrent={1}
          total={total}
          onChange={onChange}
          showSizeChanger
          className='my-1'
          style={{float: 'right'}}
          showTotal={(total) => `Tổng số ${total} sản phẩm`}
        />;
      </div>
    )
  }
  return (
    <div className='category-container'>
      {_renderHeaderProduct()}
      {_renderTableProduct()}
      {showModalAddProduct &&
        <ModalProductDetail
          title='Thêm sản phẩm mới'
          handleCancel={() => setShowModalAddProduct(false)}
          handleOk={() => { }}
          listCategory={listCategory}
          getListCate={getAllProduct}
        />
      }
    </div>
  )
}