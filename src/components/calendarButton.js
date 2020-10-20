import React from "react";
import { Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const CalendarButton = () => {
  return (
    <>
      <Button style={{marginLeft: 20}} className="calendar-button">
        <CalendarOutlined /> View Calendar
      </Button>
    </>
  );
};

export default CalendarButton;
