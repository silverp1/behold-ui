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
