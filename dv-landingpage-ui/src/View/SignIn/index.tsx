import { Avatar, Button, Form, Input, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './sign-in.scss'
import { UserOutlined } from '@ant-design/icons';
import { LoginParam } from '../../dataType/user';
import { MSG_LOGIN } from '../../message/login';

function SignIn() {
  const navigate = useNavigate()

  const onFinish = (values: LoginParam) => {
    if (values.email === 'anhtuan123' && values.password === '123123') {
      navigate('/dashboard')
    } else {
      notification.error({
        message: MSG_LOGIN.ERR_CONFIRM,
        description: MSG_LOGIN.ERR_LOGIN
      })
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
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default SignIn