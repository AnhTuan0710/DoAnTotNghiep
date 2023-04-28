import { Badge, Col, Input, Menu, MenuProps, Row } from 'antd';
import { useEffect, useState } from 'react';
import { MailOutlined, ShopOutlined, HddOutlined, AppstoreAddOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import './header.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';

export default function Header() {
  const [current, setCurrent] = useState('dashboard');
  const navigator = useNavigate()
  const cart = useSelector((state: RootState) => state.cart)
  const [name, setName] = useState('')

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    e.key !== 'serach' && navigator(`${e.key}`)
  };

  const itemsDashboard: MenuProps['items'] = [
    {
      label: 'Trang chủ',
      key: 'dashboard',
      icon: <HomeOutlined />,
    },
  ];

  const items: MenuProps['items'] = [
    {
      label: 'Sản phẩm',
      key: 'category',
      icon: <AppstoreAddOutlined />,
    },
    {
      label: 'Đơn hàng',
      key: 'order',
      icon: <HddOutlined />,
    },
    {
      label: 'Giỏ hàng',
      key: 'cart',
      icon: <Badge count={cart.productIds ? cart.productIds.length: 0} status='success'>
        <ShopOutlined />
      </Badge>,
    },
    {
      label: 'Tài khoản',
      key: 'user',
      icon: <UserOutlined />,
    },
  ];

  useEffect(() => {
    function handleKeyDown(event: any) {
      if (event.keyCode === 13) {
        navigator('/category', {
          state: name
        })
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [name]);


  return (
    <Row gutter={12} className='header-container'>
      <Col xs={10} md={4}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={itemsDashboard}
          className='header-container-menu'
        />
      </Col>
      <Col xs={12} md={6} className='input-search'>
        <Input.Search className='input' value={name} onChange={(e) => setName(e.target.value)}/>
      </Col>
      <Col xs={2} md={14}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className='header-container-menu'
        />
      </Col>
    </Row>
  )
}
