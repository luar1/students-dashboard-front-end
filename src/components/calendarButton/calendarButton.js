import React from "react";
import { Button, Row, Col } from "antd";
import styled from "styled-components";
import { CalendarOutlined } from "@ant-design/icons";

const CalendarButton = () => {
  const ButtonStyle = styled.button`
    color: #12284c;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    background-color: #ff5c35;
    border-style: none;
    border-radius: 3px;
    width: 200px;

    &:hover {
      background-color: #f1f1f2;
      color: #ff5c35;
      border: 1px solid #c0c0c0;
    }
  `;

  return (
    <>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <ButtonStyle >
            {/* <Button
            style={{ margin: 10, width: 200 }}
            className="calendar-button"
          > */}
            <CalendarOutlined /> View Calendar
            {/* </Button> */}
          </ButtonStyle>
        </Col>
      </Row>
      <Col span={4}></Col>
    </>
  );
};

export default CalendarButton;
