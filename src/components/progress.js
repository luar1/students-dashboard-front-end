import React from "react";
import { Progress, Card, Row, Col } from "antd";

const MainProgress = () => {
  const { Meta } = Card;
  return (
    <>
      <div className="home-block">
               <h2>Your Progress</h2>
        <Row gutter={16}>
          <Col span={6}>
            <Card
              style={{ width: 200, paddingTop: 20 }}
              cover={
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={100}
                />
              }
            >
              <Meta title="Week 1" description="This is the description" />
            </Card>
          </Col>

          <Col span={6}>
            <Card
              style={{ width: 200, paddingTop: 20 }}
              cover={
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={70}
                />
              }
            >
              <Meta title="Week 2" description="This is the description" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              style={{ width: 200, paddingTop: 20 }}
              cover={
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={0}
                />
              }
            >
              <Meta title="Week 3" description="This is the description" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              style={{ width: 200, paddingTop: 20 }}
              cover={
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={0}
                />
              }
            >
              <Meta title="Week 4" description="This is the description" />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MainProgress;
