import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import './product.scss';
// import TableListCategory from './TableListCategory';
import { Button, Input } from 'antd';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
// import ModalAddCategory from './ModalAddCategory';
import api from '../../api';
import { CategoryResponse } from '../../models/category';
import { ProductResponse } from '../../models/product';
import TableListProduct from './TableListProduct';
import ModalAddProduct from './ModalAddProduct';

function Category() {
  const [categoryName, setCategoryName] = useState('')
  const [showModalAdd, setShowModalAdd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [listProduct, setListProduct] = useState<ProductResponse[]>([])
  const [listCategory, setListCategory] = useState<CategoryResponse[]>([])

  useEffect(() => {
    getAllProduct()
  }, [])

  useEffect(() => {
    getAllCategory()
  }, [])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 13) {
        getAllCategory()
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [categoryName]);

  const getAllProduct = async () => {
    setLoading(true)
    try {
      const res = await api.product.getAllProduct()
      setListProduct(res.data)
    } catch (err) { }
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

  const onChange = (e: any) => {
    setCategoryName(e.target.value)
  }

  const _renderFormSearch = () => {
    return (
      <Box className='search-container' >
        <Input
          value={categoryName}
          onChange={onChange}
          size="large"
          placeholder="Nhập tên danh mục"
          prefix={<SearchOutlined />}
          className='input'
        />
      </Box>
    )
  }

  const handleOk = () => {
    getAllCategory()
  }

  const _renderHeaderCategory = () => {
    return (
      <Box component='div' className='header-container'>
        <Box component='h5'>Danh sách sản phẩm</Box>
        <Button
          onClick={() => setShowModalAdd(true)}
          size='large'
          type='primary'
          className='button-add'
        >
          <PlusCircleOutlined />
          Thêm
        </Button>
      </Box>
    )
  }
  return (
    <>
      <Helmet>
        <title>Danh mục</title>
      </Helmet>
      <Box component='div' className='category-container'>
        {_renderHeaderCategory()}
        {_renderFormSearch()}
        <Box component='div' sx={{ margin: 1 }}>
          <TableListProduct
            listCate={listProduct}
            getListCategory={getAllCategory}
            loadingTable={loading}
          />
        </Box>
        {showModalAdd &&
          <ModalAddProduct
            handleCancel={() => setShowModalAdd(false)}
            handleOk={handleOk}
            title='Thêm sản phẩm mới'
            listCategory={listCategory}
          />
        }
      </Box>
    </>
  );
}

export default Category;
