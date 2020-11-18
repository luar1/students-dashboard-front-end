/** @format */

import React from "react";
import { Space } from "antd";
import styled from "styled-components";
import { CalendarOutlined, VideoCameraOutlined } from "@ant-design/icons";

const CalendarButton = () => {
    const ButtonStyle = styled.button`
        color: #12284c;
        font-size: 1em;
        margin: 0 auto;
        padding: 8px;
        background-color: #ff5c35;
        border: 1px solid #f1f1f2;
        border-radius: 5px;
        width: 300px;
        text-align: center;
        display: block;
        a {
            color: #12284c;
        }
        a:hover {
            color: #ff5c35;
        }
        &:hover {
            background-color: #f1f1f2;
            color: #ff5c35;
            border: 1px solid #c0c0c0;
        }
    `;

    return (
        <>
            <Space direction="vertical" className="center">
                <ButtonStyle as="a" href="/">
                    <CalendarOutlined /> View Calendar
                </ButtonStyle>
                <ButtonStyle
                    as="a"
                    href="https://us02web.zoom.us/j/8270372532?pwd=cGJHazFVUURyTTc1a3REQytqZjYyZz09"
                    target="_blank">
                    <VideoCameraOutlined /> Mentor Session
                </ButtonStyle>
            </Space>
            <br />
        </>
    );
};

export default CalendarButton;
