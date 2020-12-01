/** @format */

import React from "react";
import { Row, Col, Divider, Card, Typography } from "antd";
import { MessageOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import MentorForm from "../mentorForm/MentorForm";

const GetHelp = () => {
    return (
        <>
            <Card type="inner" hoverable>
                <Typography.Title level={4} className="left">
                    Quick Links
                </Typography.Title>

                <Row gutter={16}>
                    <div className="badge">
                        <Col span={11} style={{ paddingTop: 30 }}>
                            <Typography.Title level={5} className="left">
                                <CustomerServiceOutlined /> Need Help?
                            </Typography.Title>
                            <br />
                            Contact
                            <a
                                href="https://www.codethedream.org/contact-us/"
                                target="_blank">
                                {" "}
                                here{" "}
                            </a>
                            the CTD staff for assistance
                        </Col>
                        <Divider type="vertical" style={{ height: 200 }} />
                        <Col span={11} style={{ paddingTop: 30 }}>
                            <Typography.Title level={5} className="left">
                                <MessageOutlined /> Mentor Session
                            </Typography.Title>
                            <br />
                            Schedule a mentor session
                            <MentorForm />
                        </Col>
                    </div>
                </Row>
            </Card>
        </>
    );
};

export default GetHelp;
