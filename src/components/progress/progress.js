import React, { useState, useEffect } from "react";
import { Progress, Card, Row, Col, Space, Typography } from "antd";

const MainProgress = () => {
  //Fetching data from airtable
  const getMentorsData = async () => {
    const response = await fetch(
      "https://api.airtable.com/v0/appm5NPkqO7P8ePUK/Progress?api_key=keyclOytaXo7NHQ8M"
    );
    const progressData = await response.json();
    return progressData;
  };

  const [progress, setProgress] = useState([]);

  useEffect(() => {
    getMentorsData().then((data) => setProgress(data));
  }, []);

  const { Meta } = Card;
  return (
    <>
      <Space direction="vertical">
        <Card type="inner">
          <Typography.Title level={4} className="left">
            Your Progress
          </Typography.Title>
          <div className="progress">
            <Row gutter={24}>
              <Col flex="1 1 ">
                <Card
                  style={{
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
              <Col flex="1 1 ">
                <Card
                  style={{
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
              <Col flex="1 0 ">
                {" "}
                <Card
                  style={{
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
              <Col flex="1 0 ">
                {" "}
                <Card
                  style={{
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
          </div>
        </Card>
      </Space>
    </>
  );
};
export default MainProgress;
