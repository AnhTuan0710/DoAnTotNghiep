import { Button, Col, Form, Input, Modal, Row } from 'antd'
import { CustomerType } from '../../../dataType/custormer';
type Props = {
  title: string,
  customerInfo?: CustomerType;
  handleOk: () => void,
  handleCancel: () => void,
}
export default function ModalCustomerDetail(props: Props) {
  const { title, customerInfo, handleOk, handleCancel } = props
  const onFinish = (e: any) => {
    console.log(e, 'key')
  }
  const onFinishFailed = (e: any) => {
    console.log(e, 'key')
  }
  const _renderFormInputItem = (label: string, name: string, message: string, required: boolean, pattern?: any) => {
    return (
      <Col xs={24} sm={12} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
        <Form.Item
          label={label}
          name={name}
          rules={[
            {
              required: required,
              message: message
            },
            {
              pattern: pattern,
              message: "Định dạng không đúng"
            }
          ]}
        >
          <Input />
        </Form.Item>
      </Col >
    )
  }
  const _renderButtonFotter = () => {
    return (
      <Row gutter={24}>
        <Col xs={24} sm={24} lg={12}> </Col>
        <Col xs={24} sm={24} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
          <Button onClick={handleCancel}>Hủy</Button>
          {title === 'Thêm khách hàng mới'
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
      style={{ minWidth: '700px' }}
    >
      <div>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Row gutter={24}>
            {_renderFormInputItem("Mã khách hàng", "customer_cd", 'Nhập mã khách hàng!', true)}
            {_renderFormInputItem("Tên khách hàng", "customer_name", 'Nhập tên khách hàng!', true)}
          </Row>
          <Row gutter={24}>
            {_renderFormInputItem("Số điện thoại", "customer_phone", 'Nhập số điên thoại!', true, "(\\+84|0)[0-9]{9}$|^(0)[0-9]{10}$")}
            {_renderFormInputItem("Địa chỉ", "customer_address", 'Nhập địa chỉ!', false)}
          </Row>
          {_renderButtonFotter()}
        </Form>
      </div>
    </Modal>
  )
}
