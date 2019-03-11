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

const renderColumns = ({
  crewman,
  stage,
  handleRightButtonClick,
  handleLeftButtonClick
}) =>
  crewman
    .filter(person => person.stage === stage)
    .map(person => (
      <PersonCard
        key={person.id}
        stage={person.stage}
        name={person.name}
        city={person.city}
        avatar={person.avatar}
        handleRightButtonClick={handleRightButtonClick}
        handleLeftButtonClick={handleLeftButtonClick}
      />
    ));

class CrewApplicantsTable extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  // eslint-disable-next-line class-methods-use-this
  handleRightButtonClick() {
    console.log("right click");
  }

  // eslint-disable-next-line class-methods-use-this
  handleLeftButtonClick() {
    console.log("left click");
  }

  render() {
    const { crewman } = this.props;

    return (
      <Row>
        <Col span={8} align="center">
          <Title>Applied</Title>
          {crewman &&
            renderColumns({
              crewman,
              stage: "applied",
              handleRightButtonClick: this.handleRightButtonClick
            })}
        </Col>
        <Col span={8} align="center">
          <Title>Interviewing</Title>
          {crewman &&
            renderColumns({
              crewman,
              stage: "interviewing",
              handleRightButtonClick: this.handleRightButtonClick,
              handleLeftButtonClick: this.handleLeftButtonClick
            })}
        </Col>
        <Col span={8} align="center">
          <Title>Hiring</Title>
          {crewman &&
            renderColumns({
              crewman,
              stage: "hired",
              handleLeftButtonClick: this.handleLeftButtonClick
            })}
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
