import React from 'react';
import { Row, Col, Space } from "antd";


import Progress from "../progress/MainProgress";
import GetHelp from "../getHelp/GetHelp";
import CalendarButton from "../calendarButton/CalendarButton";
import TodoList from "../todoList/TodoList";
import SmallCalendar from "../smallCalendar/SmallCalendar";
import AssignmentSummary from '../assignments/AssignmentSummary';

const Dashboard = ({ history, menuKey, selectedKey, setSelectedKey }) => {
  return (
    <div className="container-fluid">
      <Row gutter={[16, 24]}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={14}
          xl={16}
          xxl={18}
          style={{ border: "1px solid red" }}>
          <Space direction="vertical">
            <Progress />
            <GetHelp />
          </Space>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={10}
          xl={8}
          xxl={6}
          className="site-layout-right">
          <Space direction="vertical">
            {/* <AssignmentSummary menuKey={menuKey} selectedKey={selectedKey} setSelectedKey={setSelectedKey} /> */}
            <CalendarButton />
            <TodoList />
            <SmallCalendar history={history} />
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard;