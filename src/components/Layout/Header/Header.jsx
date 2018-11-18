import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Collapse } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <header>
      </header>
    )
  }
};

export default Header;
