import React, { Fragment } from "react";
import { Card, Button, Icon, Row, Col, Avatar } from "antd";
import styled from "@emotion/styled";

const RowSeparator = styled.div`
  height: 15px;
`;

const PersonCard = ({ stage, name, city, avatar }) => {
  return (
    <Card style={{ width: 300 }}>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={8}>
          <Avatar size={64} icon="user" src={avatar} />
        </Col>
        <Col span={16}>
          <div>
            <h3>{name}</h3>
          </div>
          <div>{city}</div>
        </Col>
      </Row>
      <RowSeparator />
      <Row>
        {stage === "applied" && (
          <Col span={24} align="right">
            <Button type="primary">
              <Icon type="right" />
            </Button>
          </Col>
        )}
        {stage === "interviewing" && (
          <Fragment>
            <Col span={12} align="left">
              <Button type="primary">
                <Icon type="left" />
              </Button>
            </Col>
            <Col span={12} align="right">
              <Button type="primary">
                <Icon type="right" />
              </Button>
            </Col>
          </Fragment>
        )}
        {stage === "hired" && (
          <Col span={24} align="left">
            <Button type="primary">
              <Icon type="left" />
            </Button>
          </Col>
        )}
      </Row>
    </Card>
  );
};

export default PersonCard;
