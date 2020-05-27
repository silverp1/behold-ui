import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/navigation';
import Health from '../../components/Health';
import Loading from '../../components/Loading';
import { getHealthData, getFailures } from '../../features/health/actions';

class HealthDashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  async componentDidMount() {
    await this.props.getHealthData();
    await this.props.getFailures();
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.props.isFetching
          ? <Loading />
          : <Health />
        }
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
  getHealthData,
  getFailures
}

export default connect(mapStateToProps, mapActionsToProps)(HealthDashboard);