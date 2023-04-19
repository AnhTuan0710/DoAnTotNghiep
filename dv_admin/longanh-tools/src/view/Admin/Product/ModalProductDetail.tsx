import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, InputNumber, Modal, notification, Row, Select, Upload } from 'antd'
import { ProductType } from '../../../dataType/product'
type Props = {
  title: string,
  productInfo?: ProductType;
  handleOk: () => void,
  handleCancel: () => void,
}
const { Option } = Select
export default function ModalProductDetail(props: Props) {
  const { title, productInfo, handleOk, handleCancel } = props
  const onFinish = (e: ProductType) => {
    if(e.price < e.price_import) {
      notification.warning({
        message: 'Thông báo',
        description: 'Gía nhập không được cao hơn gía bán!'
      })
    }
    else {
      notification.success({
        message: 'Thông báo',
        description: `Thêm sản phẩm ${e.product_name} thành công!`
      })
      handleCancel()
    }
  }
  const onFinishFailed = (e: any) => {
    notification.warning({
      message: 'Thông báo',
      description: 'Giá trị nhập chưa hợp lệ!'
    })
  }
  const _renderFormImageProduct = () => {
    return (
      <Col xs={24} lg={4} style={{ display: 'flex', justifyContent: "flex-end", alignItems: 'center' }}>
        <Form.Item label="" valuePropName="fileList">
          <Upload
            action="/upload.do"
            listType="picture-card"
            maxCount={1}
            accept="image/png, image/jpeg, image/svg"
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Tải lên</div>
            </div>
          </Upload>
        </Form.Item>
      </Col>
    )
  }
  const _renderFormInputItem = (label: string, name: string, message: string, required: boolean) => {
    return (
      <Col xs={24} sm={12} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
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
  const _renderFormSelectItem = () => {
    return (
      <Col xs={24} sm={12} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
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
      <Col xs={24} sm={12} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
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
  const _renderFormInputNumber = () => {
    return (
      <Col xs={24} sm={12} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
        <Form.Item
          label="Số lượng"
          name="amount"
          rules={[{ required: true, message: 'Nhập số lượng sản phẩm!' }]}
        >
          <InputNumber style={{ minWidth: '190px', margin: '0px' }} />
        </Form.Item>
      </Col>
    )
  }
  const _renderButtonFotter = () => {
    return (
      <Row gutter={24}>
        <Col xs={24} sm={24} lg={12}> </Col>
        <Col xs={24} sm={24} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
          <Button onClick={handleCancel}>Hủy</Button>
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
            {_renderFormImageProduct()}
            <Col xs={24} lg={20}>
              <Row gutter={24}>
                {_renderFormInputItem("Tên sản phẩm", "product_name", 'Nhập tên sản phẩm!', true)}
                {_renderFormSelectItem()}
              </Row>
              <Row gutter={24}>
                {_renderFormInputMoney("Giá bán", "price", 'Nhập giá bán sản phẩm!')}
                {_renderFormInputMoney("Giá nhập", "price_import", 'Nhập giá nhập sản phẩm!')}
              </Row>
              <Row gutter={24}>
                {_renderFormInputNumber()}
                {_renderFormInputItem("Đơn vị", "unit", 'Nhập đơn vị sản phẩm!', false)}
              </Row>
              {_renderButtonFotter()}
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  )
}
