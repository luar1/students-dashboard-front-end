/** @format */

import React, { useState, useEffect, useContext, useReducer } from "react";
import { Link, Route, Switch } from "react-router-dom";
import {
    Card,
    Menu,
    Dropdown,
    Tabs,
    Button,
    Spin,
    Row,
    Col,
    Form,
    Steps,
    Space,
    message,
} from "antd";
import _ from "lodash";
import Icon, {
    FileDoneOutlined,
    DownOutlined,
    LineOutlined,
    YoutubeOutlined,
    GithubOutlined,
    SmileOutlined,
    CheckOutlined,
} from "@ant-design/icons";

import * as ROUTES from "../../../constants/routes";
import { StyledSection, StyledDiv, StyledDivSummary } from "./styles";
import UserContext from "../../contexts/UserContext";
import PrivateRoute from "../../routes/PrivateRoute";
import Instructions from "./Instructions";
import Summary from "./Summary";
import Videos from "./Resources";
import GithubLink from "./GithubLink";
import TodoList from "../dashboard/todoList/TodoList";
import SmallCalendar from "../dashboard/smallCalendar/SmallCalendar";
import EventsButton from "../dashboard/eventsButton/eventsButton";
import MeetingButton from "../dashboard/meetingButton/meetingButton";
const { TabPane } = Tabs;
const { Step } = Steps;

const INITIAL_STATE = {};

const ACTIONS = {
    SET_COURSE: "course",
    SET_UNITS: "units",
    SET_LESSONS: "lessons",
    SET_SOURCES: "sources",
    SET_ALL: "all",
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_COURSES:
            return { ...state, [action.payload.field]: action.payload.value };
        case ACTIONS.SET_UNITS:
            return { ...state, [action.payload.field]: action.payload.value };
        case ACTIONS.SET_LESSONS:
            return { ...state, [action.payload.field]: action.payload.value };
        case ACTIONS.SET_SOURCES:
            return { ...state, [action.payload.field]: action.payload.value };
        case ACTIONS.SET_ALL:
            return { ...action.payload.value };
        default:
            throw new Error();
    }
};

