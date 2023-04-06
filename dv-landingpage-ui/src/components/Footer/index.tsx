import { Col, Row } from 'antd'
import { ReactNode } from 'react'
import { HomeFilled, PhoneFilled, MailFilled, AntDesignOutlined } from '@ant-design/icons'
import './footer.scss'
export default function FooterLayout() {
  const _renderItemInfo = (icon: ReactNode, title: string) => {
    return (
      <div className='info-item'>
        <span>{icon}</span>
        <p>{title}</p>
      </div>
    )
  }

  const LIST_BRANCH = ['KAPUSI', 'ASAKI', 'HAZDEN', 'DEWAIT', 'BOSCH','HITACHI']
  return (
    <>
      <Row className='footer-container'>
        <Col xs={0} md={0} lg={3}></Col>
        <Col xs={24} md={12} lg={8}>
          <h5>CỬA HÀNG KIM KHÍ ĐỨC VIỆT</h5>
          <hr />
          {_renderItemInfo(<HomeFilled />, 'Địa chỉ: Chiều Đông, Triều Khúc, Văn Giang, Hưng Yên')}
          {_renderItemInfo(<MailFilled />, 'Email: ninhvantuan092000@gmail.com')}
          {_renderItemInfo(<PhoneFilled />, 'Số điện thoại: 0857847685')}
        </Col>
        <Col xs={24} md={12} lg={6}>
          <h5>HÃNG SẢN PHẨM</h5>
          <hr />
          <Row>
            {LIST_BRANCH.map((item, index) => {
              return <Col xs={12} key={index}><AntDesignOutlined style={{ margin: '5px' }} />{item}</Col>
            })}
          </Row>
        </Col>
        <Col xs={0} md={0} lg={3}></Col>
      </Row>
      <div className='footer-copyright'>
        @Copyright by Anh Tuan (KIT2023)
      </div>
    </>
  )
}
