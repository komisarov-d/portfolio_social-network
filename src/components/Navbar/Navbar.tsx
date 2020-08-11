import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Button, Menu} from 'antd';
import s from './Navbar.module.css'
import {HomeOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, TeamOutlined} from '@ant-design/icons';

const Navbar = () => {
    const [collapsed, toggleCollapsed] = useState(true)
    const activateMenu = () => {toggleCollapsed(true)}
    const deactivateMenu = () => {toggleCollapsed(false)}
    return (
        <div className={s.navbar} style={{width: 256}}>
            <Button type="primary" onClick={collapsed ? deactivateMenu : activateMenu} style={{marginBottom: 16}}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                <Menu.Item key="1" icon={<HomeOutlined/>}>
                    <NavLink to='/profile' >Profile</NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<MailOutlined/>}>
                    <NavLink to='/dialogs' >Dialog</NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<TeamOutlined/>}>
                    <NavLink to='/users' >Users</NavLink>
                </Menu.Item>

            </Menu>
        </div>
    );

}

export default Navbar

