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

  const LIST_BRANCH = ['KAPUSI', 'ASAKI', 'HAZDEN', 'DEWAIT', 'BOSCH', 'HITACHI']
  return (
    <>
      <Row className='footer-container'>
        <Col xs={24} md={12} lg={7}>
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
        <Col xs={24} md={12} lg={6}>
          <h5>BẢN ĐỒ</h5>
          <hr />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.238549212317!2d105.7713691750003!3d21.023138987972093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454aef9e4ee2f%3A0x9e0873fb6f91fad6!2zMzIyIE3hu7kgxJDDrG5oIDEsIE3hu7kgxJDDrG5oLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683113415050!5m2!1svi!2s"
            width="100%"
            height="250"
            style={{border:'0'}}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </Col>
      </Row>
      <div className='footer-copyright'>
        @Copyright by Anh Tuan (KIT2023)
      </div>
    </>
  )
}
