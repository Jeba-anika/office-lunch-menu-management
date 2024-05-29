import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;



const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `nav ${index + 1}`,
    }),
);

const DashboardSidebar = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Sider
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                left: 0,
                top: 0,
                bottom: 0,
                background: colorBgContainer
            }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical" />
            <Menu className="roboto-condensed-lmm" mode="inline" defaultSelectedKeys={['1']} items={items} />
        </Sider>
    );
};

export default DashboardSidebar;