import React, { Component } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class AppNavbar extends Component {
    
        state = {
            isOpen: false
        }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <Navbar color="dark" dark expand="sm" className="mbb-5">
                <Container>
                    <NavbarBrand href="/">Todo List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar></Nav>
                            <NavItem>
                                <NavLink href="https://github.com/jtkp66">Github</NavLink>
                            </NavItem>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}



export default AppNavbar;
