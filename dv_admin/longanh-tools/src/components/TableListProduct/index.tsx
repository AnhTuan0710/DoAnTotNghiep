import { DeleteOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { ProductType } from '../../dataType/product';
type Props = {
  loadingTable: boolean;
  listProduct: ProductType[],
  onrowTable?: (record: ProductType) => void
}
export default function TableListProduct(props: Props) {
  const { loadingTable, listProduct, onrowTable } = props
  const handleDeleteProduct = (e: any, record: ProductType) => {
    e.stopPropagation()
  }
  const _renderButtonDelete = (text: any, record: ProductType, index: number) => {
    return (
      <Popconfirm
        title="Bạn có chắc chắn xóa sản phẩm?"
        onConfirm={(e) => handleDeleteProduct(e, record)}
        onCancel={(e: any) => e.stopPropagation()}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined onClick={(e) => e.stopPropagation()} />
      </Popconfirm>
    )
  }
  const columns: ColumnsType<ProductType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text: any, record: ProductType, index: number) => <a>{index + 1}</a>,
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Mã sản phẩm',
      dataIndex: 'product_cd',
      key: 'product_cd',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'product_name',
      key: 'product_name',
    },
    {
      title: 'Giá bán',
      dataIndex: 'price',
      key: 'price',
      render: (text: ProductType[]) => <div>{text.length}</div>,
    },
    {
      title: 'Giá nhập',
      dataIndex: 'price_import',
      key: 'price_import',
      render: (text: ProductType[]) => <div>{text.length}</div>,
    },
    {
      title: 'Đơn vị',
      dataIndex: 'unit',
      key: 'unit',
      render: (text: ProductType[]) => <div>{text.length}</div>,
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      key: 'amount',
      render: (text: ProductType[]) => <div>{text.length}</div>,
    },
    {
      title: 'Mã danh mục',
      dataIndex: 'category_cd',
      key: 'category_cd',
      render: (text: ProductType[]) => <div>{text.length}</div>,
    },
    {
      title: 'Xóa',
      dataIndex: 'delete',
      key: 'delete',
      render: _renderButtonDelete,
    },

  ];
  const handleOnRowTable = (record: ProductType) => {
    onrowTable && onrowTable(record)
  }
  return (
    <Table
      rowKey={'table-product'}
      columns={columns}
      dataSource={listProduct}
      loading={loadingTable}
      scroll={{ x: 900 }}
      onRow={(record, rowIndex) => {
        return {
          onClick: event => { handleOnRowTable(record) },
        };
      }}
    />
  )
}