const Assignments = ({ match, history }) => {
    const [state, setState] = useState({ key: "Week 1" });
    const [savedProgress, setSavedProgress] = useState(null);
    const { key } = state;
    const [clickedUnitKey, setClickedUnitKey] = useState(0);
    const [clickedLessonKey, setClickedLessonKey] = useState(0);
    const [classInfo, dispatchClass] = useReducer(reducer, INITIAL_STATE);
    const [userInfo, dispatchUser] = useContext(UserContext);

    useEffect(() => {
        const getAssignments = async () => {
            const dataUnits = await fetch(
                `https://students-dashboard-back-end.herokuapp.com/courses/${userInfo.courseID}`
            );
            const resUnits = await dataUnits.json();

            dispatchClass({
                type: "all",
                payload: { field: "all", value: resUnits.course },
            });
        };
        getAssignments();
    }, []);

    // const nextPage = (location) => {
    //   switch (location.pathname) {
    //     case '/home/assignments':
    //       return '/home/assignments/instructions';
    //     case '/home/assignments/instructions':
    //       return '/home/assignments/videos';
    //     case '/home/assignments/videos':
    //       return '/home/assignments/submission';
    //     case '/home/assignments/submission':
    //       return '/home/assignments/done';
    //     default:
    //       return new Error('path not found');
    //   }
    // }

    const menu = () => {
        return (
            <Menu onClick={({ key }) => setClickedUnitKey(key)}>
                {classInfo
                    ? classInfo.units.map((unit, index) => {
                          return (
                              <Menu.Item key={index}>
                                  <a target="_blank" rel="noopener noreferrer">
                                      {unit.unit_name}
                                  </a>
                              </Menu.Item>
                          );
                      })
                    : null}
            </Menu>
        );
    };

    const AssignmentsDropdown = () => {
        return (
            <Dropdown overlay={menu}>
                <Button
                    type="primary"
                    className="ant-dropdown-link"
                    to="#"
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}>
                    Your Units <DownOutlined />
                </Button>
            </Dropdown>
        );
    };

    const handleSubmit = () => {
        console.log(classInfo);
        setSavedProgress(true);
    };

    const steps = [
        {
            title: "Instructions",
            link: `${match.path}${ROUTES.INSTRUCTIONS}`,
            icon: <FileDoneOutlined />,
        },
        {
            title: "Resources",
            link: `${match.path}${ROUTES.VIDEOS}`,
            icon: <YoutubeOutlined />,
        },
        {
            title: "Github Link",
            link: `${match.path}${ROUTES.SUBMISSION}`,
            icon: <GithubOutlined />,
        },
        {
            title: "Done",
            link: `${match.path}${ROUTES.DONE}`,
            icon: <SmileOutlined />,
        },
    ];

    const [current, setCurrent] = useState(-1);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const tabPanes = (classKey) => {
        return classInfo.units[classKey].lessons.map((lesson, index) => {
            return (
                <TabPane
                    tab={<Link to={`${match.path}`}>Week {index + 1}</Link>}
                    key={`${index}`}>
                    <Steps current={current}>
                        {steps.map((item) => (
                            <Step
                                key={item.title}
                                title={item.title}
                                icon={
                                    <Link
                                        to={item.link}
                                        onClick={() =>
                                            setCurrent(
                                                steps.findIndex(
                                                    (curr) => curr.link === item.link
                                                )
                                            )
                                        }
                                        style={{ color: "inherit" }}>
                                        {item.icon}
                                    </Link>
                                }
                            />
                        ))}
                    </Steps>
                    <div className="cardContent">
                        <Switch>
                            <Route
                                exact
                                path={`${match.path}`}
                                render={(props) => (
                                    <Summary
                                        {...props}
                                        lesson={lesson.lesson_name}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path={`${match.path}${ROUTES.DASHBOARD}`}
                                component={Instructions}
                            />
                            <Route
                                exact
                                path={`${match.path}${ROUTES.VIDEOS}`}
                                render={(props) => (
                                    <Videos
                                        {...props}
                                        lessons={
                                            classInfo.units[clickedUnitKey].lessons[
                                                clickedLessonKey
                                            ]
                                        }
                                    />
                                )}
                            />
                            <Route
                                exact
                                path={`${match.path}${ROUTES.SUBMISSION}`}
                                render={(props) => (
                                    <GithubLink {...props} githubLink={classInfo} />
                                )}
                            />
                        </Switch>
                        <StyledDivSummary>
                            <Form
                                style={{ display: "inline-block" }}
                                onFinish={handleSubmit}>
                                <Button
                                    style={{ marginRight: "1rem" }}
                                    type="primary"
                                    htmlType="submit"
                                    onClick={() =>
                                        message.success("Progress Saved")
                                    }>
                                    Save Progress
                                </Button>
                            </Form>
                            {current < steps.length - 1 && (
                                <Link to={steps[current + 1].link}>
                                    <Button type="primary" onClick={() => next()}>
                                        Next
                                    </Button>
                                </Link>
                            )}
                            {current === steps.length - 1 && (
                                <Button
                                    type="primary"
                                    onClick={() =>
                                        message.success(
                                            "You have finished this assignment"
                                        )
                                    }>
                                    Done
                                </Button>
                            )}
                            {current > -1 && (
                                <Link
                                    to={
                                        current > 0
                                            ? steps[current - 1].link
                                            : match.path
                                    }>
                                    <Button
                                        style={{ margin: "0 8px" }}
                                        onClick={() => prev()}>
                                        Previous
                                    </Button>
                                </Link>
                            )}
                        </StyledDivSummary>
                    </div>
                </TabPane>
            );
        });
    };

    return (
        <div className="container-fluid">
            <Row gutter={[16, 24]}>
                <Col xs={24} sm={24} md={24} lg={14} xl={16} xxl={18}>
                    <StyledDiv>
                        {!_.isEmpty(classInfo) ? (
                            <Card
                                title={
                                    !_.isEmpty(classInfo)
                                        ? classInfo.units[clickedUnitKey].unit_name
                                        : null
                                }
                                extra={<AssignmentsDropdown />}
                                activeTabKey={key}>
                                <StyledSection>
                                    <div className="card-container">
                                        <Tabs
                                            type="card"
                                            onChange={(key) =>
                                                setClickedLessonKey(key)
                                            }>
                                            {tabPanes(clickedUnitKey)}
                                        </Tabs>
                                    </div>
                                </StyledSection>
                            </Card>
                        ) : (
                            <Row>
                                <Col span={12} offset={12}>
                                    <Spin size="large" />
                                </Col>
                            </Row>
                        )}
                    </StyledDiv>
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
                        <EventsButton />
                        <MeetingButton />
                        <TodoList />
                        <SmallCalendar history={history} />
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default Assignments;
