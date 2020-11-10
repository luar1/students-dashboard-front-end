import React from "react";
import { Progress, Card, Row, Col, Divider } from "antd";

const MainProgress = () => {
  const { Meta } = Card;
  return (
    <>
      <Divider orientation="left">Your Progress</Divider>
      <Row>
        <Col flex="1 1 100px">
          <Card
            style={{
              width: 160,
              height: 255,
              textAlign: "center",
              paddingTop: 20,
              marginBottom: 20,
            }}
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
        <Col flex="1 1 100px">
          <Card
            style={{
              width: 160,
              height: 255,
              textAlign: "center",
              paddingTop: 20,
              marginBottom: 20,
            }}
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
        <Col flex="1 0 100px">
          {" "}
          <Card
            style={{
              width: 160,
              height: 255,
              textAlign: "center",
              paddingTop: 20,
              marginBottom: 20,
            }}
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
        <Col flex="1 0 100px">
          {" "}
          <Card
            style={{
              width: 160,
              height: 255,
              textAlign: "center",
              paddingTop: 20,
              marginBottom: 20,
            }}
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
    </>
  );
};
export default MainProgress;
