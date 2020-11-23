/** @format */

import React, { useState } from "react";
import { Space, Card, Typography } from "antd";
import FrontEnd from "./badges/frontEnd.png";

const Summary = () => {
    return (
        <Space direction="vertical">
            <Card type="inner">
                <Typography.Title level={4} className="left">
                    You are in Week 1 of Front End 1
                </Typography.Title>
                <div className="badge">
                    <div>
                        <img src={FrontEnd} alt="" className="badge"></img>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </div>
                </div>
            </Card>
        </Space>
    );
};

export default Summary;
