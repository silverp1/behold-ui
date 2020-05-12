import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggleOnClick = this.toggleOnClick.bind(this);
    this.isOpen = this.isOpen.bind(this);

    this.state = {};
  }

  componentDidMount() {
    this.setState({
      collapsed: true
    })
  }

  isOpen() {
    return this.state.collapsed;
  }

  toggleOnClick() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="mb-3">
          <Container>
            <NavbarBrand href="/">
              <img src="behold_logo.png" style={{ height: "20px"}}/>
              <span className="pl-2">Behold</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleOnClick} />
          </Container>
        </Navbar>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(Navigation);
