<<<<<<< HEAD
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
=======
import React, { useEffect, useContext } from "react";
import { Row, Col, Space } from "antd";

import UserContext from "../../contexts/UserContext";
import Progress from "./studentDashboard/progress/MainProgress";
import GetHelp from "./studentDashboard/getHelp/GetHelp";
import TodoList from "./studentDashboard/todoList/TodoList";
import SmallCalendar from "./studentDashboard/smallCalendar/SmallCalendar";
import AssignmentSummary from "./studentDashboard/assignmentSummary/AssignmentSummary";
import HomeButtons from "./studentDashboard/homeButtons/HomeButtons";
import StaffTopLinks from "./staffDashboard/staffTopLinks/StaffTopLinks";
import CurrentCourses from "./staffDashboard/currentCourses/CurrentCourses";
import Announcements from "./staffDashboard/announcements/Announcements";

>>>>>>> 5b50a2656b61e5979f0c3e904bbfa887efc68bdc
const Dashboard = ({ history, menuKey, selectedKey, setSelectedKey }) => {
    const [authToken, setAuthToken, userInfo, setUserInfo] = useContext(UserContext);
    const { assignmentsKey, calendarKey, dashboardKey } = menuKey;

    useEffect(() => {
        setSelectedKey(dashboardKey);
    }, []);

    const displayDashboardContent = () => {
        if (userInfo.role === 'student') {
            return (
                <>
                    <AssignmentSummary
                        menuKey={assignmentsKey}
                        selectedKey={selectedKey}
                        setSelectedKey={setSelectedKey}
                    />
                    <Progress />
                    <GetHelp />
                </>
            )
        } else if (userInfo.role === 'staff') {
            return (
                <>
                    <StaffTopLinks />
                    <CurrentCourses />
                </>
            )
        } else {
            // Render dashboard content for more roles like "mentor", "admin"
        }
    }

    const displayRightSideContent = () => {
        if (userInfo.role === 'student') {
            return (
                <>
                    <HomeButtons />
                    <TodoList />
                    <SmallCalendar
                        history={history}
                        menuKey={calendarKey}
                        selectedKey={selectedKey}
                        setSelectedKey={setSelectedKey}
                    />
                </>
            )
        } else if (userInfo.role === 'staff') {
            return (
                <>
                    <Announcements />
                    <HomeButtons />
                    <SmallCalendar
                        history={history}
                        menuKey={calendarKey}
                        selectedKey={selectedKey}
                        setSelectedKey={setSelectedKey}
                    />
                </>
            )
        } else {
            // Render dashboard content for more roles like "mentor", "admin"
        }
    }

    return (
        <div className="container-fluid">
            <Row gutter={[16, 24]}>
                <Col xs={24} sm={24} md={24} lg={14} xl={16} xxl={18}>
                    <Space direction="vertical">
<<<<<<< HEAD
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
=======
                        {
                            displayDashboardContent()
                        }
>>>>>>> 5b50a2656b61e5979f0c3e904bbfa887efc68bdc
                    </Space>
                </Col>
                <Col xs={24} sm={24} md={24} lg={10} xl={8} xxl={6}>
                    <Space direction="vertical">
<<<<<<< HEAD
                        <EventsButton />
                        <MeetingButton />
                        <TodoList />
                        <SmallCalendar
                            history={history}
                            menuKey={calendarKey}
                            selectedKey={selectedKey}
                            setSelectedKey={setSelectedKey}
                        />
=======
                        {
                            displayRightSideContent()
                        }
>>>>>>> 5b50a2656b61e5979f0c3e904bbfa887efc68bdc
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
