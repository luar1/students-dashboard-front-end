
import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";
import { PageHeader, Breadcrumb, Layout, Menu, Row, Col, Avatar } from "antd";

import {
  SettingOutlined,
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
  RocketOutlined,
} from "@ant-design/icons";

import "./HomePage.css";
import logo from "../../graphics/logo.png";
import ctd from "../landingPage/graphics/ctd.png";
import treehouse from "../landingPage/graphics/treehouse.png";
import * as ROUTES from "../../constants/routes";
import Dashboard from './dashboard/Dashboard';
import AssignmentSummary from './assignments/AssignmentSummary';
import Assignments from './assignments/Assignments';
import PrivateRoute from '../routes/PrivateRoute';
import Progress from "./progress/MainProgress";
import GetHelp from "./getHelp/GetHelp";
import TodoList from "./todoList/TodoList";
import HomeButtons from "./homeButtons/HomeButtons";
import { HeaderPage, Logo, TopNav, FooterBottom, Copyright, Icon, FooterLinks } from './styles/styles';

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

  useEffect(() => {
    switch (page) {
      case 'Dashboard':
        return setSelectedKey(KEYS[0]);
      case 'News':
        return setSelectedKey(KEYS[1]);
      case 'Assignments':
        return setSelectedKey(KEYS[2]);
      case 'Calendar':
        return setSelectedKey(KEYS[3]);
      case 'Mentors':
        return setSelectedKey(KEYS[4]);
      case 'Classmates':
        return setSelectedKey(KEYS[5]);
      case 'CTD':
        return setSelectedKey(KEYS[6]);
      case 'Slack_Channel':
        return setSelectedKey(KEYS[7]);
      case 'Treehouse':
        return setSelectedKey(KEYS[8]);
      case 'Projects':
        return setSelectedKey(KEYS[9]);
      default:
        return new Error();
    }
  }, [])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        breakpoint="md"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
      >
        <Row type="flex">
          <Col span={24} align="center">
            <Avatar
              size={64}
              icon={<UserOutlined />}
              style={{ margin: "10px" }}
            />
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
            <Link to={`${match.path}${ROUTES.CALENDAR}`}>Calendar</Link>
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
      <div className="container-fluid">
        <Layout className="site-layout">
          <HeaderPage>
            <Header
              className="site-layout-background"
              style={{
                padding: "0",
                backgroundColor: "white",
                width: "100%",
              }}>
              <Row type="flex">
                <Col span={12}>
                  <Logo>
                    <img
                      src={logo}
                      className="ctd-logo"
                      alt="Code the Dream Logo"></img>
                  </Logo>
                </Col>
                <Col span={12} align="right">
                  <TopNav className="top-nav">
                    <BellOutlined />
                    <SettingOutlined />
                    <UserCircle style={{ width: "25px" }} />
                  </TopNav>
                </Col>
              </Row>
            </Header>
          </HeaderPage>
          <PageHeader className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{page === 'Dashboard' ? 'Home' : <Link to={`${match.path}${ROUTES.DASHBOARD}`} onClick={() => setSelectedKey(KEYS[0])}>Home</Link>}</Breadcrumb.Item>
              <Breadcrumb.Item>{page === 'Dashboard' ? null : page}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <PrivateRoute path={`${match.path}${ROUTES.DASHBOARD}`} component={(props) => <Dashboard {...props} menuKey={KEYS[2]} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />} />
                <PrivateRoute path={`${match.path}${ROUTES.ASSIGNMENTS}`} component={Assignments} />
              </Switch>
            </div>
          </Content>
          <Footer>
            <FooterBottom>
              <Copyright>
                Copyright © Code the Dream · All Rights Reserved
                            </Copyright>
              <Icon>
                <FooterLinks
                  href="https://www.codethedream.org/"
                  target="_blank">
                  <img src={ctd} alt="Code The Cream"></img>
                </FooterLinks>
                <FooterLinks
                  href="https://teamtreehouse.com/home"
                  target="_blank">
                  <img src={treehouse} alt="Team Treehouse"></img>
                </FooterLinks>
                <FooterLinks
                  href="https://app.slack.com/client/T07EHJ738/learning-slack"
                  target="_blank">
                  <SlackOutlined />
                </FooterLinks>
                <FooterLinks
                  href="https://github.com/Code-the-Dream-School?type=source"
                  target="_blank">
                  <GithubOutlined />
                </FooterLinks>
              </Icon>
            </FooterBottom>
          </Footer>
        </Layout>
      </div>
    </Layout>
  );
};

export default HomePage;
