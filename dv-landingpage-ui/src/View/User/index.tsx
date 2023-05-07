import { Button, Col, Form, Input, notification, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ICON_CALENDAR, ICON_DRIVER, ICON_USER } from '../../assets'
import './user.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import moment from 'moment'
import { useEffect, useState } from 'react'
import api from '../../api'
import { UserUpdateDto } from '../../dataType/user'
import { LogOut, saveInfoUser } from '../../redux/action/auth'

export default function User() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const infoUser = useSelector((state: RootState) => state.auth)
  const [loading, setLoading] = useState(false)
  const [listOrder, setListOrder] = useState(0)

  useEffect(() => { getAllInvoice() }, [])

  const getAllInvoice = async () => {
    try {
      const res = await api.order.getAllOrderByUser(infoUser.id)
      setListOrder(res.data.length)
    } catch (err) { }
  }

  const onFinish = (e: UserUpdateDto) => {
    handleChangeInfo(e)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleLogOut = () => {
    navigate('/sign-in')
    dispatch(LogOut())
  }

  const handleChangeInfo = async (e: UserUpdateDto) => {
    setLoading(true)
    try {
      const userUpdateNew: any = {
        ...infoUser,
        address: e.address,
        phone_no: e.phone_no,
        name: e.name,
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
        <h4>{infoUser.name? infoUser.name: 'Chưa đăng nhập'}</h4>
        <Row className='mt-3'>
          <Col xs={12}>
            <img src={ICON_CALENDAR} alt='user' style={{ width: '40px' }} />
            <h6>Ngày tham gia</h6>
            {infoUser.name  ? moment(infoUser.create_date).format('DD/MM/YYYY'): 'Chưa có thông tin'}
          </Col>
          <Col xs={12}>
            <img src={ICON_DRIVER} alt='user' style={{ width: '40px' }} />
            <h6> Tổng đơn hàng</h6>
            {infoUser.name ? listOrder: 'Chưa có thông tin'}
          </Col>
        </Row>
        <Button type='primary' className='mt-5' onClick={handleLogOut}>{infoUser.name? 'Đăng xuất': 'Đăng nhập'}</Button>
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
          <Form.Item label="Tên" name='name' rules={[{ required: true, message: 'Nhập tên!' }]} initialValue={infoUser.name}>
            <Input/>
          </Form.Item>
          <Form.Item label="Địa chỉ" name='address' rules={[{ required: true, message: 'Nhập địa chỉ!' }]} initialValue={infoUser.address}>
            <Input/>
          </Form.Item>
          <Form.Item label="SĐT" name='phone_no' rules={[{ required: true, message: 'Nhập số điện thoại!' }]} initialValue={infoUser.phone_no}>
            <Input/>
          </Form.Item>
          <Form.Item label="" style={{ textAlign: 'center', width: '100%' }} >
            <Button type="primary" htmlType="submit" loading={loading} style={{ marginTop: '40px' }} >Sửa</Button>
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
