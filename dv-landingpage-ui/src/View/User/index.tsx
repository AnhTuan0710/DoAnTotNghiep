import { Button, Col, Form, Input, Row, Select } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ICON_CALENDAR, ICON_DRIVER, ICON_USER } from '../../assets'
import { OptionType } from '../../dataType/optionType'
import './user.scss'

export default function User() {
  const navigate = useNavigate()
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
        <h4>Ninh Văn Tuấn</h4>
        <Row className='mt-3'>
          <Col xs={12}>
            <img src={ICON_CALENDAR} alt='user' style={{ width: '40px' }} />
            <h6>Ngày tham gia</h6>
            20/06/2022
          </Col>
          <Col xs={12}>
            <img src={ICON_DRIVER} alt='user' style={{ width: '40px' }} />
            <h6> Tổng đơn hàng</h6>
            30
          </Col>
        </Row>
        <Button type='primary' className='mt-5' onClick={handleLogOut}>Đăng xuất</Button>
      </div>
    )
  }

  const _FormSelectItem = (label: string, option: OptionType[], name: string) => {
    return (
      <Form.Item label={label} name={name} rules={[{ required: true, message: 'Nhập thông tin!' }]}>
        <Select>
          {option.map((item: OptionType, index: number) => {
            return <Select.Option value={item.value} key={index}>{item.name}</Select.Option>
          })}
        </Select>
      </Form.Item>
    )
  }

  const LIST_CITY: OptionType[] = [
    { name: 'Hà Nội', value: "Hà Nội" },
    { name: 'Nam Định', value: "Nam Định" },
    { name: 'Hồ Chí Minh', value: "Hồ Chí Minh" },
  ]

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
          {_FormSelectItem('Tỉnh thành', LIST_CITY, 'city')}
          {_FormSelectItem('Quận/ huyện', LIST_CITY, 'district')}
          <Form.Item label="Địa chỉ" name='address' rules={[{ required: true, message: 'Nhập địa chỉ!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="" style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" >Lưu</Button>
          </Form.Item>
        </Form>
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
