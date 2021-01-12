/** @format */

import React from "react";
import { PageHeader, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { StyledHeadDiv } from "./styles.js";
import * as ROUTES from "../../../constants/routes";

const Breadcrumbs = ({ page, match, keys, setSelectedKey }) => {
    return (
        <StyledHeadDiv>
            <PageHeader
                className="white-gray"
                style={{ backgroundColor: "#fff", margin: "15px" }}
                title="Welcome"
                subTitle="Student!">
                <Breadcrumb style={{ margin: "0" }}>
                    <Breadcrumb.Item>
                        {page === "Dashboard" ? (
                            "Home"
                        ) : (
                            <Link
                                to={`${match.path}${ROUTES.DASHBOARD}`}
                                onClick={() => setSelectedKey(keys[0])}>
                                Home
                            </Link>
                        )}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {page === "Dashboard" ? null : page}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </PageHeader>
        </StyledHeadDiv>
    );
};

export default Breadcrumbs;
