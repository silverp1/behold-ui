import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardBody,
  Row,
  Col
} from 'reactstrap';
import './glance.css';

class Glance extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getCriticalCount() {
    return this.props.checks.filter(
      check => check.state === "critical"
    ).length
  }

  getNominalCount() {
    return this.props.checks.filter(
      check => check.state === "nominal"
    ).length
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Card>
              <CardBody className="text-white bg-success">
                <span className="statistics-title">Nominal Count</span>
                <span className="statistics-value">{this.getNominalCount()}</span>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody className="text-white bg-danger">
                <span className="statistics-title">Critical Count</span>
                <span className="statistics-value">{this.getCriticalCount()}</span>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  checks: state.checksReducer.checks,
  isFetching: state.checksReducer.isFetching,
  error: state.checksReducer.error
});

export default connect(mapStateToProps)(Glance);
