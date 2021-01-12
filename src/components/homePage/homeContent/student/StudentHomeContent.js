/** @format */

import React from "react";
import { Switch } from "react-router-dom";
import { Layout } from "antd";

<<<<<<< HEAD:src/components/homePage/homeContent/HomeContent.js
import * as ROUTES from "../../../constants/routes";
import PrivateRoute from "../../routes/PrivateRoute";
import Dashboard from "../dashboard/Dashboard";
import Assignments from "../assignments/Assignments";
import FullCalendarDashboard from "../fullCalendar/FullCalendarDashboard";
import Units from "../courseUnits/Units";
const { Content } = Layout;

const HomeContent = ({ keys, selectedKey, setSelectedKey, match }) => {
    return (
        <Content style={{ margin: "16px 16px" }}>
            <div className="site-layout-background">
                <Switch>
                    <PrivateRoute
                        path={`${match.path}${ROUTES.DASHBOARD}`}
                        component={Dashboard}
                        menuKey={{
                            dashboardKey: keys[0],
                            assignmentsKey: keys[2],
                            calendarKey: keys[3],
                        }}
                        selectedKey={selectedKey}
                        setSelectedKey={setSelectedKey}
                    />
                    <PrivateRoute
                        path={`${match.path}${ROUTES.ASSIGNMENTS}`}
                        menuKey={keys[2]}
                        selectedKey={selectedKey}
                        setSelectedKey={setSelectedKey}
                        component={Assignments}
                    />
                    <PrivateRoute
                        path={`${match.path}${ROUTES.CALENDAR}`}
                        menuKey={keys[3]}
                        selectedKey={selectedKey}
                        setSelectedKey={setSelectedKey}
                        component={FullCalendarDashboard}
                    />
                    <PrivateRoute
                        path={`${match.path}${ROUTES.UNITS}`}
                        menuKey={keys[1]}
                        selectedKey={selectedKey}
                        setSelectedKey={setSelectedKey}
                        component={Units}
                    />
                </Switch>
            </div>
        </Content>
    );
};

export default HomeContent;
=======
import * as ROUTES from "../../../../constants/routes";
import PrivateRoute from "../../../routes/PrivateRoute";
import Dashboard from "../../dashboard/Dashboard";
import Assignments from "../../assignments/Assignments";
import FullCalendarDashboard from "../../fullCalendar/FullCalendarDashboard";

const { Content } = Layout;

const StudentHomeContent = ({ keys, selectedKey, setSelectedKey, match }) => {
  return (
    <Content style={{ margin: "0 16px" }}>
      <div className="site-layout-background">
        <Switch>
          <PrivateRoute
            path={`${match.path}${ROUTES.DASHBOARD}`}
            component={Dashboard}
            menuKey={{ dashboardKey: keys['Dashboard'], assignmentsKey: keys['Assignments'], calendarKey: keys['Calendar'] }}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          />
          <PrivateRoute
            path={`${match.path}${ROUTES.ASSIGNMENTS}`}
            menuKey={keys[2]}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
            component={Assignments}
          />
          <PrivateRoute
            path={`${match.path}${ROUTES.CALENDAR}`}
            menuKey={keys[3]}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
            component={FullCalendarDashboard}
          />
        </Switch>
      </div>
    </Content>
  )
}

export default StudentHomeContent;
>>>>>>> 5b50a2656b61e5979f0c3e904bbfa887efc68bdc:src/components/homePage/homeContent/student/StudentHomeContent.js
