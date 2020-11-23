/** @format */

import React from "react";
import { Button, Row, Col } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";

const ZoomButton = () => {
    return (
        <>
            <Row>
                <Col span={4}></Col>
                <Col justify="center" span={16}>
                    <Button
                        style={{ margin: 10, marginTop: 0, width: 200 }}
                        className="calendar-button">
                        <a
                            href="https://us02web.zoom.us/j/8270372532?pwd=cGJHazFVUURyTTc1a3REQytqZjYyZz09"
                            target="_blank">
                            <VideoCameraOutlined /> Mentor Session
                        </a>
                    </Button>
                </Col>
                <Col span={4}></Col>
            </Row>
        </>
    );
};

export default ZoomButton;
