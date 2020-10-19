import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import './HomePage.css';
import logo from '../../graphics/logo.png';
import ctd from '../landingPage/graphics/ctd.png';
import treehouse from '../landingPage/graphics/treehouse.png';
import Assignments from './Assignments';
import {UserCircle} from '@styled-icons/boxicons-solid/UserCircle'
import {PageHeader, Layout, Menu, Row, Col} from 'antd';
import {
  SettingOutlined,
  BellOutlined,
  DashboardOutlined,
  GithubOutlined,
  NotificationOutlined,
  BookOutlined,
  CalendarOutlined,
  TeamOutlined,
  UserOutlined,
  DisconnectOutlined,
  FundProjectionScreenOutlined,
  SlackOutlined,
  YoutubeOutlined,
  RocketOutlined
} from '@ant-design/icons';

// import './Sidebar.css';

const HeaderPage= styled.div`
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color:white;
  box-shadow: 7px 7px 19px -12px rgba(0, 0, 0, 0.32);
`;
const Logo = styled.div`
    justify-content: flex-start;
    align-items: center;
    padding-left:20px;
`;
const TopNav = styled.div`
    display:flex;
    padding:16px;
    padding-right: 30px;
    justify-content: space-between;
    align-items: center;
    color:#ccc;
    font-size: 18px;
    width:160px;
`;
const FooterBottom = styled.footer`
    z-index:4;
    width:100%;
    flex:none;
    display:block;
    font-weight:500;
    color:#272727;
    text-align:center; 
    display:flex;
    justify-content:space-between;
    align-items: center;
    height:60px;
    @media only screen and (max-width: 767px) {
      display:flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        height:100px;
        padding-left:0;
    }
`;
const Copyright = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
    text-transform: uppercase;
    font-size:.8rem;
    span{
    padding-top: 0px;
    font-size: 20px;
    }
`;
const Icon = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:#272727;
    width:180px;
    padding-right:20px;
  img{
    width:18px;
    filter: invert(100%);
  }
  @media only screen and (max-width: 767px) {
        padding-right:0;
        padding-top:12px;
    }
  `;
const FooterLinks = styled.a`
    display:flex;
    font-size: 20px;
    color:#272727;
    &:hover{
      color:#272727;
    cursor: pointer;
    }
`;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const routes = [
  {
    path: 'index',
    breadcrumbName: 'Home',
  },
  {
    path: 'first',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'second',
    breadcrumbName: 'Welcome',
  },
];
const Sidebar = () => {
  const [state, setState] = useState({ collapsed: false });
  const { collapsed } = state;

  const onCollapse = collapsed => {
    console.log(collapsed);
    setState({ collapsed });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ backgroundColor: '#12284C'}} collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Row type="flex">
          <Col span={24} align="center">
          <UserCircle style={{ width:"80px", color:"#fff", marginTop:30}}/>
          </Col>
          <Col span={24} align="center">
            <div className="username" style={{ paddingBottom: '30px'}}>Username</div>
          </Col>
        </Row>
        <Menu theme="dark"  style={{ backgroundColor: '#12284C'}} defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<NotificationOutlined />}>
            News
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined />}>
            <Link to="/assignments">Assignments</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<CalendarOutlined />}>
            Calendar
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            Mentors
          </Menu.Item>
          <Menu.Item key="6" icon={<TeamOutlined />}>
            Classmates
          </Menu.Item>
          <Menu.Item key="7" icon={<DisconnectOutlined />}>
            CTD
          </Menu.Item>
          <SubMenu key="sub1" icon={<FundProjectionScreenOutlined />} title="Resources">
            <Menu.Item key="8" icon={<SlackOutlined />}>Slack Channel</Menu.Item>
            <Menu.Item key="9" icon={<YoutubeOutlined />}>Treehouse</Menu.Item>
          </SubMenu>
          <Menu.Item key="10" icon={<RocketOutlined />}>
            Students Projects
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <HeaderPage>
        <Header className="site-layout-background" style={{ padding: "0",backgroundColor:"white", width:"100%"}}>
        <Row type="flex">
          <Col span={12}>
          <Logo><img src={logo} className="ctd-logo" alt="Code the Dream Logo"></img></Logo>
          </Col>
          <Col span={12} align="right">
          <TopNav className="top-nav">
            <BellOutlined />
            <SettingOutlined />
            <UserCircle style={{ width:"25px"}}/>
          </TopNav>
          </Col>
        </Row>
         </Header>
         </HeaderPage>
        <PageHeader className="white-gray" style={{ backgroundColor: '#fff', margin:"15px"}}
        breadcrumb={{ routes }}
        title="Welcome, Student!"
         />
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
              <Route path="/assignments" exact component={Assignments} />
            </Switch>

            <Row>
    <Col span={6} push={18}  style={{border: "1px solid #ccc" }}>
      col-18 col-push-6
    </Col>
    <Col span={18} pull={6}  style={{border: "1px solid #ccc" }}>
      col-6 col-pull-18
    </Col>
  </Row>
          </div>
          {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div> */}
        </Content>
        <Footer>
        <FooterBottom>
                <Copyright>Copyright © Code the Dream · All Rights Reserved</Copyright>
                <Icon>
                    <FooterLinks href="https://www.codethedream.org/" target="_blank"><img src={ctd} alt="Code The Cream"></img></FooterLinks>
                    <FooterLinks href="https://teamtreehouse.com/home" target="_blank"><img src={treehouse} alt="Team Treehouse"></img></FooterLinks>
                    <FooterLinks href="https://app.slack.com/client/T07EHJ738/learning-slack" target="_blank"><SlackOutlined /></FooterLinks>
                    <FooterLinks href="https://github.com/Code-the-Dream-School?type=source" target="_blank"><GithubOutlined /></FooterLinks>
                </Icon>
            </FooterBottom>
        </Footer>
      </Layout>
    </Layout>
  );
}


export default Sidebar;