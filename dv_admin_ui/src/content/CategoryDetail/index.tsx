import { DoubleLeftOutlined } from '@ant-design/icons'
import { Box } from '@mui/system'
import { Button, Col, Form, Input, Row } from 'antd'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { CategoryResponse } from '../../models/category'
import './category-detail.scss'

export default function CategoryDetail() {
  const navagate = useNavigate()
  const location = useLocation()
  const categoryInfo: CategoryResponse = location.state as CategoryResponse
  const [edit, setEdit] = useState(false)
  const updateCategory = async () => {
    try {

    } catch (err) {

    }
    finally {
      setEdit(false)
    }
  }
  const handleEdit = () => {
    if (edit === false) {
      setEdit(true)
    } else {
      console.log('Dang cap nhat ten danh muc')
      updateCategory()
    }
  }
  const _renderCategoryItem = (label: string, name: string, message: string, disable: boolean, property: string) => {
    return (
      <Form.Item
        label={label}
        name={name}
        rules={[{ required: true, message: message }]}
        style={{ height: '50px' }}
      >
        <Input disabled={disable} defaultValue={property} />
      </Form.Item>
    )
  }
  const _renderCategoryInfo = () => {
    return (
      <div className="category-info">
        <Form>
          <Row gutter={24}>
            <Col xs={24} md={11} lg={10} style={{ height: '50px' }}>
              {_renderCategoryItem('Tên danh mục', 'category_name', 'Nhập tên danh mục', !edit, categoryInfo.name)}
            </Col>
            <Col xs={24} md={24} lg={3} className='button-edit-container'>
              <Button className="button-edit" type='primary' onClick={handleEdit}>{edit ? 'Lưu' : 'Chỉnh sửa'}</Button>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
  const _renderListProduct = () => {
    return (
      <div className="category-info">
        <h5>Danh sách sản phẩm trong danh mục</h5>
        <div className="mt-2">
        </div>
      </div>
    )
  }
  return (
    <Box className="category-detail-container">
      <Box className="category_header">
        <DoubleLeftOutlined onClick={() => navagate('/management/category')} />
        <h5>Chi tiết danh mục</h5>
      </Box>
      {_renderCategoryInfo()}
      {_renderListProduct()}
    </Box>
  )
}
