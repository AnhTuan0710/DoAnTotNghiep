import { notification, Popconfirm, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, FileSearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import api from '../../api';
import { ProductResponse } from '../../models/product';
type Props = {
  listCate: ProductResponse[]
  getListCategory: () => void
  loadingTable: boolean
}

export default function TableListCategory(props: Props) {
  const { listCate, getListCategory, loadingTable } = props
  const navigate = useNavigate()
  const deleteCategory = async (record: ProductResponse) => {
    try {
      await api.category.deleteCategory(record.id)
      notification.success({
        message: 'Thông báo',
        description: 'Xóa danh mục thành công',
      })
      getListCategory()
    } catch (err) {
      notification.error({
        message: 'Thông báo',
        description: 'Xóa danh mục thất bại',
      })
    }
  }

  const handleDetail = (record: ProductResponse) => {
    navigate(`/management/product/${record.id}`, { state: record })
  }

  const renderDetail = (text: any, record: ProductResponse, index: number) => {
    return (
      <FileSearchOutlined onClick={() => handleDetail(record)} />
    )
  }

  const renderStatus = (text: any, record: ProductResponse, index: number) => {
    return (
      <Tag color={text ? 'green' : 'red'}>{text ? 'Đang kinh doanh' : 'Ngừng kinh doanh'}</Tag>
    )
  }

  const renderRemove = (text: any, record: ProductResponse, index: number) => {
    return (
      <Popconfirm
        placement="top"
        title={'Bạn có chắn chắn muốn xóa danh mục này không'}
        description={''}
        onConfirm={() => deleteCategory(record)}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined color='red' />
      </Popconfirm>
    )
  }

  const renderCategory = (text: any, record: ProductResponse, index: number) => {
    return (
      <p>{record.category.name}</p>
    )
  }
  const columns: ColumnsType<ProductResponse> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text, record, index) => <a>{index + 1}</a>,
    },
    {
      title: 'Mã sản phẩm',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Đơn vị',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Khối lượng',
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: 'Kích thước',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Loại',
      dataIndex: 'size',
      key: 'size',
      render: renderCategory
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: renderStatus
    },
    {
      title: 'Chi tiết',
      dataIndex: 'detail',
      key: 'detail',
      align: 'center',
      render: renderDetail
    },
    {
      title: 'Xóa',
      dataIndex: 'remove',
      key: 'remove',
      align: 'center',
      render: renderRemove
    },
  ];
  return (
    <Table
      loading={loadingTable}
      columns={columns}
      dataSource={listCate}
    />
  )
}