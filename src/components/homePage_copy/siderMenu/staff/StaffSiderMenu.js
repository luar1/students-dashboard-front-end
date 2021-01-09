import React, { useContext } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
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

import * as ROUTES from "../../../../constants/routes";
import UserContext from '../../../contexts/UserContext';

const { SubMenu } = Menu;

const StaffSiderMenu = ({ match, keys, setSelectedKey, selectedKey }) => {
  const [authToken] = useContext(UserContext);

  console.log(keys)
  return (
    <Menu
      theme="dark"
      style={{ backgroundColor: "#12284C" }}
      defaultSelectedKeys={selectedKey}
      mode="inline"
      selectedKeys={selectedKey}
      onClick={({ key }) => setSelectedKey(key)}
    >
      {
        authToken ?
          <>
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
          </> : null
      }
    </Menu>
  )
}

export default StaffSiderMenu;