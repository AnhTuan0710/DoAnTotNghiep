import { DoubleLeftOutlined } from "@ant-design/icons"
import { Button, Col, Form, Input, Row } from "antd"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import TableListProduct from "../../../components/TableListProduct"
import { CategoryType } from "../../../dataType/category"

export default function CategoryDetail() {
  const navagate = useNavigate()
  const location = useLocation()
  const categoryInfo: CategoryType = location.state as CategoryType
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
            <Col xs={24} md={11} lg={10} style={{ height: '50px' }} >
              {_renderCategoryItem('Mã danh mục', 'category_cd', 'Nhập mã danh mục', true, categoryInfo.category_cd)}
            </Col>
            <Col xs={24} md={11} lg={10} style={{ height: '50px' }}>
              {_renderCategoryItem('Tên danh mục', 'category_name', 'Nhập tên danh mục', !edit, categoryInfo.category_name)}
            </Col>
            <Col xs={24} md={24} lg={3} className='button-edit-container'>
              <Button className="button" onClick={handleEdit}>{edit ? 'Lưu' : 'Chỉnh sửa'}</Button>
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
          <TableListProduct
            loadingTable={false}
            listProduct={[]}
          />
        </div>
      </div>
    )
  }
  return (
    <div className="category-detail-container">
      <div className="category_header">
        <DoubleLeftOutlined onClick={() => navagate('/category')} />
        <h4>Chi tiết danh mục</h4>
      </div>
      {_renderCategoryInfo()}
      {_renderListProduct()}
    </div>
  )
}
