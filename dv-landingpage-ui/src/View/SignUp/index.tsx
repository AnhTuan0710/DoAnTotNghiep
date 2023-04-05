import { Avatar, Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import './sign-up.scss'
import { UserOutlined } from '@ant-design/icons';

function SignUp() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='sign-up-container'>
      <div className='right'>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{ remember: true }}
          style={{minWidth: '500px'}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className='form-input-login'
        >
          <h5 className='mt-5'> <Avatar style={{ backgroundColor: 'black' }} icon={<UserOutlined />} />  Đức Việt Tools</h5>
          <Form.Item
            label="Tên người dùng"
            name="name"
            rules={[{ required: true, message: 'Nhập tên người dùng!' }]}
          >
            <Input />
          </Form.Item>
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
          <p>Bạn đã có tài khoản. <Link to='/sign-in'>Đăng nhập</Link></p>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default SignUp