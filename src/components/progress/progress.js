import React, { useState, useEffect } from "react";
import { Progress, Card, Row, Col, Space, Typography } from "antd";
import { Link } from "react-router-dom";

const MainProgress = () => {
  
  //Fetching data from airtable
  const getMentorsData = async () => {
    const response = await fetch(
      "https://api.airtable.com/v0/appm5NPkqO7P8ePUK/Progress?api_key=keyclOytaXo7NHQ8M&sort%5B0%5D%5Bfield%5D=id&sort%5B0%5D%5Bdirection%5D=asc"
    );
    const progressData = await response.json();
    return progressData;
  };

  const [progress, setProgress] = useState(null);

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
              {progress
                ? progress.records.map((week) => {
                    return (
                      <Col flex="1 1 ">
                        <Card
                          style={{
                            height: 255,
                            textAlign: "center",
                            paddingTop: 20,
                            marginBottom: 20,
                          }}
                          cover={
                            <Link to="/home/dashboard/assignments/">
                              {" "}
                              <Progress
                                type="circle"
                                strokeColor={{
                                  "0%": "#108ee9",
                                  "100%": "#87d068",
                                }}
                                percent={week.fields.Progress}
                              />
                            </Link>
                          }
                        >
                          <Meta
                            title={week.fields.Unit}
                            description="This is the description"
                          />
                        </Card>
                      </Col>
                    );
                  })
                : null}
            </Row>
          </div>
        </Card>
      </Space>
    </>
  );
};
export default MainProgress;
