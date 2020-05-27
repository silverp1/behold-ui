import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardBody,
  Row,
  Col,
  Table,
  Container
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { restartProcess } from '../../features/health/actions';
import { capitalize } from '../../util/general';
import { pushAlert, popAlert } from '../../features/alerts/actions';
import showAlert from '../../util/alerts';
import './health.css';

class Health extends Component {
  constructor(props) {
    super(props);

    this.handleRestart = this.handleRestart.bind(this);
  }
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

  async handleRestart(name) {
    await this.props.restartProcess(name);
    if (!this.props.error) {
      this.props.pushAlert(['success', 'Process restart request made successfully']);
    } else {
      this.props.pushAlert(['danger', 'Process restart request failed.']);
    }
    showAlert(this.props.alerts);
    this.props.popAlert();
  }

  render() {
    return (
      <Container>
        <Row>
          {this.showHealthCardChecks()}
          {this.showHealthCardRollup()}
          {this.showHealthCardScheduler()}
        </Row>
        <Container>
          <Row className="mt-4">
            <h3>Checks</h3>
            <Table>
              <thead>
                <tr>
                  <th className="process-row">Process</th>
                  <th className="status-row">Status</th>
                  <th className="actions-row">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.healthData && this.props.healthData.check_processes
                  ? this.props.healthData.check_processes.process_data.map((value, index) => {
                    return (
                      <tr key={index}>
                      <td>{value.name || value.id}</td>
                      <td>{capitalize(value.status)}</td>
                      <td className="action-row-item">
                        <button className="btn btn-link" value={value.name} onClick={() => this.handleRestart(value.name)}>
                          <FontAwesomeIcon icon={faSync} />
                        </button>
                      </td>
                    </tr>
                    )
                  })
                  : (null)
                }
              </tbody>
            </Table>
          </Row>
          <Row className="mt-2">
            <h3>Rollups</h3>
            <Table>
              <thead>
                <tr>
                  <th className="process-row">Process</th>
                  <th className="status-row">Status</th>
                  <th className="actions-row">Actions</th>
                </tr>
              </thead>
              <tbody>
              {this.props.healthData && this.props.healthData.rollup_processes
                  ? this.props.healthData.rollup_processes.process_data.map((value, index) => {
                    return (
                      <tr key={index}>
                      <td>{value.name || value.id}</td>
                      <td>{capitalize(value.status)}</td>
                      <td className="action-row-item">
                        <button className="btn btn-link" value={value.name} onClick={() => this.handleRestart(value.name)}>
                          <FontAwesomeIcon icon={faSync} />
                        </button>
                      </td>
                    </tr>
                    )
                  })
                  : (null)
                }
              </tbody>
            </Table>
          </Row>
          <Row className="mt-2">
            <h3>Recent Failures</h3>
            <Table>
              <thead>
                <tr>
                  <th>Check Name</th>
                  <th>Returned Value</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
              {this.props.failures
                  ? this.props.failures.map((value, index) => {
                    return (
                      <tr key={index}>
                      <td>{value.check.name || value.check.id}</td>
                      <td>{value.returned_value}</td>
                      <td>{value.inserted_at}</td>
                    </tr>
                    )
                  })
                  : (null)
                }
              </tbody>
            </Table>
          </Row>
        </Container>
     </Container>
    );
  }
}

const mapStateToProps = state => ({
  healthData: state.healthReducer.healthData,
  isFetching: state.healthReducer.isFetching,
  error: state.healthReducer.error,
  failures: state.healthReducer.failures,
  alerts: state.alertsReducer.alerts
});

const mapActionsToProps = {
  restartProcess,
  pushAlert,
  popAlert
}

export default connect(mapStateToProps, mapActionsToProps)(Health);