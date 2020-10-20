import React from "react";
import { Row, Col, Divider } from "antd";
import { MessageOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import MentorForm from "./mentorForm";

const GetHelp = () => {
  return (
    <>
      <div className="home-block">
        <Row gutter={16}>
        <Col span={11} style={{paddingTop:30}}>
           <h2><CustomerServiceOutlined />  Need Help?</h2>
           <br></br><a href="https://www.codethedream.org/contact-us/" target="_blank">Contact the CTD staff for assistance</a>
          </Col>
          <Divider type="vertical" style={{height:200}} />
          <Col span={11} style={{paddingTop:30}}> 
          <h2><MessageOutlined />  Mentor Session</h2>
          <br></br>Schedule your mentor session<MentorForm />
          </Col>
        </Row>     
      </div>
    </>
  );
};

export default GetHelp;
