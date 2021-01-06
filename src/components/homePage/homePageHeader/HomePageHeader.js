import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Menu, Dropdown, message, notification } from "antd";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";
import { SettingOutlined, BellOutlined, DownOutlined } from "@ant-design/icons";
import { HeaderPage, Logo, TopNav } from "../styles/styles";
import logo from "../../../graphics/logo.png";

const { Header } = Layout;

const HomePageHeader = () => {
  //Fetching data from airtable
  const getNotificationData = async () => {
    const response = await fetch(
      "https://api.airtable.com/v0/appm5NPkqO7P8ePUK/Notifications?api_key=keyclOytaXo7NHQ8M"
    );
    const notificationData = await response.json();
    return notificationData;
  };

  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    getNotificationData().then((data) => setNotifications(data));
  }, []);

  const openNotification = () => {
    notification.open({
      message: "notification title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">View all</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderPage>
      <Header
        className="site-layout-background"
        style={{
          padding: "0",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Row type="flex">
          <Col span={12}>
            <Logo>
              <img
                src={logo}
                className="ctd-logo"
                alt="Code the Dream Logo"
              ></img>
            </Logo>
          </Col>
          <Col span={12} align="right">
            <TopNav className="top-nav">

              {/* notification  */}
              <a onClick={openNotification}>
                {" "}
                <BellOutlined />
              </a>
              <Dropdown overlay={menu} trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                <DownOutlined />
                </a>
              </Dropdown>

              <SettingOutlined />
              <UserCircle style={{ width: "25px" }} />
            </TopNav>
          </Col>
        </Row>
      </Header>
    </HeaderPage>
  );
};

export default HomePageHeader;
