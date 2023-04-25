import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, InputNumber, Modal, notification, Row, Select, Upload } from 'antd'
import { ProductRequest, ProductResponse } from '../../models/product';
import { CategoryResponse } from '../../models/category';

type Props = {
  title: string,
  productInfo?: ProductResponse;
  handleOk: () => void,
  handleCancel: () => void,
  listCategory: CategoryResponse[]
}
const { Option } = Select
export default function ModalAddProduct(props: Props) {
  const { title, productInfo, handleOk, handleCancel } = props
  const onFinish = (e: any) => {
    console.log(e, 'keytest')
  }
  const onFinishFailed = (e: any) => {
    notification.warning({
      message: 'Thông báo',
      description: 'Giá trị nhập chưa hợp lệ!'
    })
  }
  const _renderFormInputItem = (label: string, name: string, message: string, required: boolean) => {
    return (
      <Col xs={24} style={{ display: 'flex', justifyContent: "flex-end" }}>
        <Form.Item
          label={label}
          name={name}
          rules={[{ required: required, message: message }]}
        >
          <Input />
        </Form.Item>
      </Col>
    )
  }

  const _renderFormTextAra = (label: string, name: string, message: string, required: boolean) => {
    return (
      <Col xs={24} style={{ display: 'flex', justifyContent: "flex-end" }}>
        <Form.Item
          label={label}
          name={name}
          rules={[{ required: required, message: message }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Col>
    )
  }

  const _renderFormSelectItem = () => {
    return (
      <Col xs={24}style={{ display: 'flex', justifyContent: "flex-end" }}>
        <Form.Item
          name="category_cd"
          label="Loại danh mục"
          rules={[{ required: true, message: 'Nhập loại danh mục!' }]}
        >
          <Select placeholder="Nhập loại danh mục">
            <Option value="male" >Male</Option>
            <Option value="female" >Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
      </Col>
    )
  }
  const _renderFormInputMoney = (label: string, name: string, message: string) => {
    return (
      <Col xs={24} style={{ display: 'flex', justifyContent: "flex-end" }}>
        <Form.Item
          label={label}
          name={name}
          rules={[{ required: true, message: message }]}
        >
          <InputNumber
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value!.replace(/\$\s?|(,*)/g, '')}
            style={{ minWidth: '190px', margin: '0px' }}
          />
        </Form.Item>
      </Col>
    )
  }
  const _renderButtonFotter = () => {
    return (
      <Row gutter={24}>
        <Col xs={24} sm={24} lg={12}> </Col>
        <Col xs={24} sm={24} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
          <Button onClick={handleCancel} style={{ marginRight: 2 }}>Hủy</Button>
          {title === 'Thêm sản phẩm mới'
            ? <Button className='button' htmlType='submit'>Thêm</Button>
            : <Button className='button'>Chỉnh sửa, Lưu</Button>}
        </Col>
      </Row>
    )
  }
  return (
    <Modal
      title={title}
      open={true}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
      style={{ minWidth: '830px' }}
    >
      <div>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Row gutter={24}>
            {_renderFormInputItem("Tên sản phẩm", "name", 'Nhập tên sản phẩm!', true)}
            {_renderFormSelectItem()}
            {_renderFormInputMoney("Giá bán", "price", 'Nhập giá bán sản phẩm!')}
            {_renderFormInputItem("Kích thước", "size", 'Nhập kích thước sản phẩm!', true)}
            {_renderFormInputItem("Trọng lượng", "weight", 'Nhập trọng lượng sản phẩm!', true)}
            {_renderFormInputItem("Đơn vị", "unit", 'Nhập đơn vị sản phẩm!', true)}
            {_renderFormTextAra("Link ảnh", "image", 'Nhập hình ảnh sản phẩm!', false)}
            {_renderFormTextAra("Mô tả", "description", 'Nhập mô tả sản phẩm!', false)}
          </Row>
          {_renderButtonFotter()}
        </Form>
      </div>
    </Modal>
  )
}
