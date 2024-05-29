import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
const { Header, Content, Footer, Sider } = Layout;





const DashboardSidebar = () => {
    const { auth } = useAuth()
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    let items = []
    if (auth?.data?.role === 'admin') {
        items = [{ label: 'Lunch menu', href: '/admin/menu', icon: UploadOutlined }, { label: 'Employee choices', href: '/admin/view-choice', icon: UserOutlined }].map(
            (item, index) => ({
                key: String(index + 1),
                icon: React.createElement(item.icon),
                label: <Link to={item.href}>{item.label}</Link>,
            }),
        );
    } else {
        items = [{ label: 'Lunch menu', href: '/admin/menu', icon: UserOutlined }].map(
            (item, index) => ({
                key: String(index + 1),
                icon: React.createElement(item.icon),
                label: <Link to={item.href}>{item.label}</Link>,
            }),
        );
    }

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