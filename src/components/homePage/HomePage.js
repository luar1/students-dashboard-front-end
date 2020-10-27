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
  const [state, setState] = useState({ collapsed: false });
  const { collapsed } = state;

  const onCollapse = collapsed => {
    setState({ collapsed });
  };

  console.log(history)

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
            <Link to={`${match.path}${ROUTES.DASHBOARD}`}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<NotificationOutlined />}>
            News
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined />}>
            <Link to={`${match.path}${ROUTES.ASSIGNMENTS}`}>Assignments</Link>
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
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <AssignmentSummary />
            <Switch>
              {/* <PrivateRoute path={`${match.path}${ROUTES.DASHBOARD}`} component={AssignmentSummary} /> */}
              {/* <PrivateRoute path={`${match.path}${ROUTES.ASSIGNMENTS}`} component={Assignments} /> */}
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