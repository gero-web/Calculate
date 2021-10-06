import * as React from 'react';
import {  Container, Navbar, NavbarBrand } from 'reactstrap';
import '../css/NavMenu.css';

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    public render() {
        return (
            <header>
                <Navbar className="nav_bar" >
                    <Container>
                        <NavbarBrand  className="navBrand" to="/">Calculate</NavbarBrand>
                             <div   className="elipce">
                                 <img />
                            </div>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
