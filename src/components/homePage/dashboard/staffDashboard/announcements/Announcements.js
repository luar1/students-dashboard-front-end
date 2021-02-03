/** @format */

import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
import { NotificationOutlined } from "@ant-design/icons";

const AnnouncementsButton = styled.div`
    color: #12284c;
    border-style: none;
    font-size: 1.2em;
    font-weight: 600;
    margin: 0 auto;
    padding: 8%;
    background: #fb5100;
    border-radius: 6px;
    width: 100%;
    text-align: center;
    display: block;
    cursor: pointer;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #fb5100;
    a {
        color: #12284c;
    }
    &:hover {
        background-color: #f1f1f2;
        color: #ff5c35;
        border: 1px solid #c0c0c0;
    }
    .anticon-notification {
        padding-right: 8px;
    }
    @media only screen and (max-width: 996px) {
        position: fixed;
        right: 32px;
        bottom: 250px;
        z-index: 2147483640;
        cursor: pointer;
        border-radius: 50%;
        height: 70px;
        width: 70px;
        padding: 0px;
        text-align: center;
        box-shadow: 7px 7px 19px -12px rgba(0, 0, 0, 0.32);
        transition: all 0.1s ease-in-out;
        span {
            margin: 0px;
        }
        span .anticon.anticon-notification svg {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
        }
        h4,
        p {
            display: none;
        }
    }
`;

const Announcements = () => {
    return (
        <>
            <AnnouncementsButton className="shadow">
                <Typography.Title level={4} className="left">
                    <NotificationOutlined />
                    Announcements
                </Typography.Title>
                <p>Latest News</p>
            </AnnouncementsButton>
        </>
    );
};
export default Announcements;
