import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/navigation';
import StatusBar from '../../components/StatusBar';
import { getCheck, getCheckValues } from '../../features/checks/actions';
import { pushAlert, popAlert } from '../../features/alerts/actions';
import { formatDate } from '../../util/general';
import showAlert from '../../util/alerts';
import {
  Button,
  Container,
  Table
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

  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <StatusBar status={this.props.check.state} />
          <h3>{this.props.check.name}</h3>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.check.name}</td>
              </tr>
            </tbody>
          </Table>
          <div className="mb-4">
            <Button href={`/check/${this.props.check.id}/edit`} color="primary">Edit check</Button>
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
                      <a className="btn btn-primary btn-sm" href={`/notification/${value.id}/edit`}>Edit</a>
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
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
            {this.props.values && this.props.values.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.value}</td>
                    <td>{formatDate(value.updated_at)}</td>
                  </tr>
                )
              })} 
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  check: state.checksReducer.check,
  error: state.checksReducer.error,
  values: state.checksReducer.values,
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
