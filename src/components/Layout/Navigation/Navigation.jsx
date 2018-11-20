import React, { Component } from 'react';
import { NavLink as RDLink } from 'react-router-dom';
import {
  Navbar, Nav, NavItem, NavLink, NavbarToggler,
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={this.toggle} />
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/" tag={RDLink}>Board</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
