import { Button, Col, Form, Input, notification, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ICON_CALENDAR, ICON_DRIVER, ICON_USER } from '../../assets'
import './user.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import moment from 'moment'
import { useState } from 'react'
import api from '../../api'
import { UserUpdateDto } from '../../dataType/user'
import { saveInfoUser } from '../../redux/action/auth'
import { UserInfoReponse } from '../../dataType/auth'

export default function User() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const infoUser = useSelector((state: RootState) => state.auth)
  const order = useSelector((state: RootState) => state.order)
  const [edit, setEdit] = useState(false)
  const [loading, setLoading] = useState(false)

  const onFinish = (e: UserUpdateDto) => {
    if (!edit) {
      setEdit(true)
    }
    else {
      handleChangeInfo(e)
    }
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleLogOut = () => {
    navigate('/sign-in')
  }

  const handleChangeInfo = async (e: UserUpdateDto) => {
    setLoading(true)
    try {
      const userUpdateNew: any = {
        ...infoUser,
        address: e.address,
        phone_no: e.phone_no,
        name: e.phone_no,
      }
      dispatch(saveInfoUser(userUpdateNew))
      await api.user.updateUserInfo(infoUser.id, e)
      notification.success({
        message: 'Thông báo',
        description: 'Cập nhật thông tin thành công',
      })

    } catch (err) {
      notification.error({
        message: 'Thông báo',
        description: 'Cập nhật thất bại'
      })
    } finally {
      setLoading(false)
    }
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
          <Form.Item label="Email" name='email' rules={[{ required: true, message: 'Nhập email!' }]} initialValue={infoUser.email}>
            <Input disabled={!edit} />
          </Form.Item>
          <Form.Item label="Địa chỉ" name='address' rules={[{ required: true, message: 'Nhập địa chỉ!' }]} initialValue={infoUser.address}>
            <Input disabled={!edit} />
          </Form.Item>
          <Form.Item label="SĐT" name='phone_no' rules={[{ required: true, message: 'Nhập password!' }]} initialValue={infoUser.phone_no}>
            <Input disabled={!edit} />
          </Form.Item>
          <Form.Item label="" style={{ textAlign: 'center', width: '100%' }} >
            <Button type="primary" htmlType="submit" loading={loading} >{edit ? "Lưu" : "Chỉnh sửa"}</Button>
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
