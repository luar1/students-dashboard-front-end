import React, { useState } from 'react';
import { Avatar, Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import {
  DesktopOutlined,
  DashboardOutlined,
  NotificationOutlined,
  BookOutlined,
  CalendarOutlined,
  TeamOutlined,
  UserOutlined,
  DisconnectOutlined,
  FundProjectionScreenOutlined,
  SlackOutlined,
  YoutubeOutlined,
  RocketOutlined

} from '@ant-design/icons';

import './Sidebar.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SiderDemo = () => {
  const [state, setState] = useState({ collapsed: false });
  const { collapsed } = state;

  const onCollapse = collapsed => {
    console.log(collapsed);
    setState({ collapsed });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Row type="flex">
          <Col span={24} align="center">
            <Avatar size={64} icon={<UserOutlined />} style={{ margin: "10px" }} />
          </Col>
          <Col span={24} align="center">
            <div className="username">Username</div>
          </Col>
        </Row>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<NotificationOutlined />}>
            News
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined />}>
            Assignments
          </Menu.Item>
          <Menu.Item key="4" icon={<CalendarOutlined />}>
            Calendar
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            Mentors
          </Menu.Item>
          <Menu.Item key="6" icon={<TeamOutlined />}>
            Classmates
          </Menu.Item>
          <Menu.Item key="7" icon={<DisconnectOutlined />}>
            CTD
          </Menu.Item>
          <SubMenu key="sub1" icon={<FundProjectionScreenOutlined />} title="Resources">
            <Menu.Item key="8" icon={<SlackOutlined />}>Slack Channel</Menu.Item>
            <Menu.Item key="9" icon={<YoutubeOutlined />}>Treehouse</Menu.Item>
          </SubMenu>
          <Menu.Item key="10" icon={<RocketOutlined />}>
            Students Projects
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default SiderDemo;