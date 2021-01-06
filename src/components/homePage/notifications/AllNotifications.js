import React, { useState, useEffect } from "react";
import { Card, Row, Col, Space, Typography } from "antd";
import { NotificationOutlined } from "@ant-design/icons";

const AllNotifications = () => {
  //Fetching data from airtable
  const getNotificationData = async () => {
    const response = await fetch(
      process.env.REACT_APP_NOTIFICATIONS
      //   "https://api.airtable.com/v0/appm5NPkqO7P8ePUK/Notifications?api_key=keyclOytaXo7NHQ8M"
    );
    const notificationData = await response.json();
    return notificationData;
  };

  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    getNotificationData().then((data) => setNotifications(data));
  }, []);

  return (
    <>
      <Space direction="vertical">
        <Card type="inner">
          <Typography.Title level={4} className="left">
            Notifications
          </Typography.Title>
          <br></br>
          <br></br>
          <div>
            {notifications
              ? notifications.records.map((notification) => {
                  return (
                    <Card>
                      <Row gutter={[16, 16]}>
                        <Col span={12}>
                          <strong>{notification.fields.Title}</strong>
                          <br></br> {notification.fields.Description}
                        </Col>

                        <Col span={12} style={{ paddingLeft: 210 }}>
                          <NotificationOutlined />
                        </Col>
                      </Row>
                    </Card>
                  );
                })
              : null}
          </div>
        </Card>
      </Space>
    </>
  );
};
export default AllNotifications;
