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
                    <Menu.Item key="app" icon={<MailOutlined />}>
                        <Link to={"/"}> Home</Link>
                    </Menu.Item>
                    <SubMenu key="SubMenu" icon={<SettingOutlined />} title="All page">
                        <Menu.ItemGroup  key="undefined" title="Item 1">
                            <Menu.Item >  <Link to={"/connectmetamask"}>Step 1 : Connect Metamask</Link></Menu.Item>
                            <Menu.Item >  <Link to={"/switchaccount"}>Step 2 : Switch Account</Link></Menu.Item>
                            <Menu.Item >  <Link to={"/switchnetwork"}>Step 3 : Switch Network</Link></Menu.Item>
                            <Menu.Item >  <Link to={"/"}>Step 4 : Connect Metamask on Mobilephone</Link></Menu.Item>
                            <Menu.Item >  <Link to={"/addtoken"}>Step 5 : Addtoken on Metamask</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </div>


        </>
    )
}

export default Header