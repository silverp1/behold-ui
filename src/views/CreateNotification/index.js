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
    let target = e.target[1].value;  d

    await this.props.createNotification(
      this.checkId,
      type,
      target
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
