import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/navigation';
import { createCheck } from '../../features/checks/actions';
import { redirectTo } from '../../util/general';
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
import showAlert from '../../util/alerts';

class CreateCheck extends Component {
  constructor(props) {
    super(props);

    this.possiblyShowAdvancedOptions = this.possiblyShowAdvancedOptions.bind(this);
    this.submitCheck = this.submitCheck.bind(this);

    this.state = {
      showOptionalFormParams: false
    };
  }

  async possiblyShowAdvancedOptions(e) {
    this.setState({
      showOptionalFormParams: e.target.value === "http_json_comparison"
    });
  }

  async submitCheck(e) {
    e.preventDefault();

    let name = e.target[0].value;
    let type = e.target[1].value;
    let target = e.target[2].value;
    let value = e.target[3].value;
    let comparison;
    let interval;
    let operation;
    let threshold;

    // DOM is changed based on type selection
    // meaning sometimes the indices are different
    if (e.target.length === 8) {
      comparison = e.target[4].value;
      operation = e.target[5].value;
      interval = e.target[6].value;
      threshold = e.target[7].value;
    } else {
      interval = e.target[4].value;
      threshold = e.target[5].value;
    }

    await this.props.createCheck(
      name,
      type,
      target,
      value,
      comparison,
      operation,
      interval,
      threshold
    )

    if (this.props.error) {
      await this.props.pushAlert(['danger', 'Check create failed']);
      showAlert(this.props.alerts)
      await this.props.popAlert();
    } else {
      redirectTo('/');
    }
  }

  renderFormParams() { 
    if (this.state.showOptionalFormParams) {
      return (
          <div>
            <FormGroup>
              <Label for="comparison">Comparison</Label>
              <Input type="text" name="comparison" id="comparison" />
              <FormText color="muted">
                This is what your value will be compared against. For example, if you wanted to confirm
                the JSON key foo.bar is equal to "zap" you would enter zap here. 
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="operation">Operation</Label>
              <Input type="select" name="operation" id="operation">
                <option value="greater_than">Greater Than</option>
                <option value="greater_than_or_equal_to">Greater than or equal to</option>
                <option value="less_than">Less than</option>
                <option value="less_than_or_equal_to">Less than or equal to</option>
                <option value="equal_to">Equal to</option>
                <option value="not_equal_to">Not equal to</option>
              </Input>
              <FormText color="muted">
                This is the operation that will be performed on the comparison. For example, if you wanted
                to confirm the JSON key foo.bar is greater than or equal to 1, comparison would be 1 and
                the operation would be Greater than or equal to. 
              </FormText>
          </FormGroup>       
        </div>
      )   
    }
    return;
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Card>
            <CardBody>
              <CardTitle>Create check</CardTitle>
              <p>A check is the basic unit of Behold. A check will <em>check</em> a certain resource.</p>
              <Form method="POST" onSubmit={this.submitCheck}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" name="name" id="name" />
                </FormGroup>
                <FormGroup>
                <Label for="type">Type</Label>
                  <Input type="select" name="type" id="type" onChange={this.possiblyShowAdvancedOptions}>
                    <option value="http">HTTP (Status Code)</option>
                    <option value="ping">Ping</option>
                    <option value="http_json">JSON (Validate key exists)</option>
                    <option value="http_json_comparison">JSON (Validate key with logic)</option>
                    <option value="http_comparison">HTTP (Validate body response)</option>
                    <option value="dns">DNS</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="target">Target</Label>
                  <Input type="text" name="target" id="target" />
                  <FormText color="muted">
                    What we will be checking. This should be an IP or a URL. 
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="value">Value</Label>
                  <Input type="text" name="value" id="value" />
                  <FormText color="muted">
                    The value you expect to see. If you are looking for a 401 on an HTTP check, put 401 here. For 
                    JSON related checks, this should be the dot-formatted key that will be examined. For example, 
                    if you had a JSON object with the key "foo" pointing to another object "bar" and you wanted
                    to confirm that object existed, you would enter foo.bar here.
                  </FormText>
                </FormGroup>
                {this.renderFormParams()}
                <FormGroup>
                  <Label for="interval">Interval</Label>
                  <Input type="select" name="interval" id="interval">
                    <option value="60000">1 minute</option>
                    <option value="120000">2 minutes</option>
                    <option value="300000">5 minutes</option>
                    <option value="600000">10 minutes</option>
                  </Input>
                  <FormText color="muted">
                    How often the check should be completed.
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="threshold">Threshold</Label>
                  <Input type="number" name="threshold" id="threshold" />
                  <FormText color="muted">
                    How many failed checks should occur before you are alerted for a state change.
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
  message: state.checksReducer.message,
  error: state.checksReducer.error,
  alerts: state.alertsReducer.alerts
});

const mapActionsToProps = {
  createCheck
}

export default connect(mapStateToProps, mapActionsToProps)(CreateCheck);
