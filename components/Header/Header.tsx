import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const Header = () => {

    return (
        <>
            <div className="justify-center items-center text-center">
                <Menu mode="horizontal">
                    <Menu.Item icon={<MailOutlined />}>
                        <Link to={"/"}> Home</Link>
                    </Menu.Item>
                    <SubMenu key="SubMenu" icon={<SettingOutlined />} title="All page">
                        <Menu.ItemGroup title="All Page ">
                            <Menu.Item key="setting:1">  <Link to={"/connectmetamask"}>Step 1 : Connect Metamask</Link></Menu.Item>
                            <Menu.Item key="setting:2">  <Link to={"/switchaccount"}>Step 2 : Switch Account</Link></Menu.Item>
                            <Menu.Item key="setting:2">  <Link to={"/switchnetwork"}>Step 3 : Switch Network</Link></Menu.Item>
                            <Menu.Item key="setting:2">  <Link to={"/"}>Step 4 : Connect Metamask on Mobilephone</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </div>


        </>
    )
}

export default Header