import React, { useState, useEffect } from "react";
import { Card, Row, Col, Space, Typography, Switch, Button} from "antd";

const NotificationSettings = () => {
  //Fetching data from airtable
  const getNotificationData = async () => {
    const response = await fetch(
      process.env.REACT_APP_NOTIFICATIONS
      //"https://api.airtable.com/v0/appm5NPkqO7P8ePUK/Notifications?api_key=keyclOytaXo7NHQ8M"
    );
    const notificationData = await response.json();
    return notificationData;
  };

  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    getNotificationData().then((data) => setNotifications(data));
  }, []);

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <>
      <Space direction="vertical">
        <Card type="inner">
          <Typography.Title level={4} className="left">
            Notification Settings
          </Typography.Title>
          <br></br>
          <p>
            <Switch defaultChecked onChange={onChange} /> Enable all
            notifications.
          </p>
          <p>
            {" "}
            You are currently receiving notifications. To disable all the
            notifications, use the toggle above.
          </p>
          <br></br>
          <h6>Course Activity</h6>
          <br></br>
          <div>
            {notifications
              ? notifications.records.map((notification) => {
                  return (
                    <Card>
                    <Row gutter={[16, 16]}>
                      <Col span={12}><strong>{notification.fields.Title}</strong></Col>

                      <Col span={12} style={{ paddingLeft: 210 }}>
                        <Switch defaultChecked onChange={onChange} />
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
export default NotificationSettings;

