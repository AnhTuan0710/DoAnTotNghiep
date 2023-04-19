import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Input, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InvoiceType } from '../../../dataType/invoice';
import { MoneyFormat } from '../../../Ultils/MoneyFormat';
import ModalInvoiceDetail from './ModalInvoiceDetail';
export default function Invoice() {
  const navigate = useNavigate()
  const [loadingTable, setloadingTable] = useState(false)
  const [invoiceCd, setInvoiceCd] = useState('')
  const [modalDetailInvoice, setModalDetailInvoice] = useState(false)
  const [invoiceInfoDetail, setInvoiceInfoDetail] = useState<InvoiceType>()
  const listImport: InvoiceType[] = [
    {
      invoice_cd: 'IV00001',
      customer_cd: 'CU00001',
      total_amount: 1000000,
      total_paid: 800000,
      total_debt: 200000,
      status: 1,
      product: [
        {
          product_cd: 'SP0001',
          product_name: 'San pham 1',
          price: 100000,
          quanlity: 3
        },
        {
          product_cd: 'SP0002',
          product_name: 'San pham 2',
          price: 40000,
          quanlity: 3
        }
      ]
    },
    {
      invoice_cd: 'IV00002',
      customer_cd: 'CU00002',
      total_amount: 5000000,
      total_paid: 5000000,
      total_debt: 0,
      status: 1,
      product: [
        {
          product_cd: 'SP0001',
          product_name: 'San pham 1',
          price: 100000,
          quanlity: 3
        },
        {
          product_cd: 'SP0002',
          product_name: 'San pham 2',
          price: 40000,
          quanlity: 3
        },
        {
          product_cd: 'SP0001',
          product_name: 'San pham 1',
          price: 100000,
          quanlity: 3
        },
        {
          product_cd: 'SP0002',
          product_name: 'San pham 2',
          price: 40000,
          quanlity: 3
        },
        {
          product_cd: 'SP0001',
          product_name: 'San pham 1',
          price: 100000,
          quanlity: 3
        },
        {
          product_cd: 'SP0002',
          product_name: 'San pham 2',
          price: 40000,
          quanlity: 3
        }, {
          product_cd: 'SP0001',
          product_name: 'San pham 1',
          price: 100000,
          quanlity: 3
        },
        {
          product_cd: 'SP0002',
          product_name: 'San pham 2',
          price: 40000,
          quanlity: 3
        }, {
          product_cd: 'SP0001',
          product_name: 'San pham 1',
          price: 100000,
          quanlity: 3
        },
        {
          product_cd: 'SP0002',
          product_name: 'San pham 2',
          price: 40000,
          quanlity: 3
        }
        , {
          product_cd: 'SP0001',
          product_name: 'San pham 1',
          price: 100000,
          quanlity: 3
        },
        {
          product_cd: 'SP0002',
          product_name: 'San pham 2',
          price: 40000,
          quanlity: 3
        },
        {
          product_cd: 'SP0001',
          product_name: 'San pham 1',
          price: 100000,
          quanlity: 3
        },
        {
          product_cd: 'SP0002',
          product_name: 'San pham 2',
          price: 40000,
          quanlity: 3
        }, {
          product_cd: 'SP0001',
          product_name: 'San pham 1',
          price: 100000,
          quanlity: 3
        },
        {
          product_cd: 'SP0002',
          product_name: 'San pham 2',
          price: 40000,
          quanlity: 3
        }
      ]
    },
    {
      invoice_cd: 'IV00003',
      customer_cd: 'CU00003',
      total_amount: 400000,
      total_paid: 400000,
      total_debt: 0,
      status: 0,
      product: [
        {
          product_cd: 'SP0001',
          product_name: 'San pham 1',
          price: 100000,
          quanlity: 3
        },
        {
          product_cd: 'SP0002',
          product_name: 'San pham 2',
          price: 40000,
          quanlity: 3
        }
      ]
    }
  ]
  const _renderStatusImport = (text: number, record: InvoiceType, index: number) => {
    return (
      <Tag color={text ? 'green' : 'red'}>{text ? 'Đã hoàn thành' : 'Đã hủy'}</Tag>
    )
  }
  const columns: ColumnsType<InvoiceType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: 20,
      render: (text: any, record: InvoiceType, index: number) => <a>{index + 1}</a>,
    },
    {
      title: 'Mã hóa đơn',
      dataIndex: 'invoice_cd',
      key: 'invoice_cd',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Mã khách hàng',
      dataIndex: 'customer_cd',
      key: 'customer_cd',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Tổng hóa đơn',
      dataIndex: 'total_amount',
      key: 'total_amount',
      align: 'right',
      render: text => <a>{MoneyFormat(text)}</a>,
    },
    {
      title: 'Tổng trả',
      dataIndex: 'total_paid',
      key: 'total_paid',
      align: 'right',
      render: text => <a>{MoneyFormat(text)}</a>,
    },
    {
      title: 'Tổng nợ',
      dataIndex: 'total_debt',
      key: 'total_debt',
      align: 'right',
      render: text => <a>{MoneyFormat(text)}</a>,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: _renderStatusImport,
    },
  ];
  const handleOnRowTable = (record: InvoiceType) => {
    setInvoiceInfoDetail(record)
    setModalDetailInvoice(true)
  }
  const onchangeNameSearch = (e: any) => {
    setInvoiceCd(e.target.value)
    console.log(e.target.value, 'name')
  }
  const gotoCreateInvoice = () => {
    navigate('/invoice/new')
  }
  const _renderHeaderInvoice = () => {
    return (
      <div className='header-category'>
        <div className='title-category'>
          <h4>Hóa đơn</h4>
          <Button className='button' onClick={gotoCreateInvoice}>
            <PlusCircleOutlined />
            Tạo đơn mới
          </Button>
        </div>
        <Input
          className="header-search"
          placeholder="Nhập mã hóa đơn..."
          value={invoiceCd}
          onChange={onchangeNameSearch}
          prefix={<SearchOutlined />}
          style={{ width: '300px' }}
        />
      </div>
    )
  }
  const _renderHistoryImport = () => {
    return (
      <div className='list-category-container'>
        <Table
          rowKey={'table-category'}
          columns={columns}
          dataSource={listImport}
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
      {_renderHeaderInvoice()}
      {_renderHistoryImport()}
      {modalDetailInvoice && invoiceInfoDetail &&
        <ModalInvoiceDetail
          onCancel={() => setModalDetailInvoice(false)}
          onOk={() => { }}
          invoiceInfo={invoiceInfoDetail}
        />}
    </div>
  )
}