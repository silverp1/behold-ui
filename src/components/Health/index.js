import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardBody,
  Row,
  Col,
  Table
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import './health.css';

class Health extends Component {
  getCardClassName(check) {
    if (check && check.all_alive === true) {
      return 'text-white bg-success'
    }
    return 'text-white bg-danger'
  }

  showHealthCardChecks() {
    if (this.props.healthData && this.props.healthData.check_processes) {
      return (
        <Col>
          <Card>
            <CardBody className={this.getCardClassName(this.props.healthData.check_processes)}>
            <span className="health-title">
                Check Processes
              </span>
              <span className="health-value">
                {this.props.healthData.check_processes.alive_count} / {this.props.healthData.check_processes.total_count}
              </span>
            </CardBody>
          </Card>
        </Col>
      )
    }
  }

  showHealthCardRollup() {
    if (this.props.healthData && this.props.healthData.rollup_processes) {
      return (
        <Col>
          <Card>
            <CardBody className={this.getCardClassName(this.props.healthData.rollup_processes)}>
              <span className="health-title">
                Rollup Processes
              </span>
              <span className="health-value">
                {this.props.healthData.rollup_processes.alive_count} / {this.props.healthData.rollup_processes.total_count}
              </span>
            </CardBody>
          </Card>
        </Col>
      )
    }   
  }

  showHealthCardScheduler() {
    if (this.props.healthData && this.props.healthData.scheduler_alive) {
      return (
        <Col>
          <Card>
            <CardBody className={this.props.healthData.scheduler_alive ? 'text-white bg-success' : 'text-white bg-danger'}>
              <span className="health-title">
                Scheduler Processes
              </span>
              <span className="health-value">
                {this.props.healthData.scheduler_alive 
                  ? "1 / 1"
                  : "0 / 1"
                }
              </span>
            </CardBody>
          </Card>
        </Col>       
      )
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Row>
          {this.showHealthCardChecks()}
          {this.showHealthCardRollup()}
          {this.showHealthCardScheduler()}
        </Row>
        <Row className="mt-4">
          <h3>Checks</h3>
          <Table>
            <thead>
              <tr>
                <th>Process</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.healthData && this.props.healthData.check_processes
                ? this.props.healthData.check_processes.process_data.map((value, index) => {
                  return (
                    <tr key={index}>
                    <td>{value.name || value.id}</td>
                    <td>{value.status}</td>
                    <td>
                      <a href={`/health/${value.name}/restart`}>
                        <FontAwesomeIcon icon={faSync} />
                      </a>
                    </td>
                  </tr>
                  )
                })
                : ('')
              }
            </tbody>
          </Table>
        </Row>
        <Row className="mt-2">
          <h3>Rollups</h3>
          <Table>
            <thead>
              <tr>
                <th>Process</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {this.props.healthData && this.props.healthData.rollup_processes
                ? this.props.healthData.rollup_processes.process_data.map((value, index) => {
                  return (
                    <tr key={index}>
                    <td>{value.name || value.id}</td>
                    <td>{value.status}</td>
                    <td>
                      <a href={`/health/${value.name}/restart`}>
                        <FontAwesomeIcon icon={faSync} />
                      </a>
                    </td>
                  </tr>
                  )
                })
                : ('')
              }
            </tbody>
          </Table>
        </Row>
     </div>
    );
  }
}

const mapStateToProps = state => ({
  healthData: state.healthReducer.healthData,
  isFetching: state.healthReducer.isFetching,
  error: state.healthReducer.error
});

export default connect(mapStateToProps)(Health);