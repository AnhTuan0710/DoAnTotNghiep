import { Button, Col, Form, Input, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ICON_CALENDAR, ICON_DRIVER, ICON_USER } from '../../assets'
import './user.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import moment from 'moment'

export default function User() {
  const navigate = useNavigate()
  const infoUser = useSelector((state: RootState) => state.auth)
  const order = useSelector((state: RootState) => state.order)
  const onFinish = (e: any) => {
    console.log(e)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleLogOut = () => {
    navigate('/sign-in')
  }
  const _renderHistoryUser = () => {
    return (
      <div className="image-icon-user">
        <img src={ICON_USER} alt='user' style={{ width: '64px' }} />
        <h4>{infoUser.name}</h4>
        <Row className='mt-3'>
          <Col xs={12}>
            <img src={ICON_CALENDAR} alt='user' style={{ width: '40px' }} />
            <h6>Ngày tham gia</h6>
            {moment(infoUser.create_date).format('DD/MM/YYYY')}
          </Col>
          <Col xs={12}>
            <img src={ICON_DRIVER} alt='user' style={{ width: '40px' }} />
            <h6> Tổng đơn hàng</h6>
            {order.length}
          </Col>
        </Row>
        <Button type='primary' className='mt-5' onClick={handleLogOut}>Đăng xuất</Button>
      </div>
    )
  }

  const _renderAddressUser = () => {
    return (
      <div className="image-icon-user">
        <h5> Thông tin khách hàng</h5>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className='form-input-login'
        >
          <Form.Item label="Email" name='email' rules={[{ required: true, message: 'Nhập email!' }]}>
            <Input defaultValue={infoUser.email} />
          </Form.Item>
          <Form.Item label="Địa chỉ" name='address' rules={[{ required: true, message: 'Nhập địa chỉ!' }]}>
            <Input defaultValue={infoUser.address}/>
          </Form.Item>
          <Form.Item label="SĐT" name='phone_no' rules={[{ required: true, message: 'Nhập password!' }]}>
            <Input  defaultValue={infoUser.phone_no}/>
          </Form.Item>
          <Form.Item label="Mật khẩu" name='password' rules={[{ required: true, message: 'Nhập password!' }]}>
            <Input />
          </Form.Item>
        </Form>
        <Form.Item label="">
          <Button type="primary" htmlType="submit" >Lưu</Button>
        </Form.Item>
      </div>
    )
  }
  return (
    <div className="user-container">
      <Row gutter={12}>
        <Col xs={24} md={12}>{_renderHistoryUser()} </Col>
        <Col xs={24} md={12}>{_renderAddressUser()}</Col>
      </Row>
    </div>
  )
}
