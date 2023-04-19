import { DeleteOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Input, Popconfirm, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomerType } from '../../../dataType/custormer';
import ModalCustomerDetail from './ModalCustomerDetail';
export default function Product() {
  const navigate = useNavigate()
  const [loadingTable, setloadingTable] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [showModalAddCustomer, setShowModalAddCustomer] = useState(false)
  const [showModalDetailCustomer, setShowModalDetailCustomer] = useState(false)
  const handleRemoveCustomer = (e: any, record: CustomerType) => {
    e.stopPropagation()
    console.log(record, 'keytest')
  }
  const _renderButtonDelete = (text: any, record: CustomerType, index: number) => {
    return (
      <Popconfirm
        title="Bạn có chắc chắn xóa khách hàng?"
        onConfirm={(e) => handleRemoveCustomer(e, record)}
        onCancel={(e: any) => e.stopPropagation()}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined onClick={(e) => e.stopPropagation()} />
      </Popconfirm>
    )
  }
  const columns: ColumnsType<CustomerType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text: any, record: CustomerType, index: number) => <a>{index + 1}</a>,
    },
    {
      title: 'Mã khách hàng',
      dataIndex: 'customer_cd',
      key: 'customer_cd',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'customer_name',
      key: 'customer_name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'customer_address',
      key: 'customer_address',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'customer_phone',
      key: 'customer_phone',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Tổng nợ',
      dataIndex: 'amount_debt',
      key: 'amount_debt',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Xóa',
      dataIndex: 'delete',
      key: 'delete',
      render: _renderButtonDelete,
    },

  ];
  const handleOnRowTable = (record: CustomerType) => {
    
  }
  const onchangeNameSearch = (e: any) => {
    setCustomerName(e.target.value)
    console.log(e.target.value, 'name')
  }
  const handleAddCategory = () => {
    console.log('Add danh muc moi')
  }
  const _renderHeaderCustomer = () => {
    return (
      <div className='header-category'>
        <div className='title-category'>
          <h4>Khách hàng</h4>
          <Button className='button' onClick={() => setShowModalAddCustomer(true)}>
            <PlusCircleOutlined />
            Thêm mới
          </Button>
        </div>
        <Input
          className="header-search"
          placeholder="Nhập tên khách hàng..."
          value={customerName}
          onChange={onchangeNameSearch}
          prefix={<SearchOutlined />}
          style={{ width: '300px' }}
        />
      </div>
    )
  }
  const _renderTableCustomer = () => {
    return (
      <div className='list-category-container'>
        <Table
          rowKey={'table-category'}
          columns={columns}
          dataSource={[]}
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
      {_renderHeaderCustomer()}
      {_renderTableCustomer()}
      {showModalAddCustomer &&
        <ModalCustomerDetail
          title='Thêm khách hàng mới'
          handleCancel={() => setShowModalAddCustomer(false)}
          handleOk={() => { }}
        />
      }
      {showModalDetailCustomer &&
        <ModalCustomerDetail
          title='Chi tiết khách hàng'
          handleCancel={() => setShowModalDetailCustomer(false)}
          handleOk={() => { }}
        />
      }
    </div>
  )
}