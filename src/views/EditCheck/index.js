import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/navigation';
import { getCheck, updateCheck } from '../../features/checks/actions';
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

class EditCheck extends Component {
  constructor(props) {
    super(props);

    this.possiblyShowAdvancedOptions = this.possiblyShowAdvancedOptions.bind(this);
    this.submitCheck = this.submitCheck.bind(this);

    this.state = {
      showOptionalFormParams: false
    };

    let checkId = 0;

    if (!isNaN(parseInt(this.props.match.params.checkId))) {
      checkId = parseInt(this.props.match.params.checkId)
    }

    this.checkId = checkId
  }

  async componentDidMount() {
    await this.props.getCheck(this.checkId);
    this.setState({
      showOptionalFormParams: this.props.check.type === "http_json_comparison"
    });  
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

    await this.props.updateCheck(
      name,
      type,
      target,
      value,
      comparison,
      operation,
      interval,
      threshold,
      this.checkId
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
              <Input 
                type="text" 
                name="comparison" 
                id="comparison" 
                value={this.state.comparisonValue || this.props.check.comparison} 
                onChange={e => this.setState({comparisonValue: e.target.value})}
              />
              <FormText color="muted">
                This is what your value will be compared against. For example, if you wanted to confirm
                the JSON key foo.bar is equal to "zap" you would enter zap here. 
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="operation">Operation</Label>
              <Input type="select" name="operation" id="operation">
                <option 
                  value="greater_than"
                  selected={this.isSelected("greater_than", this.props.check.operation)}

                >
                  Greater Than
                </option>
                <option 
                  value="greater_than_or_equal_to"
                  selected={this.isSelected("greater_than_or_equal_to", this.props.check.operation)}
                >
                  Greater than or equal to
                </option>
                <option 
                  value="less_than"
                  selected={this.isSelected("less_than", this.props.check.operation)}
                >
                  Less than
                </option>
                <option 
                  value="less_than_or_equal_to"
                  selected={this.isSelected("less_than_or_equal_to", this.props.check.operation)}
                >
                  Less than or equal to
                </option>
                <option 
                  value="equal_to"
                  selected={this.isSelected("equal_to", this.props.check.operation)}
                >
                  Equal to
                </option>
                <option 
                  value="not_equal_to"
                  selected={this.isSelected("not_equal_to", this.props.check.operation)}
                >
                  Not equal to
                </option>
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

  isSelected(comparison_value, provided_value) {
    return comparison_value === provided_value;
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Card>
            <CardBody>
              <CardTitle>Update check</CardTitle>
              <p>A check is the basic unit of Behold. A check will <em>check</em> a certain resource.</p>
              <Form method="POST" onSubmit={this.submitCheck}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={this.state.nameValue || this.props.check.name} 
                    onChange={e => this.setState({nameValue: e.target.value})}
                  />
                </FormGroup>
                <FormGroup>
                <Label for="type">Type</Label>
                  <Input type="select" name="type" id="type" onChange={this.possiblyShowAdvancedOptions}>
                    <option 
                      value="http" 
                      selected={this.isSelected("http", this.props.check.type)}
                    >
                      HTTP (Status Code)
                    </option>
                    <option 
                      value="ping" 
                      selected={this.isSelected("ping", this.props.check.type)}
                    >
                      Ping
                    </option>
                    <option 
                      value="http_json" 
                      selected={this.isSelected("http_json", this.props.check.type)}
                    >
                      JSON (Validate key exists)
                    </option>
                    <option 
                      value="http_json_comparison" 
                      selected={this.isSelected("http_json_comparison", this.props.check.type)}
                    >
                      JSON (Validate key with logic)
                    </option>
                    <option 
                      value="http_comparison" 
                      selected={this.isSelected("http_comparison", this.props.check.type)}
                    >
                      HTTP (Validate body response)
                    </option>
                    <option 
                      value="dns" 
                      selected={this.isSelected("dns", this.props.check.type)}
                    >
                      DNS
                    </option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="target">Target</Label>
                  <Input 
                    type="text" 
                    name="target" 
                    id="target" 
                    value={this.state.targetValue || this.props.check.target} 
                    onChange={e => this.setState({targetValue: e.target.value})}
                  />
                  <FormText color="muted">
                    What we will be checking. This should be an IP or a URL. 
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="value">Value</Label>
                  <Input 
                    type="text" 
                    name="value" 
                    id="value" 
                    value={this.state.valueValue || this.props.check.value}
                    onChange={e => this.setState({valueValue: e.target.value})}
                  />
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
                    <option 
                      value="60000"
                      selected={this.isSelected(60000, this.props.check.interval)}
                    >
                      1 minute
                    </option>
                    <option 
                      value="120000"
                      selected={this.isSelected(120000, this.props.check.interval)}
                    >
                      2 minutes
                    </option>
                    <option 
                      value="300000"
                      selected={this.isSelected(300000, this.props.check.interval)}
                    >
                      5 minutes
                    </option>
                    <option 
                      value="600000"
                      selected={this.isSelected(600000, this.props.check.interval)}
                    >
                      10 minutes
                    </option>
                  </Input>
                  <FormText color="muted">
                    How often the check should be completed.
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="threshold">Threshold</Label>
                  <Input 
                    type="number" 
                    name="threshold" 
                    id="threshold" 
                    value={this.state.thresholdValue || this.props.check.threshold}
                    onChange={e => this.setState({thresholdValue: e.target.value})}
                  />
                  <FormText color="muted">
                    How many failed checks should occur before you are alerted for a state change.
                  </FormText>
                </FormGroup>
                <Button className="btn btn-primary" type="submit">Update check</Button>
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
  alerts: state.alertsReducer.alerts,
  check: state.checksReducer.check
});

const mapActionsToProps = {
  getCheck,
  updateCheck
}

export default connect(mapStateToProps, mapActionsToProps)(EditCheck);
