import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/navigation';
import StatusBar from '../../components/StatusBar';
import Loading from '../../components/Loading';
import { getCheck, getCheckValues } from '../../features/checks/actions';
import { pushAlert, popAlert } from '../../features/alerts/actions';
import { formatDate } from '../../util/general';
import showAlert from '../../util/alerts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Row,
  Col,
  Container,
  Table,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

class Check extends Component {
  constructor(props) {
    super(props);

    let checkId = 0;

    if (!isNaN(parseInt(this.props.match.params.checkId))) {
      checkId = parseInt(this.props.match.params.checkId)
    }

    this.checkId = checkId
  }

 async componentDidMount() {
    await this.props.getCheck(this.checkId);
    await this.props.getCheckValues(this.checkId);
  }

  getProcessIcon(process_status) {
    if (process_status === true) {
      return (<FontAwesomeIcon className="text-success" icon={faCheck} />)
    } else {
      return (<FontAwesomeIcon className="text-danger" icon={faTimes} />)
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container>
          {this.props.isFetching 
            ? <Loading />
            : (
              <div>
                <StatusBar status={this.props.check.state} />
                <h3>{this.props.check.name}</h3>
                <Row className="mb-3">
                  <Col>
                    <ListGroup>
                      <ListGroupItem>
                        <strong>Name</strong>
                        <span className="float-right">{this.props.check.name}</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <strong>Target</strong>
                        <span className="float-right">{this.props.check.target}</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <strong>State</strong>
                        <span className="float-right">{this.props.check.state}</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <strong>Check Process Status</strong>
                        <span className="float-right">
                          {this.props.check.processes ? this.getProcessIcon(this.props.check.processes.check_running) : "Unknown"}
                        </span>
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col>
                  <ListGroup>
                      <ListGroupItem>
                        <strong>Type</strong>
                        <span className="float-right">{this.props.check.type}</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <strong>Last Check</strong>
                        <span className="float-right">{formatDate(this.props.check.updated_at)}</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <strong>Check Created</strong>
                        <span className="float-right">{formatDate(this.props.check.inserted_at)}</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <strong>Rollup Process Status</strong>
                        <span className="float-right">
                          {this.props.check.processes ? this.getProcessIcon(this.props.check.processes.rollup_running) : "Unknown"}
                        </span>
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
                <div className="mb-4">
                  <Button color="danger">Delete check</Button>
                </div>
                <h3>Notifications</h3>
                <Table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Target</th>
                      <th>Interval</th>
                      <th>Last Notified</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.check.alerts && this.props.check.alerts.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td>{value.type}</td>
                          <td>{value.target}</td>
                          <td>{value.interval}</td>
                          <td>{formatDate(value.last_sent)}</td>
                          <td>
                            <a className="btn btn-danger btn-sm ml-1" href={`/notification/${value.id}/delete`}>Delete</a>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
                <div className="mb-4">
                  <Button href={`/check/${this.props.check.id}/notification/create`} color="primary">Create notification</Button>
                </div>
                <h3>Check Results</h3>
                <Table>
                  <thead>
                    <tr>
                      <th>Result</th>
                      <th>Returned Value</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.values && this.props.values.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td>{value.value}</td>
                          <td>{value.returned_value}</td>
                          <td>{formatDate(value.updated_at)}</td>
                        </tr>
                      )
                    })} 
                  </tbody>
                </Table>
              </div>
            )
          }
          
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  check: state.checksReducer.check,
  error: state.checksReducer.error,
  values: state.checksReducer.values,
  isFetching: state.checksReducer.isFetching
  //notifications: state.notificationsReducer.notifications
});

const mapActionsToProps = {
  getCheck,
  getCheckValues,
  pushAlert,
  popAlert,
  showAlert
}

export default connect(mapStateToProps, mapActionsToProps)(Check);
