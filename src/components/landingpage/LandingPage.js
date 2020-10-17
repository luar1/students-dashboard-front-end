import React from 'react';
import { Layout, Menu, Button, Row, Col } from 'antd';
import { SlackOutlined, GithubOutlined, } from '@ant-design/icons';
import styled from 'styled-components';

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
  display:flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding:20px;
  max-width: 98%;
  margin-right: auto;
  margin-left: auto;
  background: transparent;
  box-shadow: none;  
  border:none;
}
/*menu items*/
.modified-item{

}

.modified-item span{
  color:black;
  font-weight: 800;
  padding-right:15px;

}



/*apply now*/
.apply-btn{
  display:flex;
  justify-content: center;
  width:140px;
  height: 50px;
  background-color: #1890FF;
  border-radius: 20px;
}

.apply-btn span{
  color:white;
  font-weight: 800;
  padding:8px;

}

/*info*/



.info{
  display:flex;
  flex-flow: column nowrap;
  justify-content: left;
  align-items: left;
  height: 90%;
  position:fixed;
  margin:0 auto;
  color: white;
  width:100%;
  top:80px;
  left:50px;

}

.info p{
  margin:0 auto;
padding-left:25px;
width:100%;

}

.logo{
width:380px;
}

/*content*/
.content-landing{
    display: flex;
    margin: auto;
    min-height: 100%;
    min-width: 1024px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    margin:0;
    z-index:2;
    background: url(${main}) no-repeat center center fixed;
    background-size: cover; 
 
  }

  /*footer*/
  .ant-layout-footer{
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    width: 100%;
    height:60px;
    bottom:0;
    background-color: #12284C;
    color:white;
    text-align:center; 
  }

.icons-list{
    justify-content: center;
    align-items: center;
  }

  .icons-list span{
    padding-top: 0px;
    font-size: 20px;
    color:white;

  }

  .icons-list img{
    padding:0px;
    width:20px;
    margin-right:10px;
    padding-bottom: 6.5px;
  }


  @media (min-width:768px )and (max-width: 1000px) {
    .ant-layout-footer{
      display:flex;
      justify-content: space-around;
      align-items: center;
      position: fixed;
      left:0;
      bottom:0;
      right:0;
      height:60px;
    }
    .logo{
      max-width:400px;
    
    }
   
  }

    @media only screen and (max-width: 767px) {
      .ant-layout-footer{
        display:flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        align-items: center;
        position: fixed;
        left:0;
        bottom:0;
        right:0;
        height:80px;
      }
      .content-landing {
        background-size: cover;
        background-position: center;
  
      }

      .info{
        max-width: 80%;
        height: 600px;
        position:fixed;
        top:80px;
        left:50px;
        }

      .logo{
        max-width: 400px;
      }
    

  }
    

  /* login */
.contain h1 {
  font-size: 2rem;
  font-weight: 800;
  text-align:center;
  }
  

.contain{
  max-width: 350px;
  border-radius: 10px;
  margin-left: 8%;
  margin-top:50px;
  padding: 60px;
  background-color:white;
  -webkit-box-shadow: 7px 7px 19px -12px rgba(0,0,0,0.72);
-moz-box-shadow: 7px 7px 19px -12px rgba(0,0,0,0.72);
box-shadow: 7px 7px 19px -12px rgba(0,0,0,0.72);
}

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
  );
}

export default LandingPage;