import React, { useState } from "react";
import { Menu, Row, Col, Avatar, Layout } from "antd";
import { Link } from "react-router-dom";

import {
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
  RocketOutlined,
} from "@ant-design/icons";

import * as ROUTES from "../../../constants/routes";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderMenu = ({ match, keys, setSelectedKey, selectedKey }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider
      style={{ backgroundColor: "#12284C" }}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      breakpoint="md"
      collapsedWidth="0"
    >
      <Row type="flex">
        <Col span={24} align="center">
          <div className="username" style={{ paddingTop: "30px" }}>
            <Col span={24} align="center">
              <Avatar
                size={{
                  xs: 32,
                  sm: 40,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 80,
                }}
                icon={<UserOutlined />}
              />
            </Col>
          </div>
        </Col>
        <Col span={24} align="center">
          <div className="username" style={{ paddingBottom: "30px" }}>
            Staff Name
          </div>
        </Col>
      </Row>
      <Menu
        theme="dark"
        style={{ backgroundColor: "#12284C" }}
        defaultSelectedKeys={selectedKey}
        mode="inline"
        selectedKeys={selectedKey}
        onClick={({ key }) => setSelectedKey(key)}
      >
        <Menu.Item key={keys[0]} icon={<DashboardOutlined />}>
          <Link to={`${match.path}${ROUTES.STAFFDASHBOARD}`}>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key={keys[1]} icon={<NotificationOutlined />}>
          Announcements
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<BookOutlined />}
          title="Classes"
        >
          <Menu.Item key={keys[2]} icon={<UserOutlined />}>
            Courses
          </Menu.Item>
          <Menu.Item key={keys[3]} icon={<CalendarOutlined />}>
            Assignments
          </Menu.Item>
        </SubMenu>
        <Menu.Item key={keys[4]} icon={<TeamOutlined />}>
          Students
        </Menu.Item>
        <Menu.Item key={keys[5]} icon={<UserOutlined />}>
          Mentors
        </Menu.Item>
        <Menu.Item key={keys[6]} icon={<CalendarOutlined />}>
          <Link to={`${match.path}${ROUTES.CALENDAR}`}>Calendar</Link>
        </Menu.Item>
        <Menu.Item key={keys[7]} icon={<DisconnectOutlined />}>
          CTD
        </Menu.Item>
        <SubMenu
          key="sub2"
          icon={<FundProjectionScreenOutlined />}
          title="Resources"
        >
          <Menu.Item key={keys[8]} icon={<SlackOutlined />}>
            Slack Channel
          </Menu.Item>
          <Menu.Item key={keys[9]} icon={<YoutubeOutlined />}>
            Treehouse
          </Menu.Item>
        </SubMenu>
        <Menu.Item key={keys[10]} icon={<RocketOutlined />}>
          Students Projects
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
