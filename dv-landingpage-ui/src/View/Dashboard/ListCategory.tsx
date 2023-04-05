import { Menu, MenuProps } from 'antd'
import { MailOutlined, ShopOutlined, HddOutlined, GoldOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';

export default function ListCategory() {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  const items: MenuProps['items'] = [
    {
      label: 'Trang chủ',
      key: 'dashboard',
      icon: <HomeOutlined />,
    },
    {
      label: 'Sản phẩm',
      key: 'category',
      icon: <GoldOutlined />,
    },
    {
      label: 'Liên hệ',
      key: 'contact',
      icon: <MailOutlined />,
    },
    {
      label: 'Đơn hàng',
      key: 'order',
      icon: <HddOutlined />,
    },
    {
      label: 'Giỏ hàng',
      key: 'cart',
      icon: <ShopOutlined />,
    },
    {
      label: 'Tài khoản',
      key: 'user',
      icon: <UserOutlined />,
    },
  ];
  return (
    <Menu
      onClick={onClick}
      style={{ width: '100%', height: '100%' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
}
