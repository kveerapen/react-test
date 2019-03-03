import React from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import PersonCard from "./components/PersonCard";
import { getData } from "./actions";

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

class CrewApplicantsTable extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { crewman } = this.props;
    return (
      <Row>
        <Col span={8} align="center">
          <Title>Applied</Title>
          {crewman &&
            crewman
              .filter(person => person.stage === "applied")
              .map(person => (
                <PersonCard
                  key={person.id}
                  stage={person.stage}
                  name={person.name}
                  city={person.city}
                  avatar={person.avatar}
                />
              ))}
        </Col>
        <Col span={8} align="center">
          <Title>Interviewing</Title>
          {crewman &&
            crewman
              .filter(person => person.stage === "interviewing")
              .map(person => (
                <PersonCard
                  key={person.id}
                  stage={person.stage}
                  name={person.name}
                  city={person.city}
                  avatar={person.avatar}
                />
              ))}
        </Col>
        <Col span={8} align="center">
          <Title>Hiring</Title>
          {crewman &&
            crewman
              .filter(person => person.stage === "hired")
              .map(person => (
                <PersonCard
                  key={person.id}
                  stage={person.stage}
                  name={person.name}
                  city={person.city}
                  avatar={person.avatar}
                />
              ))}
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return { crewman: state.crewman };
}

export default connect(
  mapStateToProps,
  { getData }
)(CrewApplicantsTable);
