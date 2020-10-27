import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Menu, Dropdown, Tabs, Button } from 'antd';
import Icon, {
  FileDoneOutlined,
  DownOutlined,
  LineOutlined,
  YoutubeOutlined,
  GithubOutlined,
  SmileOutlined
} from '@ant-design/icons';
import styled from 'styled-components';

import FrontEndLogo from '../../graphics/frontEnd.svg';

const StyledSection = styled.section`
background: #f5f5f5;
overflow: hidden;
padding: 24px;

.courseOutline {
  margin: 2rem 0;
}

.cardContent {
  margin: 0 1rem;
}

.card-container p {
  margin: 0;
}
.card-container > .ant-tabs-card .ant-tabs-content {
  height: 300px;
  margin-top: -16px;
}
.card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}
.card-container > .ant-tabs-card > .ant-tabs-nav::before {
  display: none;
}
.card-container > .ant-tabs-card .ant-tabs-tab,
[data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}
.card-container > .ant-tabs-card .ant-tabs-tab-active,
[data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}

[data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-content {
  height: 120px;
  margin-top: -8px;
}
[data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}
[data-theme='dark'] #components-tabs-demo-card-top .code-box-demo {
  background: #000;
}
[data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
  background: #141414;
}
[data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-tab-active {
  border-color: #141414;
  background: #141414;
}
`;

const StyledDiv = styled.div`
  .ant-card-head {
    border-bottom: none;
  }
`

// const FrontEndLogoIcon = () => { return <Icon component={FrontEndLogo} />; };

const { TabPane } = Tabs;

const menu = () => {
  return (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
      </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
      </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
      </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  )
}

const AssignmentsDropdown = () => {
  return (
    <Dropdown overlay={menu}>
      <Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Your Courses <DownOutlined />
      </Link>
    </Dropdown>
  )
}

const Assignments = () => {
  const [state, setState] = useState({ key: 'Week 1' });
  const { key } = state;

  const onTabChange = (key, type) => {
    console.log(key, type);
    setState({ [type]: key });
  };

  return (
    <StyledDiv>
      <Card
        style={{ height: '500px', width: '70%' }}
        title="Front End 1"
        extra={<AssignmentsDropdown />}
        activeTabKey={key}
        onTabChange={key => {
          onTabChange(key, 'key');
        }}
      >
        <StyledSection>
          <div className="card-container">
            <Tabs type="card">
              <TabPane tab="Week 1" key="1">
                <h3 className="courseOutline" align="center"><FileDoneOutlined /> Instructions & Goals <LineOutlined /> <YoutubeOutlined /> Videos <LineOutlined /> <GithubOutlined /> Github Link <LineOutlined /> <SmileOutlined /> Done</h3>
                <div className="cardContent">
                  <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus, ipsum nec pretium placerat, leo justo accumsan lacus, et interdum.</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet arcu quam, eu rhoncus ligula malesuada a. Sed non fringilla risus. Etiam consectetur iaculis ipsum, nec cursus erat mollis eu.</p>
                  <div style={{
                    position: 'absolute', right: 0, bottom: 0, marginBottom: '4.5rem',
                    marginRight: '4.5rem'
                  }}>
                    <Link to="#"><Button type="primary" style={{ marginRight: '1rem' }}>Save Progress</Button></Link>
                    <Link to="#"><Button type="primary">Next</Button></Link>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Week 2" key="2">
                <h3 className="courseOutline" align="center"><FileDoneOutlined /> Instructions & Goals <LineOutlined /> <YoutubeOutlined /> Videos <LineOutlined /> <GithubOutlined /> Github Link <LineOutlined /> <SmileOutlined /> Done</h3>
                <div className="cardContent">
                  <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus, ipsum nec pretium placerat, leo justo accumsan lacus, et interdum.</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet arcu quam, eu rhoncus ligula malesuada a. Sed non fringilla risus. Etiam consectetur iaculis ipsum, nec cursus erat mollis eu.</p>
                  <div style={{
                    position: 'absolute', right: 0, bottom: 0, marginBottom: '4.5rem',
                    marginRight: '4.5rem'
                  }}>
                    <Link to="#"><Button type="primary" style={{ marginRight: '1rem' }}>Save Progress</Button></Link>
                    <Link to="#"><Button type="primary">Next</Button></Link>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Week 3" key="3">
                <h3 className="courseOutline" align="center"><FileDoneOutlined /> Instructions & Goals <LineOutlined /> <YoutubeOutlined /> Videos <LineOutlined /> <GithubOutlined /> Github Link <LineOutlined /> <SmileOutlined /> Done</h3>
                <div className="cardContent">
                  <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus, ipsum nec pretium placerat, leo justo accumsan lacus, et interdum.</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet arcu quam, eu rhoncus ligula malesuada a. Sed non fringilla risus. Etiam consectetur iaculis ipsum, nec cursus erat mollis eu.</p>
                  <div style={{
                    position: 'absolute', right: 0, bottom: 0, marginBottom: '4.5rem',
                    marginRight: '4.5rem'
                  }}>
                    <Link to="#"><Button type="primary" style={{ marginRight: '1rem' }}>Save Progress</Button></Link>
                    <Link to="#"><Button type="primary">Next</Button></Link>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </StyledSection>
      </Card>
    </StyledDiv >
  )
  // return (
  //   <>
  //     <Card
  //       style={{ width: '60%' }}
  //       title="Front End 1"
  //       extra={<AssignmentsDropdown />}
  //       tabList={tabList}
  //       activeTabKey={key}
  //       onTabChange={key => {
  //         onTabChange(key, 'key');
  //       }}
  //     >
  //       {contentList[key]}
  //     </Card>
  //   </>
  // )
}



export default Assignments;