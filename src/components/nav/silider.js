import React from 'react'
import { Layout, Menu, Button } from 'antd';
import {NavLink} from 'react-router-dom'
const { Sider } = Layout;
const { SubMenu } = Menu;
class Nav extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return <Sider style={{ width: 256 }}>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
            >
            <SubMenu key="sub1" title="员工管理">
                <NavLink to='/userList'><Menu.Item key="1">员工列表</Menu.Item></NavLink>
                <Menu.Item key="6">新增员工</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="部门管理">
                <Menu.Item key="9">部门列表</Menu.Item>
                <Menu.Item key="10">新增部门</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="职务管理">
                <Menu.Item key="9">职务列表</Menu.Item>
                <Menu.Item key="10">新增职务</Menu.Item>
            </SubMenu>
            </Menu>
        </Sider>
    }
}
export default Nav