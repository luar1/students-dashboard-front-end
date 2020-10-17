
import React from 'react';
import styled from 'styled-components';
import Login from './Login'
import Navbar from './Navbar'
import FooterPage from './FooterPage'

<<<<<<< HEAD
const Section = styled.div`
=======
// import './index.css';
import Login from './Login';
import main from './main.png';

const StyledDiv = styled.div`
/* @import '~antd/dist/antd.css'; */
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
	box-sizing: inherit;
}
body,
h1,
h2{
	font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  overflow: visible;
}
/*menu*/
.ant-menu {
>>>>>>> Renamed folder to landingPage
  display:flex;
  flex-grow: 1;
  flex-basis:auto;
  flex-shrink:0;
  flex-flow: column;
  background-image: url('./images/background.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
const Main = styled.main`
padding:150px 20px 0 20px;
  margin:0;
  min-height:100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
  &::after{
  content: '';
  position:absolute;
  left: 0;
  top: 0;
  width:100%; 
  height:100%;
  }
`;

<<<<<<< HEAD
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Main>
          <Login />
        </Main>
      </Section>
      <FooterPage />
    </>
=======
 .login-form-forgot {
  float: right;
}
 .ant-col-rtl .login-form-forgot {
  float: left;
}
 .login-form-button {
  width: 100%;
  color: #F1F1F2;
  background-color: #12284C;
  border: none;
}
.button-hover:hover{
  background-color: #F1F1F2 ;
  border: 1px, solid, #C0C0C0;
  color: #FF5C35
}
`

const { Footer, Content } = Layout;
const LandingPage = ({ history }) => {
  return (
    <StyledDiv>
      <Layout className="content-landing">
        <Menu mode="horizontal">
          <Menu.Item><Button className="modified-item" type="link" href="https://www.codethedream.org/about/" target="_blank">About</Button></Menu.Item>
          <Menu.Item><Button className="modified-item" type="link" href="https://www.codethedream.org/classes/" target="_blank">FAQS</Button></Menu.Item>
          <Menu.Item><Button className="apply-btn" type="primary" href="https://www.codethedream.org/apply-now/" target="_blank" >Apply Now</Button></Menu.Item>
        </Menu>
        <Content >
          <Row gutter={[8, 8]} >
            <Col xs={24} sm={12}>
              <div className="info">
                <img className="logo" src='/images/logo_red.png' alt="CTD Logo"></img>
                <div>
                  <p className="text-info">
                    This website is your main hub for class materials for Code the Dream’s classes.</p><p>Login to access and start your assignments.
                  </p>
                </div>
                <div><Login history={history} /></div>

              </div>
            </Col>
          </Row>
        </Content>
        <Footer>
          <div className="icons-list">CODE THE DREAM | WWW.CODETHEDREAM.ORG </div>
          <div className="icons-list">
            <Button type="link" href="https://www.codethedream.org/" target="_blank"><img src='/images/ctd.png' alt=" Code the Dream"></img></Button>
            <Button type="link" href="https://teamtreehouse.com/home" target="_blank"><img src='/images/treehouse.png' alt="Team Treehouse"></img></Button>
            <Button type="link" href="https://app.slack.com/client/T07EHJ738/learning-slack" target="_blank"><SlackOutlined /></Button>
            <Button type="link" href="https://github.com/Code-the-Dream-School?type=source" target="_blank"><GithubOutlined /></Button>
          </div>
        </Footer>
      </Layout>
    </StyledDiv>
>>>>>>> Renamed folder to landingPage
  );
}
export default LandingPage;
