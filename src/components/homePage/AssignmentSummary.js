import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import * as ROUTES from '../../constants/routes';

const AssignmentSummary = ({ setSelectedKey, menuKey }) => {

  return (
    <>
      <Card style={{ width: 600 }}>
        <h2>You are starting Front End 1 Week 1</h2>
        <h1>Summary</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada feugiat tellus, eu feugiat nisi aliquet in. Donec neque ligula, placerat in sollicitudin at, tempus in nibh. Suspendisse ultrices, massa a laoreet gravida, diam lacus tincidunt est, at congue turpis erat in elit.</p>
        <Link to={`${ROUTES.HOME}${ROUTES.ASSIGNMENTS}`} onClick={() => setSelectedKey(menuKey)}><Button type="primary" icon={<DownloadOutlined />}>Start the Assignment</Button></Link>
      </Card>
    </>
  )
}

export default AssignmentSummary;