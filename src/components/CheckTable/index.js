import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Container,
  Table,
} from 'reactstrap';

class CheckTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  buildChecks() {
    let val = this.props.checks.forEach(check => {
      return (
        <tr>
          <td>{check.name}</td>
          <td>{check.state}</td>
          <td>{check.type}</td>
          <td>{check.target}</td>
        </tr>
      )
    })
    return val;
  }

  render() {
    return (
      <div>
        <Container>
          <h2 className="mt-3">Checks</h2>
          <Row>
            <Table className="mt-1 mb-3">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Current Status</th>
                  <th>Type</th>
                  <th>Target</th>
                  <th>Last Checked</th>
                </tr>
              </thead>
              <tbody>
                {this.props.checks.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td><a href={`/check/${value.id}`}>{value.name}</a></td>
                      <td>{value.state}</td>
                      <td>{value.type}</td>
                      <td>{value.target}</td>
                      <td>{value.updated_at}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  checks: state.checksReducer.checks,
  isFetching: state.checksReducer.isFetching,
  error: state.checksReducer.error
});

export default connect(mapStateToProps)(CheckTable);
