import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Avatar, PageHeader, Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import {
  BellOutlined,
  DashboardOutlined,
  GithubOutlined,
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

import * as ROUTES from '../../constants/routes';
import logo from '../../graphics/logo.png';
import AssignmentSummary from './AssignmentSummary';
import Assignments from './Assignments';
import PrivateRoute from '../routes/PrivateRoute';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const HomePage = ({ match, history }) => {
  const KEYS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState([KEYS[0]]);
  const page = `${history.location.pathname.split('/')[2].charAt(0).toUpperCase()}${history.location.pathname.split('/')[2].slice(1)}`;

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
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
        <Menu theme="dark" defaultSelectedKeys={selectedKey} mode="inline" selectedKeys={selectedKey} onClick={({ key }) => setSelectedKey(key)}>
          <Menu.Item key={KEYS[0]} icon={<DashboardOutlined />}>
            <Link to={`${match.path}${ROUTES.DASHBOARD}`}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key={KEYS[1]} icon={<NotificationOutlined />}>
            News
          </Menu.Item>
          <Menu.Item key={KEYS[2]} icon={<BookOutlined />}>
            <Link to={`${match.path}${ROUTES.ASSIGNMENTS}`}>Assignments</Link>
          </Menu.Item>
          <Menu.Item key={KEYS[3]} icon={<CalendarOutlined />}>
            Calendar
          </Menu.Item>
          <Menu.Item key={KEYS[4]} icon={<UserOutlined />}>
            Mentors
          </Menu.Item>
          <Menu.Item key={KEYS[5]} icon={<TeamOutlined />}>
            Classmates
          </Menu.Item>
          <Menu.Item key={KEYS[6]} icon={<DisconnectOutlined />}>
            CTD
          </Menu.Item>
          <SubMenu key="sub1" icon={<FundProjectionScreenOutlined />} title="Resources">
            <Menu.Item key={KEYS[7]} icon={<SlackOutlined />}>Slack Channel</Menu.Item>
            <Menu.Item key={KEYS[8]} icon={<YoutubeOutlined />}>Treehouse</Menu.Item>
          </SubMenu>
          <Menu.Item key={KEYS[9]} icon={<RocketOutlined />}>
            Students Projects
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ backgroundColor: "white" }}>
        <Row type="flex">
          <Col span={12}>
            <img src={logo} style={{ width: "300px", height: "100px" }} />
          </Col>
          <Col span={12} align="center">
            <BellOutlined style={{ width: "300px", height: "100px" }} />
          </Col>
        </Row>
        <PageHeader className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{page}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
              <PrivateRoute path={`${match.path}${ROUTES.DASHBOARD}`} component={(props) => <AssignmentSummary {...props} menuKey={KEYS[2]} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />} />
              <PrivateRoute path={`${match.path}${ROUTES.ASSIGNMENTS}`} component={Assignments} />
            </Switch>
          </div>
        </Content>
        <Footer>
          <Row type="flex">
            <Col span={12}>
              <div><strong>CODE THE DREAM | WWW.CODETHEDREAM.ORG</strong></div>
            </Col>
            <Col span={12} align="right" justify="center">
              <GithubOutlined />
            </Col>
          </Row>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default HomePage;