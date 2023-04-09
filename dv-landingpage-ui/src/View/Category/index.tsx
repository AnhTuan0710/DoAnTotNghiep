import { Col, Row } from 'antd'
import { BANNER_MAY1 } from '../../assets'
import './category.scss'

export default function Category() {
  const _renderContent= () => {
    return (
      <Row>
        <Col xs={24}></Col>
      </Row>
    )
  }
  return (
    <>
      <div className='category-container'>
        <div className='header-category'>
          <img src={BANNER_MAY1} className='image-banner'></img>
          <div className='center'>
            <h4>SẢN PHẨM</h4>
          </div>
        </div>
        <div className='content'></div>
      </div>
    </>
  )
}
