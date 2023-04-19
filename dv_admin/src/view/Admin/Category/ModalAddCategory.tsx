import { Input, Modal } from 'antd'
import React, { useState } from 'react'
type Props = {
  handleOk: () => void;
  handleCancel: () => void;
  confirmLoading: boolean
}
export default function ModalAddCategory(props: Props) {
  const { handleOk, handleCancel, confirmLoading } = props
  const [categoryName, setCategoryName] = useState('')
  const onchangeName = (e: any) => {
    setCategoryName(e.target.value)
  }
  return (
    <Modal
      title="Thêm danh mục mới"
      open={true}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <p>Nhập tên danh mục:</p>
      <Input value={categoryName} onChange={onchangeName}/>
    </Modal>
  )
}
