/** @format */

import React, { useEffect } from "react";
import { Row, Col, Space } from "antd";

import Progress from "./progress/MainProgress";
import GetHelp from "./getHelp/GetHelp";
import SignUpMentor from "./signUpMentor/signUpMentor";
import TodoList from "./todoList/TodoList";
import SmallCalendar from "./smallCalendar/SmallCalendar";
import AssignmentSummary from "./assignmentSummary/AssignmentSummary";
import EventsButton from "./eventsButton/eventsButton";
import MeetingButton from "./meetingButton/meetingButton";
const Dashboard = ({ history, menuKey, selectedKey, setSelectedKey }) => {
    const { assignmentsKey, calendarKey, dashboardKey } = menuKey;

    useEffect(() => {
        setSelectedKey(dashboardKey);
    }, []);

    return (
        <div className="container-fluid">
            <Row gutter={[16, 24]}>
                <Col xs={24} sm={24} md={24} lg={14} xl={16} xxl={18}>
                    <Space direction="vertical">
                        <AssignmentSummary
                            menuKey={assignmentsKey}
                            selectedKey={selectedKey}
                            setSelectedKey={setSelectedKey}
                        />
                        <Progress />
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <GetHelp />
                            </Col>
                            <Col span={12}>
                                <SignUpMentor />
                            </Col>
                        </Row>
                    </Space>
                </Col>
                <Col xs={24} sm={24} md={24} lg={10} xl={8} xxl={6}>
                    <Space direction="vertical">
                        <EventsButton />
                        <MeetingButton />
                        <TodoList />
                        <SmallCalendar
                            history={history}
                            menuKey={calendarKey}
                            selectedKey={selectedKey}
                            setSelectedKey={setSelectedKey}
                        />
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
