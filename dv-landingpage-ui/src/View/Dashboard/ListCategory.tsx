import { Menu, MenuProps } from 'antd'
import { GoldOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import api from '../../api';
import { CategoryResponse } from '../../dataType/category';

export default function ListCategory() {
  const [listCategory, setListCategory] = useState<CategoryResponse[]>([])
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  useEffect(() => {
    getAllCategory()
  }, [])

  const getAllCategory = async () => {
    try {
      const res = await api.category.getAllCategory()
      setListCategory(res.data)
    } catch (err) { }
  }

  const menu: MenuProps['items'] = listCategory.map((item: CategoryResponse) => {
    return {
      label: item.name,
      key: item.id,
      icon: <GoldOutlined />
    }
  })
  return (
    <Menu
      onClick={onClick}
      style={{ width: '100%', height: '100%' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={menu}
    />
  )
}
