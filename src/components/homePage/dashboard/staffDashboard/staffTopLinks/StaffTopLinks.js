/** @format */

import React from "react";
import { Row, Col, Space, Card } from "antd";
import styled from "styled-components";
import { UnlockOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons";

const StaffTopLinks = () => {
    const Cards = styled.div`
        display: flex;

        .cards-border {
            border: 1px solid red;
            width: 100%;
        }
    `;
    const ButtonOne = styled.button`
        width: 200px;
        height: 102.32px;
        border-style: none;
        background: #c8e4ff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        margin: 5px;
    `;

    const ButtonTwo = styled.button`
        width: 200px;
        height: 102.32px;
        border-style: none;
        background: #ffd95e;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        margin: 5px;
    `;

    const ButtonThree = styled.button`
        width: 200px;
        height: 102.32px;
        border-style: none;
        background: #1890ff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        margin: 5px;
    `;

    return (
        <>
            <Space direction="vertical">
                <Cards>
                    <Card type="inner" hoverable className="cards-border">
                        <ButtonOne>
                            <h3>
                                <strong>
                                    <TeamOutlined /> Students
                                </strong>
                            </h3>
                            Manage & Tracking Report
                        </ButtonOne>

                        <ButtonTwo>
                            <h3>
                                {" "}
                                <strong>
                                    <UserOutlined /> Mentors
                                </strong>
                            </h3>
                            Manage & Tracking Report
                        </ButtonTwo>

                        <ButtonThree>
                            <h3>
                                <strong>
                                    <UnlockOutlined /> Staff Admin
                                </strong>
                            </h3>
                            Manage & Authorization
                        </ButtonThree>
                    </Card>
                </Cards>
            </Space>
        </>
    );
};
export default StaffTopLinks;
