import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/navigation';
import { createNotification } from '../../features/notifications/actions';
import { redirectTo } from '../../util/general';
import { pushAlert, popAlert } from '../../features/alerts/actions';
import showAlert from '../../util/alerts';
import {
  Button,
  Container,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

class CreateNotification extends Component {
  constructor(props) {
    super(props);

    this.submitNotification = this.submitNotification.bind(this);

    let checkId = 0;

    if (!isNaN(parseInt(this.props.match.params.checkId))) {
      checkId = parseInt(this.props.match.params.checkId)
    }

    this.checkId = checkId
  }

  async submitNotification(e) {
    e.preventDefault();

    let type = e.target[0].value;
    let target = e.target[1].value;
    let interval = e.target[2].value;

    if (interval === "none") {
      interval = null;
    }

    await this.props.createNotification(
      this.checkId,
      type,
      target,
      interval
    )

    if (this.props.error) {
      this.props.pushAlert(['danger', 'Check notification failed'])
      showAlert(this.props.alerts);
      this.props.popAlert();
    } else {
      redirectTo(`/check/${this.checkId}`);
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Card>
            <CardBody>
              <CardTitle>Create notification</CardTitle>
              <Form method="POST" onSubmit={this.submitNotification}>
                <FormGroup>
                <Label for="type">Type</Label>
                  <Input type="select" name="type" id="type">
                    <option value="email">Email</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="target">Target</Label>
                  <Input type="text" name="target" id="target" />
                  <FormText color="muted">
                    How Behold will notify you - an email, phone number, etc.
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="interval">Interval</Label>
                  <Input type="select" name="interval" id="interval">
                    <option value="60000">1 minute</option>
                    <option value="120000">2 minutes</option>
                    <option value="300000">5 minutes</option>
                    <option value="600000">10 minutes</option>
                    <option value="900000">15 minutes</option>
                    <option value="1800000">30 minutes</option>
                    <option value="3600000">1 hour</option>
                    <option value="none">None</option>
                  </Input>
                  <FormText color="muted">
                    How often you should receive notifications in addition to the initial
                    alert and the recovery alert. Select "None" if you only want the initial alert
                    and the recovery alert.
                  </FormText>
                </FormGroup>
                <Button className="btn btn-primary" type="submit">Create check</Button>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  message: state.notificationsReducer.message,
  error: state.notificationsReducer.error,
  alerts: state.alertsReducer.alerts
});

const mapActionsToProps = {
  createNotification,
  pushAlert,
  popAlert
}

export default connect(mapStateToProps, mapActionsToProps)(CreateNotification);
