import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/navigation';
import StatusBar from '../../components/StatusBar';
import { getCheck } from '../../features/checks/actions';
import { pushAlert, popAlert } from '../../features/alerts/actions';
import showAlert from '../../util/alerts';
import {
  Button,
  Container,
  Table,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

class Check extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkId: 0
    }
  }

 async componentDidMount() {
    await this.props.getCheck(this.state.checkId);
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
                    <td>{value.last_sent}</td>
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
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  check: state.checksReducer.check,
  error: state.checksReducer.error,
  //values: state.valuesReducer.values,
  //notifications: state.notificationsReducer.notifications
});

const mapActionsToProps = {
  getCheck,
  pushAlert,
  popAlert,
  showAlert
}

export default connect(mapStateToProps, mapActionsToProps)(Check);
