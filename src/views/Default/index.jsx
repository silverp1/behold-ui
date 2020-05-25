import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/navigation';
import Glance from '../../components/glance';
import CheckTable from '../../components/CheckTable';
import Loading from '../../components/Loading';
import { getAllChecks } from '../../features/checks/actions';
import {
  Button,
  Container
} from 'reactstrap';

class Default extends Component {
  async componentDidMount() {
    await this.props.getAllChecks();
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.props.isFetching
          ? <Loading />
          : (
          <Container className="mb-5">
            <Glance />
            <CheckTable />
            <Button color="primary" href="/check/create">
              Create Check
            </Button>
          </Container>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  checks: state.checksReducer.checks,
  error: state.checksReducer.error,
  alerts: state.alertsReducer.alerts,
  isFetching: state.checksReducer.isFetching
});

const mapActionsToProps = {
  getAllChecks
}

export default connect(mapStateToProps, mapActionsToProps)(Default);
