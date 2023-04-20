import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import './category.scss';
import TableListCategory from './TableListCategory';
import { Button, Input } from 'antd';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import ModalAddCategory from './ModalAddCategory';
import api from '../../api';
import { CategoryResponse } from '../../models/category';

function Category() {
  const [categoryName, setCategoryName] = useState('')
  const [showModalAdd, setShowModalAdd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [listCategory, setListCategory] = useState<CategoryResponse[]>([])

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

  const getAllCategory = async () => {
    setLoading(true)
    try {
      const res = await api.category.getAllCategory()
      const listCate = res.data.filter(item => item.name.toLowerCase().includes(categoryName.toLowerCase()))
      setListCategory(listCate)
    } catch (err) { }
    finally {
      setLoading(false)
    }
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
        <Box component='h5'>Danh mục sản phẩm</Box>
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
          <TableListCategory
            listCate={listCategory}
            getListCategory={getAllCategory}
            loadingTable={loading}
          />
        </Box>
        {showModalAdd &&
          <ModalAddCategory
            closeModal={() => setShowModalAdd(false)}
            handleOk={handleOk}
            confirmLoading={loading}
          />
        }
      </Box>
    </>
  );
}

export default Category;
