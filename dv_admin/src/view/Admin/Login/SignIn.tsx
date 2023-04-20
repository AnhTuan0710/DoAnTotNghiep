import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
  notification,
} from "antd";
import { LOGO } from "../../../assets";
import { SIGNUP, SINGIN, TEMPLATE } from "../../../elements";
const { Title } = Typography;
const { Header, Content } = Layout;
export default function SignIn() {
  const navigate = useNavigate()
  const [showPW, setShowPW] = useState(false)
  const onFinish = (values: any) => {
    if (values.account === '0857847685' && values.password === '123123') {
      navigate('/dashboard')
    }
    else if (values.account === '0857847686' && values.password === '123123') {
      navigate('/invoice')
    }
    else {
      notification.error({
        message: 'Thông báo',
        description: 'Sai tên đăng nhập hoặc mật khẩu',
      })
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const _renderMenuItem = (key: string, link: string, icon: any, title: string) => {
    return (
      <Menu.Item key={key}>
        <Link to={link}>
          {icon}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
  const _renderFormItem = (label: string, name: string, message: string, placeholder: string, type?: string) => {
    return (
      <Form.Item
        className="username"
        label={label}
        name={name}
        rules={[
          {
            required: true,
            message: message,
          },
        ]}
      >
        <Input placeholder={placeholder} type={type} />
      </Form.Item>
    )
  }
  const _renderMenu = () => {
    return (
      <div className="header-col header-nav">
        <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
          {_renderMenuItem('1', '/rivew-page', TEMPLATE, 'Tổng quan')}
          {_renderMenuItem('2', '/sign-up', SIGNUP, 'Đăng kí')}
          {_renderMenuItem('3', '/sign-in', SINGIN, 'Đăng nhập')}
        </Menu>
      </div>
    )
  }
  const _renderButtonSignIn = () => {
    return (
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%" }}
        >
          ĐĂNG NHẬP
        </Button>
      </Form.Item>
    )
  }
  const _renderCheckShowPassword = () => {
    return (
      <Form.Item
        name="remember"
        className="aligin-center"
        valuePropName="checked"
      >
        <Switch onChange={() => setShowPW(!showPW)} />
        Hiện mật khẩu
      </Form.Item>
    )
  }
  const _renderLinkToSignUp = () => {
    return (
      <p className="font-semibold text-muted">
        Bạn chưa có tài khoản?{" "}
        <Link to="/sign-up" className="text-dark font-bold">
          Đăng kí ngay
        </Link>
      </p>
    )
  }
  const _renderFormSignIn = () => {
    return (
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className="row-col"
      >
        {_renderFormItem('Tên tài khoản', 'account', 'Nhập tên tài khoản !', 'Nhập tên tài khoản')}
        {_renderFormItem('Mật khẩu', 'password', 'Nhập mật khẩu !', 'Nhập mật khẩu', showPW ? "text" : 'password')}
        {_renderCheckShowPassword()}
        {_renderButtonSignIn()}
        {_renderLinkToSignUp()}
      </Form>
    )
  }
  const _renderContent = () => {
    return (
      <Content className="signin">
        <Row gutter={[24, 0]} justify="space-around">
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 6, offset: 2 }}
            md={{ span: 12 }}
          >
            <Title className="mb-15">Admin</Title>
            <Title className="font-regular text-muted" level={5}>
              Đăng nhập quản lý cửa hàng
            </Title>
            {_renderFormSignIn()}
          </Col>
          <Col
            className="sign-img"
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
          >
            <img src={LOGO} alt="" />
          </Col>
        </Row>
      </Content>
    )
  }
  return (
    <>
      <Layout className="layout-default layout-signin">
        <Header>
          {_renderMenu()}
        </Header>
        {_renderContent()}
      </Layout>
    </>
  );
}
