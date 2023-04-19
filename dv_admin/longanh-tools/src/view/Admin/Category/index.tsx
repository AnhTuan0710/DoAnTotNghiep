import { DeleteOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Input, Popconfirm } from 'antd'
import './category.scss'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CategoryType } from '../../../dataType/category';
import { ProductType } from '../../../dataType/product';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalAddCategory from './ModalAddCategory';
export default function Category() {
  const navigate = useNavigate()
  const [loadingTable, setloadingTable] = useState(false)
  const [categoryName, setCategoryName] = useState('')
  const [showModalAddCategory, setShowModalAddCategory] = useState(false)
  const handleRemoveCategory = (e: any, record: CategoryType) => {
    e.stopPropagation()
    console.log(record, 'keytest')
  }
  const _renderButtonDelete = (text: any, record: CategoryType, index: number) => {
    return (
      <Popconfirm
        title="Bạn có chắc chắn xóa danh mục?"
        onConfirm={(e) => handleRemoveCategory(e, record)}
        onCancel={(e: any) => e.stopPropagation()}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined onClick={(e) => e.stopPropagation()} />
      </Popconfirm>
    )
  }
  const columns: ColumnsType<CategoryType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text: any, record: CategoryType, index: number) => <a>{index + 1}</a>,
    },
    {
      title: 'Mã danh mục',
      dataIndex: 'category_cd',
      key: 'category_cd',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Tên danh mục',
      dataIndex: 'category_name',
      key: 'category_name',
    },
    {
      title: 'Số lượng mặt hàng',
      dataIndex: 'list_product',
      key: 'list_product',
      render: (text: ProductType[]) => <div>{text.length}</div>,
    },
    {
      title: 'Xóa',
      dataIndex: 'delete',
      key: 'delete',
      render: _renderButtonDelete,
    },

  ];
  const data: CategoryType[] = [
    {
      category_cd: 'DM00001',
      category_name: 'Bua',
      list_product: []
    },
    {
      category_cd: 'DM00002',
      category_name: 'Kim',
      list_product: []
    },
    {
      category_cd: 'DM00003',
      category_name: 'Keo',
      list_product: []
    }
  ];

  const handleOnRowTable = (record: CategoryType) => {
    navigate(`/category/${record.category_cd}`, { state: record })
  }
  const onchangeNameSearch = (e: any) => {
    setCategoryName(e.target.value)
    console.log(e.target.value, 'name')
  }
  const handleAddCategory = () => {
    console.log('Add danh muc moi')
  }
  const _renderHeaderCategory = () => {
    return (
      <div className='header-category'>
        <div className='title-category'>
          <h4>Danh mục sản phẩm</h4>
          <Button className='button' onClick={() => setShowModalAddCategory(true)}>
            <PlusCircleOutlined />
            Thêm mới
          </Button>
        </div>
        <Input
          className="header-search"
          placeholder="Nhập tên danh mục..."
          value={categoryName}
          onChange={onchangeNameSearch}
          prefix={<SearchOutlined />}
          style={{ width: '300px' }}
        />
      </div>
    )
  }
  const _renderTableCategory = () => {
    return (
      <div className='list-category-container'>
        <Table
          rowKey={'table-category'}
          columns={columns}
          dataSource={data}
          loading={loadingTable}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => { handleOnRowTable(record) },
            };
          }}
        />
      </div>
    )
  }
  return (
    <div className='category-container'>
      {_renderHeaderCategory()}
      {_renderTableCategory()}
      {showModalAddCategory &&
        <ModalAddCategory
          handleCancel={() => setShowModalAddCategory(false)}
          handleOk={handleAddCategory}
          confirmLoading={false}
        />
      }
    </div>
  )
}
