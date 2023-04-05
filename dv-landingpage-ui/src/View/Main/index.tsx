import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'
import HeaderLayout from '../../components/Header'

export default function Main() {
  return (
    <div>
      <Layout >
        <Header style={{ backgroundColor: '#f5f5f5', position: 'sticky', top: 0, zIndex: 1000, width: '100%', padding: '0px' }} >
          <HeaderLayout></HeaderLayout>
        </Header>
        <Content>
          <Outlet></Outlet>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}
