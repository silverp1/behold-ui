import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/navigation';
import Health from '../../components/Health';
import { getHealthData } from '../../features/health/actions';
import { pushAlert, popAlert } from '../../features/alerts/actions';
import showAlert from '../../util/alerts';
import {
  Container
} from 'reactstrap';

class HealthDashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  async componentDidMount() {
    await this.props.getHealthData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Health />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  healthData: state.healthReducer.healthData,
  error: state.healthReducer.error,
  isFetching: state.healthReducer.isFetching
})

const mapActionsToProps = {
  getHealthData
}

export default connect(mapStateToProps, mapActionsToProps)(HealthDashboard);