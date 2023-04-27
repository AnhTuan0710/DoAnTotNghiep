import { Avatar, Button, Form, Input, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './sign-in.scss'
import { UserOutlined } from '@ant-design/icons';
import { LoginParam } from '../../dataType/user';
import { useState } from 'react';
import api from '../../api';
import { useDispatch } from 'react-redux';
import { SaveToken, saveInfoUser } from '../../redux/action/auth';
import { saveOrder } from '../../redux/action/order';

function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const getAllInvoice = async (id: number) => {
    try {
      const res = await api.order.getAllOrderByUser(id)
      dispatch(saveOrder(res.data))
    }catch(err){

    }
  }

  const onFinish = async (values: LoginParam) => {
    setLoading(true)
    try {
      const res = await api.auth.login(values)
      dispatch(SaveToken(res.data.access_token))
      dispatch(saveInfoUser(res.data.user))
      getAllInvoice(res.data.user.id)
      navigate('/dashboard')
    } catch (err) {
      notification.error({
        message: 'Thông báo',
        description: 'Thông tin đăng nhập chưa chính xác',
      })
    }
    finally {
      setLoading(false)
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='sign-in-container'>
      <div className='right'>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ minWidth: '500px' }}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className='form-input-login'
        >
          <h5 className='mt-5'> <Avatar style={{ backgroundColor: 'black' }} icon={<UserOutlined />} />  Đức Việt Tools</h5>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Nhập email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Nhập mật khẩu!' }]}
          >
            <Input.Password />
          </Form.Item>
          <p>Bạn chưa có tài khoản. <Link to='/sign-up'>Đăng ký</Link></p>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default SignIn