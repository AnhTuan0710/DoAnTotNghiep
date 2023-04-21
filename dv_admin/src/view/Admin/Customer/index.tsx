import { DeleteOutlined, PlusCircleOutlined, SearchOutlined, FileSearchOutlined } from '@ant-design/icons'
import { Button, Input, notification, Popconfirm, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import { useEffect, useState } from 'react';
import api from '../../../api';
import { CustomerResponse } from '../../../dataType/custormer';
import { DateUtils } from '../../../Ultils/DateFormat';
import ModalCustomerDetail from './ModalCustomerDetail';
export default function Product() {
  const [loadingTable, setloadingTable] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [showModalAddCustomer, setShowModalAddCustomer] = useState(false)
  const [showModalDetailCustomer, setShowModalDetailCustomer] = useState(false)
  const [listCustomer, setListCustomer] = useState<CustomerResponse[]>([])

  useEffect(() => {
    getAllCustomer()
  }, [])

  const getAllCustomer = async () => {
    setloadingTable(true)
    try {
      const res = await api.customer.getAllCustomer()
      setListCustomer(res.data)
    } catch (err) {
      notification.error({
        message:"Thông báo",
        description:"Không thể lấy danh sách khách hàng"
      })
    }
    finally {
      setloadingTable(false)
    }
  }

  const handleRemoveCustomer = (e: any, record: CustomerResponse) => {

  }

  const _renderButtonDelete = (text: any, record: CustomerResponse, index: number) => {
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

  const _renderDetail = (text: any, record: CustomerResponse, index: number) => {
    return (
      <FileSearchOutlined onClick={() => handleOnRowTable(record)} />
    )
  }

  const columns: ColumnsType<CustomerResponse> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text: any, record: CustomerResponse, index: number) => <a>{index + 1}</a>,
    },
    {
      title: 'Mã khách hàng',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone_no',
      key: 'phone_no',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'create_date',
      key: 'create_date',
      render: text => <a>{moment(text).format(DateUtils.DATE_TIME)}</a>,
    },
    {
      title: 'Chi tiết',
      dataIndex: 'detail',
      key: 'detail',
      align: 'center',
      render: _renderDetail,
    },
    {
      title: 'Xóa',
      dataIndex: 'delete',
      key: 'delete',
      align: 'center',
      render: _renderButtonDelete,
    },

  ];

  const handleOnRowTable = (record: CustomerResponse) => {
    setShowModalDetailCustomer(true)
  }

  const onchangeNameSearch = (e: any) => {
    setCustomerName(e.target.value)
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
          dataSource={listCustomer}
          loading={loadingTable}
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