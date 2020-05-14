import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capitalize } from '../../util/general';

import './statusbar.css';

class StatusBar extends Component {
  determineClassName() {
		if(this.props.status === "critical") {
			return "status-bar bg-danger"
		}
		return "status-bar bg-success"
	}

	determineWording() {
		return capitalize(this.props.status);
	}

	render() {
		return ( 
			<div className={this.determineClassName()}>
				<div className="status">{this.determineWording()}</div>
			</div>        
		)
	}
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(StatusBar);