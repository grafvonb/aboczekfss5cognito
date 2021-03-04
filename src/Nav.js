import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {
    FileProtectOutlined,
    HomeOutlined,
    ProfileOutlined
} from "@ant-design/icons";

export const Nav = ({current}) => (
    <div>
        <Menu selectedKeys={[current]} mode="horizontal">
            <Menu.Item key='home'>
                <Link to={`/`}>
                    <HomeOutlined/>Home
                </Link>
            </Menu.Item>
            <Menu.Item key='profile'>
                <Link to='/profile'>
                    <ProfileOutlined/>Profile
                </Link>
            </Menu.Item>
            <Menu.Item key='protected'>
                <Link to='/protected'>
                    <FileProtectOutlined/>Protected
                </Link>
            </Menu.Item>
        </Menu>
    </div>
)