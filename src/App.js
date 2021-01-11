import React from 'react';
import './App.css';
import { Layout, Button,Menu  } from 'antd';
import {NavLink} from 'react-router-dom'
import Nav from './components/nav/silider'
const { Header, Footer, Content } = Layout;

class App extends React.Component {
  render() {
    return <Layout>
      <Header className='header'>
        <span>CRM管理</span>
        <div>
          <NavLink to='/org'>组织结构</NavLink>
          <NavLink to='/custorm'>客户管理</NavLink>
        </div>
        <span>您好，xxx</span>
        <a href=''>安全退出</a>
      </Header>
      <Layout className='content'>
        <Nav></Nav>
        <Content>Content</Content>
      </Layout>
      <Footer className='footer'>Footer</Footer>
    </Layout>

  }
}

export default App;
