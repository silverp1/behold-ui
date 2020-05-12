import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/navigation';
import Glance from '../../components/glance';
import CheckTable from '../../components/CheckTable';
import { getAllChecks } from '../../features/checks/actions';
import { pushAlert, popAlert } from '../../features/alerts/actions';
import showAlert from '../../util/alerts';
import {
  Button,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

class Default extends Component {
  constructor(props) {
    super(props);

    this.popAlert = this.popAlert.bind(this);
  }

  popAlert() {
    this.props.pushAlert(['success', 'ohboy']);
    showAlert(this.props.alerts);
    this.props.popAlert();
  }

  async componentDidMount() {
    await this.props.getAllChecks();
    showAlert(this.props.alerts);
    this.props.popAlert();
  }

  componentDidUpdate() {
    showAlert(this.props.alerts);
    this.props.popAlert();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container className="mb-5">
          <Glance />
          <CheckTable />
          <Button color="primary" href="/check/create">
            Create Check
          </Button>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  checks: state.checksReducer.checks,
  error: state.checksReducer.error,
  alerts: state.alertsReducer.alerts,
});

const mapActionsToProps = {
  getAllChecks,
  popAlert,
  pushAlert
}

export default connect(mapStateToProps, mapActionsToProps)(Default);
