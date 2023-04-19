import { Col, Modal, Row, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { ProductInvoice } from "../../../dataType/invoice";
import { InvoiceType } from "../../../dataType/invoice";
import { MoneyFormat } from "../../../Ultils/MoneyFormat";
import './modal-invoice-detail.scss'
type Props = {
  onOk: () => void,
  onCancel: () => void
  invoiceInfo: InvoiceType
}
export default function ModalInvoiceDetail(props: Props) {
  const { onOk, onCancel, invoiceInfo } = props
  const _renderInvoiceInfoItem = (title: string, value: string) => {
    return (
      <Col xs={24} md={12}>
        <div className="invoice-detail-info-item">
          <p className="title-item">{title}: </p>
          <p className="value-item">{value}</p>
        </div>
      </Col>
    )
  }
  const _renderTotalMoney = (text: number, record: ProductInvoice, index: number) => {
    return (
      <>{MoneyFormat(record.price * record.quanlity)}</>
    )
  }
  const columns: ColumnsType<ProductInvoice> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: 20,
      render: (text: any, record: ProductInvoice, index: number) => <p>{index + 1}</p>,
    },
    {
      title: 'Mã sản phẩm',
      dataIndex: 'product_cd',
      key: 'product_cd',
      render: text => <p>{text}</p>,
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'product_name',
      key: 'product_name',
      render: text => <p>{text}</p>,
    },
    {
      title: 'Giá bán',
      dataIndex: 'price',
      key: 'price',
      align: 'right',
      render: text => <p>{MoneyFormat(text)}</p>,
    },
    {
      title: 'Số lượng',
      dataIndex: 'quanlity',
      key: 'quanlity',
      align: 'right',
      render: text => <p>{text}</p>,
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total_debt',
      key: 'total_debt',
      align: 'right',
      render: _renderTotalMoney,
    },
  ];
  const _renderInvoiceInfoItemNumber = (title: string, value: number) => {
    return (
      <Col xs={24} md={12}>
        <div className="import-detail-info-item">
          <p className="title-item">{title}: </p>
          <p className="value-item">{MoneyFormat(value)}</p>
        </div>
      </Col>
    )
  }
  const _renderStatusImport = () => {
    return (
      <Col xs={24} md={12}>
        <div className="import-detail-info-item">
          <p className="title-item">Trạng thái: </p>
          <Tag color={invoiceInfo.status ? 'green' : 'red'}>{invoiceInfo.status ? 'Đã hoàn thành' : 'Đã hủy'}</Tag>
        </div>
      </Col>
    )
  }
  const handleOnRowTable = (record: ProductInvoice) => {

  }
  const _renderTableProductImport = () => {
    return (
      <Table
        rowKey={'table-category'}
        columns={columns}
        dataSource={invoiceInfo.product}
        loading={false}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => { handleOnRowTable(record) },
          };
        }}
      />
    )
  }
  return (
    <Modal
      visible={true}
      onOk={onOk}
      onCancel={onCancel}
      title='Chi tiết hóa đơn'
      width={800}
    >
      <Row gutter={[16, 8]}>
        {_renderInvoiceInfoItem('Mã phiếu nhập', invoiceInfo.invoice_cd)}
        {_renderInvoiceInfoItemNumber('Tổng nhập', invoiceInfo.total_amount)}
        {_renderInvoiceInfoItem('Mã nhà cung cấp', invoiceInfo.customer_cd)}
        {_renderInvoiceInfoItemNumber('Tổng trả', invoiceInfo.total_paid)}
        {_renderStatusImport()}
        {_renderInvoiceInfoItemNumber('Còn nợ', invoiceInfo.total_debt)}
      </Row>
      <div className="mt-3">
        {_renderTableProductImport()}
      </div>
    </Modal>
  )
}
